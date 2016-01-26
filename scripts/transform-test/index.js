'use strict';

const fs = require('fs');
const path = require('path');
const chai = require('chai');

require('colors');
require('babel-core/register')();

const log = console.log;
console.log = function() {};

global.expect = chai.expect;
global.should = chai.should;
global.assert = chai.assert;

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  const returnValue = [];
  let filepath;
  let subFiles;
  let splitedPath;
  for (let i = 0, len = files.length; i < len; ++i) {
    if (files[i].charAt(0) !== '.') {
      filepath = path.resolve(path.join(dir, files[i]));
      if (fs.lstatSync(filepath).isDirectory()) {
        subFiles = scanDir(path.join(dir, files[i]));
        returnValue.push.apply(returnValue, subFiles);
      } else if (path.extname(files[i]) === '.js') {
        splitedPath = dir.split(path.sep);
        returnValue.push({
          path: path.join(dir, files[i]),
          name: splitedPath[splitedPath.length - 1],
          file: files[i]
        });
      }
    }
  }
  return returnValue;
}

function assertion(task) {
  let isAssertionError;
  let isSyntaxError;
  let message;

  try {
    require(task.path);
  } catch (e) {
    message = e;
    if (e.constructor === SyntaxError) {
      isSyntaxError = true;
    } else if (e.constructor === chai.AssertionError) {
      isAssertionError = true;
    }
  }

  if (isSyntaxError) {
    log('EXCUTE FAILURE'.red, `${task.name}/${task.file}`.cyan, message);
  } else if (isAssertionError) {
    log('ASSERTION FAILURE'.red, `${task.name}/${task.file}`.cyan, message);
  } else {
    log('ASSERTION SUCCESS'.green, `${task.name}/${task.file}`.cyan);
  }
}

function syntax(task) {
  let isSyntaxError;
  let message;
  try {
    require(task.path);
  } catch (e) {
    message = e;
    if (e.constructor === SyntaxError) {
      isSyntaxError = true;
      if (e.message.indexOf('actual.js:') !== -1) {
        message = e.message.split('actual.js:')[1];
      } else {
        message = e.message;
      }
    }
  }

  if (isSyntaxError) {
    log('SYNTAX FAILURE'.red, `${task.name}/${task.file}`.cyan, message);
  } else {
    log('SYNTAX SUCCESS'.green, `${task.name}/${task.file}`.cyan);
  }
}

function runTask(suite) {
  const dirname = path.join(__dirname);
  const tasks = scanDir(path.join(dirname, suite));
  let task;

  for (let i = 0, len = tasks.length; i < len; ++i) {
    task = tasks[i];
    if (task.file === 'actual.js') {
      syntax(task);
    } else if (task.file !== 'expected.js') {
      assertion(task);
    }
  }
}

const suites = fs.readdirSync(__dirname);
for (let i = 0, len = suites.length; i < len; ++i) {
  if (suites[i].charAt(0) !== '.') {
    const filepath = path.resolve(path.join(__dirname, suites[i]));
    if (fs.lstatSync(filepath).isDirectory()) {
      log('\nSUITE'.yellow, suites[i].grey);
      runTask(suites[i]);
    }
  }
}

console.log = log;
