var shell = require('shelljs');
var colors = require('colors');
var path = require('path');
require('shelljs-plugin-open');

var currentPath = process.cwd();

function create() {
  shell.cp('-Rf', currentPath + '/node_modules/@mc/fe-server/template', './service');
  console.log('\n----------> mc-server 初始化成功\n'.green);
    // 暂时没有分库，引用路径区分
  console.log('\n----------> 请手动修改MCServer引用路径\n'.yellow);
  console.log('\n----------> 请手动修改pm2.json 以及 agenthub.json 中的项目配置\n'.yellow);
  console.log('\n----------> 请参考views下layout格式为自己的模版文件\n'.yellow);
}

function install() {
  // 版本号暂时写死
  if (shell.exec('npm --registry=https://registrymnpm.stage.yunshanmeicai.com install @mc/fe-server@latest --save-dev', { silent: false }).code === 0) {
    console.log('\n----------> @mc/fe-server安装成功\n'.green);
  }
}

function help() {
  shell.open('https://mnpm.stage.yunshanmeicai.com/package/@mc/fe-server-cli');
}

function run(options) {
  var deployEnv = options.deploy ? options.deploy : 'dev';
  var nodeEnv = options.node ? options.node : 'test';

  if (deployEnv === 'prod') {
    shell.exec(`export NODE_ENV=${nodeEnv} && pm2 start config/pm2.json`, { silent: false });
  
  } else {
    shell.exec(`export NODE_ENV=${nodeEnv} && nodemon index.js`, { silent: false });
  
  }
}

module.exports = {
  create, install, help, run
};
