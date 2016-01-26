'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// 실행 준비를 마치면 브라우저 창 생성
app.on('ready', () => {
  // 브라우저 생성
  const mainWindow = new BrowserWindow({width: 800, height: 600});

  // 브라우저에서 처음으로 그려질 페이지
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // 브라우저의 개발자 도구 열기
  mainWindow.webContents.openDevTools();

  // 창이 닫히면 프로세스 종료
  mainWindow.on('closed', () => {
    app.quit();
  });
});

require('babel-core/register')({
  ignore: /node_modules/
});
require('./scripts/transform-test');
