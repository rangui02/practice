# 前端 GIT 命令总结

## 一、起步

主要是指从远程 clone 拉取项目

| 命令                         | 说明                             |
| ---------------------------- | -------------------------------- |
| git init                     | 初始化一个仓库                   |
| git clone '你的仓库地址'     | 从远程库克隆项目                 |
| git add .                    | 添加本地文件到暂存区             |
| git commit -m '此次提交说明' | 将本地修改文件提交暂存到当前分下 |
| git push origin master       | 将本地修改文件上传到远程仓库存储 |
| git pull master origin       | 可以拉取一次                     |

- **ps：需要输入你的 github 账号还有密码 ，如果账号密码错误， 从新执行步骤**

## 二、命令大全

主要是指对本地以及远程分支的常见操作
|命令|说明|
|--|--|
|git remote -v|查看远程仓库|
|**git push 远程分支名 master**|提交本地分支到远程|
|**git pull 远程分支名 本地分支名**|拉取分支到本地|
|git push -f 远程仓库名 master|强制提交覆盖远程分支|
|git config --global user.name|本地用户名|
|git config --global http.postBuffer 99999999999|配置内存，增加 pull/push 速度|
|git config –-global user.email "\*\*"|本地邮箱|
|**git branch -a**|查看所有分支|
|**git branch**|命令会列出所有分支，当前分支前面会标一个\*号|
|**git branch -D 分支名**|删除一个本地分支|
|**git push origin --delete 分支名**|删除远程分支名|
|git remote rm 仓库名|删除一个远程仓库|
|**git checkout -b 分支名**|创建一个分支并切换到该分支|
|**git checkout 分支名**|切换到某分支|
|git merge 分支名|合并指定分支到当前分支|
|git checkout – 文件名|丢弃工作区修改|
|git reset --hard HEAD^|回滚至上一个版本，可丢弃暂存区修改|
|git reset --hard 提交的 id|回滚至指定版本|
|git rm|删除文件|
|git log|查看提交记录|
|git log --pretty=oneline|查看提交记录简略信息|

## 三、问题收集

主要是针对在使用中所遇见的问题及解决方案
