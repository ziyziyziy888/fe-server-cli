# 美菜 fe-server 辅助工具

## for Developer

```
// 安装生产环境
mnpm install -g @mc/fe-server-cli

// 安装必要的依赖
mnpm install -g pm2 nodemon

// 在项目跟目录或者需要放置server项目的目录
mnpm init (可选)        // 如果是空项目
mc-server-cli install   // 安装@mc/fe-server
mc-server-cli init      // 初始化项目文件

mc-server-cli run -D dev -N test        // 开启开发模式、环境test
mc-server-cli run -D prod -N production // 开启线上模式、环境production
```

## for Deploy

```
// 打包机器脚本
bash -x ./deploy/pack_environment.sh.sh -v v8.9.1    // 安装依赖等

// 启动服务
bash -x ./deploy/online_environment.sh.sh -v v8.9.1 -e stage  // 线上环境配置（pm2、agenhub等），只需要执行一次

```

## 释意

init 之后将会产生项目生产所需要的必要文件及项目结构，大部分的框架设计由***fe-server***接管，用户的开发精力集中在router、controller、config配置。

server项目和api项目用统一模版，但是在实际业务开发中以功能区分。

讲default.json提供给运维平台做配置文件

## TODO

* init 安全验证
* init 特殊文件初始化

## 参考

https://help.aliyun.com/document_detail/60338.html?spm=a2c4g.11174283.3.1.119930b1YYWSLR
