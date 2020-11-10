---
title: 物料开发
---

## 下载物料模板

`git clone https://gitee.com/lowcoding/lowcode-materials-template.git`

或者直接在插件中选择内置的模板下载即可。

## 目录结构

`区块` 类型的物料放到 `blocks` 文件夹下，`代码片段` 类型的物料放到 `snippets` 文件夹下。

```
materials
   ├── blocks # 区块目录
   |  ├── 区块模板1 # 具体区块
   |  |  ├── config
   |  |  |  ├── model.json # 预设模板数据
   |  |  |  ├── preview.json # 模板描述
   |  |  |  └── schema.json # 模板 Schema
   |  |  └── src # 区块源码，编译后按原有结构拷贝到项目中
   |  |     ├── components
   |  |     |  └── Title
   |  |     |     └── index.tsx.ejs
   |  |     └── index.tsx.ejs
   |  └── 区块模板2
   |     ├── config
   |     |  ├── model.json
   |     |  ├── preview.json
   |     |  └── schema.json
   |     └── src
   |        ├── components
   |        |  └── Title
   |        |     └── index.tsx.ejs
   |        └── index.tsx.ejs
   └── snippets # 代码片段目录
      ├── 代码片段1 # 具体代码片段
      |  ├── config 
      |  |  ├── model.json # 预设模板数据
      |  |  ├── preview.json # 模板描述
      |  |  └── schema.json # 模板 Schema
      |  └── src
      |     └── template.ejs # 代码片段模板
      └── 代码片段2
         ├── config
         |  ├── model.json
         |  ├── preview.json
         |  └── schema.json
         └── src
            └── template.ejs
```

>模板描述支持 `title` (标题)，`description` (描述)，`img` (预览图片)。


## 开发调试

物料开发时的目录结构与发布后的保持一致，所以开发的过程中可以直接使用插件进行调试和查看效果。

## 发布物料

**发布到 `git` 仓库**

将开发好的物料放到 `git` 仓库中，将 `clone` 地址分享出去即可，私有部署的 `git` 环境也可以，只要能 `clone` 就行。

> 如果想把项目中开发好的物料分享出去，也只需要将项目 `git clone` 地址分享出去就行。如果项目资源很多，可能会比较慢。

**发布 `npm` 包**

将开发好的物料发布到 `npm`，下载的时候可以指定版本下载，比如`@lowcoding/materials-template@1.0.0`

> 如果发布到私有仓库，正确设置npm的registry即可

