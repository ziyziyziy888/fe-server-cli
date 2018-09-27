var shell = require('shelljs');
var colors = require('colors');

function create() {
  console.log('要初始化了');
}

function install() {
  if (shell.exec('npm --registry=https://registrymnpm.stage.yunshanmeicai.com install @mc/fe-server --save-dev', { silent: true }).code === 0) {
    console.log('\n----------> @mc/fe-server安装成功\n'.green);
  }
}

module.exports = {
  create, install
};
