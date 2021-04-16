# 前端 NPM 命令总结

## 一、起步

主要是指拉取项目

| 命令     | 说明           |
| -------- | -------------- |
| t | 初始化一个仓库 |

## 二、问题收集

主要是针对在使用中所遇见的问题及解决方案

### 1. 解决依赖错误问题

| 命令                    | 说明     |
| ----------------------- | -------- |
| npm config list         | 查看配置 |
| npm cache clean --force | 清除缓存 |
| npm install             | 安装依赖 |

### 2. 解决依赖错误问题

| 命令                                                             | 说明         |
| ---------------------------------------------------------------- | ------------ |
| npm --registry 'https://registry.npm.taobao.org' install express | 临时方式     |
| npm install -g cnpm --registry='https://registry.npm.taobao.org'   | cnpm 方式    |
| npm config set registry 'https://registry.npm.taobao.org'          | 换源         |
| npm config get registry                                          | 验证是否成功 |

### 3. 解决依赖错误问题

| 命令 | 说明 |
| ---- | ---- |
|      |      |

### 4. 解决依赖错误问题

| 命令 | 说明 |
| ---- | ---- |
|      |      |

## 三、mysql

| 名称                          | 说明             |
| ----------------------------- | ---------------- |
| mysqld --initialize --console | 查看初始用户信息 |
| mysqld install                | 安装数据库       |
| net start mysql               | 启动数据库       |
| net stop mysql                | 关闭数据库       |
| sc delete mysql               | 删除数据库服务器 |
| mysql -u root -p              | 进入数据库       |

## 四、HTML5 调节利器

| 序号 | 名称                  | 说明                                                                 |
| ---- | --------------------- | -------------------------------------------------------------------- |
| 1    | Safari                | iPhone 调试利器，查错改样式首选                                      |
| 2    | iOS 模拟器            | 不需要真机，适合调试 Webview 和 H5 有频繁交互的功能页面              |
| 3    | Charles               | Mac OS 系统首选的抓包工具，适合查看、控制网络请求，分析数据情况      |
| 4    | Fiddler               | 适合 Windows 平台，与 Charles 类似，查看、控制网络请求，分析数据情况 |
| 5    | Spy-Debugger          | 移动端调试的利器，便捷的远程调试手机页面、抓包工具                   |
| 6    | Whistle               | 基于 Node 实现的跨平台 Web 调试代理工具                              |
| 7    | Chrome Remote Devices | 依赖 Chrome 来进行远程调试，适合安卓手机远程调试静态页               |
| 8    | localhost 转 ip       | 真机调试，适合远程调试静态页面                                       |
| 9    | vConsole              | 内置于项目，打印移动端日志，查看网络请求以及查看 Cookie 和 Storage   |
