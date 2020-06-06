---
id: share-your-intellij-settings-through-a-git-repository
title: share-your-intellij-settings-through-a-git-repository

tags: [share, intellij, settings, github, windows]

---

### 1前置条件

 - 禁用插件IDE Settings Sync
   
   - Intellij IDEA --> File --> Settings --> Plugins --> IDE Settings Sync --> disable

 
### 2登录github, 并创建一个token. 用于同步本地intellij设置.

 > token请不要明文保存在网络上, 很危险.

 - [创建token](https://github.com/settings/tokens/new).
   
   - note指标签, 备注说明. 例如: intellij.settings. 
   
   - select scopes指token可执行能力的范围选择, 例如: delete:packages, read:packages, repo, write:packages.

 - 点击Generate token, 创建好之后, 页面返回到[tokens页面](https://github.com/settings/tokens).
   
   - 页面左侧Personal access tokens列表, 最顶部的一个散列就是你刚刚创建好的token.
     
     - 这个token只显示一次.
   
     - 请本地保存这个token.


### 3配置git存储库并上传intellij设置

##### 3.1 [创建你的私人git存储库](https://github.com/new)

##### 3.2 准备上传你本地的intellij设置

 - Intellij IDEA --> File --> Manage IDE Settings --> Settings Repository
 
 - 显示一个窗口, Upstream URL指存储库的上传地址, 填写创建好的存储库地址.
 
   - 例如: [https://github.com/xxx/xxx.intellij.settings](https://github.com/xxx/xxx.intellij.settings)
 
 - 点击Merge. 输入保存的github token.
 
   - Merge指融合, 适用于初次创建设置存储库, 上传本地intellij设置.

   - Override Local指覆盖本地, 

   - Override Remote指覆盖远程,

> 提示, 每次更新项目或者执行推送操作, 或者关闭项目或者退出intellij时, 本地设置将自动与git存储库同步.

### 参考引用

 - https://www.jetbrains.com/help/idea/sharing-your-ide-settings.html#settings-repository
 
 - https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line



