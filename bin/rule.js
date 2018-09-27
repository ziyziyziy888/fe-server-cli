var shell = require('shelljs');
var colors = require('colors');
var path = require('path');

function create() {
  shell.cp('-Rf', path.resolve(__dirname, '../template/*'), '.');
  console.log('\n----------> mc-server 初始化成功\n'.green);
}

function install() {
  if (shell.exec('npm --registry=https://registrymnpm.stage.yunshanmeicai.com install @mc/fe-server@0.1.0 --save-dev', { silent: false }).code === 0) {
    console.log('\n----------> @mc/fe-server安装成功\n'.green);
  }
}

module.exports = {
  create, install
};
