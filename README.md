# 美菜 fe-server 辅助工具

## for Developer

```
// 安装生产环境
mnpm install -g @mc/fe-server-cli
mnpm install -g pm2 nodemon

// 在项目跟目录或者需要放置server项目的目录
mc-server-cli install   // 安装@mc/fe-server
mc-server-cli init      // 初始化项目文件

mc-server-cli run -D dev -N test        // 开启开发模式、环境test
```

## for Deploy

```
// 环境设置
./deploy.sh

启动服务
mc-server-cli run -D prod -N production // 开启线上模式、环境production
or
export NODE_ENV=production
pm2 start config/pm2.json

// 监控安装(移动到deploy)
wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash
source ~/.bashrc
tnvm install alinode-v3.11.4
tnvm use alinode-v3.11.4
npm --registry=https://registrymnpm.stage.yunshanmeicai.com install @alicloud/agenthub -g


```

## 释意

init 之后将会产生项目生产所需要的必要文件及项目结构，大部分的框架设计由***fe-server***接管，用户的开发精力集中在router、controller、config配置。

## TODO

* init 安全验证
* init 特殊文件初始化

## 参考

https://help.aliyun.com/document_detail/60338.html?spm=a2c4g.11174283.3.1.119930b1YYWSLR
