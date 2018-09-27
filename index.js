#!/usr/bin/env node
var program = require('commander');
var colors = require('colors');

var package = require('./package.json');
var rule = require('./bin/rule.js');

program
  .version(package.version)
  .description('本工具用于产生、维护美菜 server 统一框架');

program
  .command('install')
  .description('安装依赖')
  .action((options) => {
    rule.install();
  });

program
  .command('init')
  .description('生成初始化文件')
  .action((options) => {
    rule.create();
  });

program
  .parse(process.argv);
