var shell = require('shelljs');
var colors = require('colors');
var path = require('path');

var currentPath = process.cwd();

function create() {
  shell.cp('-Rf', currentPath + '/node_modules/@mc/fe-server/template/*', '.');
  console.log('\n----------> mc-server 初始化成功\n'.green);
}

function install() {
  // 版本号暂时写死
  if (shell.exec('npm --registry=https://registrymnpm.stage.yunshanmeicai.com install @mc/fe-server@latest --save-dev', { silent: false }).code === 0) {
    console.log('\n----------> @mc/fe-server安装成功\n'.green);
    // 暂时没有分库，引用路径区分
    console.log('\n----------> 请手动修改MCServer引用路径\n'.yellow);
  }
}

module.exports = {
  create, install
};
