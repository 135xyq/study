// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from 'D:/学习/前端/前端代码/study/react/studentAdmin/src/app.js';
import { PluginManager } from 'umi';

export function getPlugins() {
  return [
    {
      apply: Plugin_0,
      path: process.env.NODE_ENV === 'production' ? void 0 : 'D:/学习/前端/前端代码/study/react/studentAdmin/src/app.js',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','patchClientRoutes','modifyContextOpts','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange',];
}

let pluginManager = null;
export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });
  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
