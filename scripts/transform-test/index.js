import 'colors';
import fs from 'fs';
import path from 'path';
import chai from 'chai';
import React from 'react';

const DEBUG = false;
const log = console.log.bind(console);

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  const returnValue = [];

  let filepath;
  let subFiles;

  for (let i = 0, len = files.length; i < len; ++i) {
    if (files[i].charAt(0) !== '.') {
      filepath = path.resolve(path.join(dir, files[i]));
      if (fs.lstatSync(filepath).isDirectory()) {
        subFiles = scanDir(path.join(dir, files[i]));
        returnValue.push.apply(returnValue, subFiles);
      } else if (path.extname(files[i]) === '.js' && files[i] !== 'expected.js') {
        returnValue.push({
          path: path.join(dir, files[i]),
          file: files[i],
          fail: files[i] === 'actual.js' && !fs.existsSync(path.join(dir, 'expected.js'))
        });
      }
    }
  }
  return returnValue;
}

function execute(task) {
  let err = null;
  let msg = null;

  try {
    require(task.path);
  } catch (e) {
    err = e;
  }

  if (err) {
    if (err.constructor === SyntaxError && !task.fail
      || err.constructor === ReferenceError && task.file !== 'actual.js'
      || err.constructor === TypeError && task.file !== 'actual.js'
      || err.constructor === Error && task.file !== 'actual.js'
      || err.constructor === chai.AssertionError
    ) {
      msg = err.message;
    } else if (DEBUG) {
      msg = err.message;
    }

    if (msg) {
      if (msg.indexOf(`${task.file}:`) !== -1) {
        msg = msg.split(`${task.file}:`)[1];
      }

      log(
        `[${err.constructor.name.red}]`,
        task.suite.yellow,
        `${task.path.split(task.suite)[1]}`.cyan,
        `\n => ${msg.grey}`
      );
    }
  }

  return msg ? true : false;
}

function runTask(suite) {
  const dirname = path.join(__dirname);
  const tasks = scanDir(path.join(dirname, suite));

  let okCount = 0;
  let errCount = 0;

  for (let i = 0; i < tasks.length; ++i) {
    if (tasks[i].file !== 'expected.js') {
      tasks[i].suite = suite;
      if (execute(tasks[i])) {
        errCount++;
      } else {
        okCount++;
      }
    }
  }

  return [okCount, errCount];
}

module.exports = function() {
  console.log = function() {};

  global.React = React;
  global.expect = chai.expect;
  global.should = chai.should;
  global.assert = chai.assert;

  const suites = fs.readdirSync(__dirname);
  let okCount = 0;
  let errCount = 0;

  for (let i = 0, len = suites.length; i < len; ++i) {
    if (suites[i].charAt(0) !== '.') {
      const filepath = path.resolve(path.join(__dirname, suites[i]));
      if (fs.lstatSync(filepath).isDirectory()) {
        const counts = runTask(suites[i]);
        okCount += counts[0];
        errCount += counts[1];
      }
    }
  }

  log(
    '\nES6 TRANSFORM TEST'.magenta,
    `total cases: ${okCount + errCount},`,
    `error: ${errCount}\n`.red
  );

  delete global.React;
  delete global.expect;
  delete global.should;
  delete global.assert;

  console.log = log;
};
