---
id: use-docusaurus-create-a-blog-and-deploy-to-github-pages
title: use-docusaurus-create-a-blog-and-deploy-to-github-pages

tags: [docusaurus, deploy, github-pages, windows]

---



### 1前置需求

 - [node.js](https://nodejs.org/zh-cn/) (版本 >= 10.15.1)

 - [yarn](https://classic.yarnpkg.com/zh-Hans/docs/install#windows-stable) (版本 >= 1.5)


### 2创建docusaurus v2项目

my-website: 你的网站文件夹
```
npx @docusaurus/init@next init my-website classic

```

示例:
```
npx @docusaurus/init@next init vacantthinker.blog.docusaurus2 classic

```

下载你的github存储库, 覆盖上述命令创建的同名文件夹. (建议两者同名)

### 3项目结构

```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock

```

### 4本地测试运行

```
cd my-website
npm run start
```

```
cd my-website
yarn run start
```

### 4.1设置只有博客, 没有文档 [可选项]

 - 1删除 src/pages文件夹下的 index.js

 - 2修改 docusaurus.config.js
```
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
      },
    ],
  ],
};

```

### 5配置docusaurus.config.js文件

| 名称               | 描述         |
| -----------       | ----------- |
| organizationName  | 组织名, 通常是你的github组织名或者用户名       |
| projectName       | 项目名, 通常是你的存储库名, 例如: my-website        |
| url               | URL, 统一资源定位符, github page's 用户或组织页面 [https://username.github.io](https://username.github.io) |
| baseUrl           | 基本URL, 对于托管在github上的项目, 其格式是 "/projectName/". 当前项目后缀不是github.io, 就填写 projectName. 那么默认访问index就是 [https://_organizationName_.github.io/projectName](https://_organizationName_.github.io/projectName) |


示例:
```
module.exports = {
  // ...
  url: 'https://endiliey.github.io', // 你的网站 URL
  baseUrl: '/',
  projectName: 'endiliey.github.io',
  organizationName: 'endiliey',
  // ...
};
```
vacantthinker.github.io
```
    url: 'https://vacantthinker.github.io',
    baseUrl: '/',
    projectName: 'vacantthinker.github.io', 
    organizationName: 'vacantthinker', 
```
vacantthinker.repo
```
  url: 'https://vacantthinker.github.io',
  baseUrl: '/vacantthinker.repo/',
  projectName: 'vacantthinker.repo',
  organizationName: 'vacantthinker',
```

### 6部署至github pages

```
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

示例:
```
cmd /C "set "GIT_USER=vacantthinker" && yarn deploy"

    "windows-deploy": "cmd /C \"set \"GIT_USER=vacantthinker\" && yarn deploy\"",

```

##### 6.1部署区别

 - 后缀是github.io
   
   - 运行上述部署命令, 默认部署到master分支. master分支存储构建之后的纯粹静态网页. 项目代码可使用git提交至另外一个分支, 例如repo
   - 示例: [https://github.com/VacantThinker/vacantthinker.github.io](https://github.com/VacantThinker/vacantthinker.github.io)
  
 - 后缀非github.io
   
   - 运行上述部署命令, 默认部署到gh-pages分支. master分支存储项目代码, gh-pages分支存储构建之后的存粹静态网页.
   - 示例: [https://github.com/VacantThinker/vacantthinker.repo](https://github.com/VacantThinker/vacantthinker.repo)

### 参考引用

 - https://v2.docusaurus.io/docs/installation
 - https://v2.docusaurus.io/docs/deployment

