### 配置react开发环境
- 官方脚手架工具 - create-react-app
- [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
  
``` shell
npx create-react-app ts-with-react --typescript
# 网络不好的话可以使用下面的命令
cnpm install create-react-app -g
# 查询当前镜像
# yarn config get registry
# 设置为淘宝镜像
# yarn config set registry https://registry.npm.taobao.org/
# 设置为官方镜像
# yarn config set registry https://registry.yarnpkg.com
yarn create react-app ts-with-react --template typescript
```

#### 题外小知识：npx是什么？
- npx（npm 5.2以上的版本才有）
- 避免安装全局模式
- 调用项目内部安装的模块
