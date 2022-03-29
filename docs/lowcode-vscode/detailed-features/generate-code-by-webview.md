---
title: 可视化生成代码
---

## 概述

点击菜单 `LOW-CODE->可视化生成代码` 会打开一个 `webview` 界面。
![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604931686643.png)

## 下载默认物料模板

支持从 `git` 仓库下载或者 `npm` 包下载。下载的物料存放在当前打开项目根目录的 `materials` 文件夹内。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/10/1604939434924.png)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/10/1604939519309.png)

## 相关概念及功能

这里将之前提到的代码模板称为`物料`。分为 `代码片段` 和 `区块`两种类型。

### 代码片段

对应一段代码，内容全部放在一个文件中。使用的时候可以选择将原始内容直接插入代码编辑器光标所在位置，也可以经过 `EJS` 编译之后（代码片段的原始内容作为模板）,将生成的代码插入代码编辑器光标所在位置。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604913962646.png)

### 区块

对应多个文件，使用 `EJS` 全部编译之后，将生成的新文件复制到当前打开项目的指定目录下。

### 模板数据

编译模板的时候传入的`JSON`数据。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604914534544.png)


> 模板数据可以直接在输入框内修改，也可以通过 `Schema 表单` 进行可视化地编辑。

### Schema 表单

通过可视化表单的方式编辑模板数据。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604929751882.png)

### 模板 Schema

通过配置 `JSON Schema`构建 `Schema 表单`，具体用法查看 [form-render文档](https://x-render.gitee.io/form-render/)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604930650205.png)

### JSON TO JS

将模板数据转为 TS 接口类型，并追加到模板数据中。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604936838570.png)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604937064704.png)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604937076854.png)

### 根据 YAPI 接口追加模板数据

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604937193752.png)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/09/1604937235807.png)

### 编辑模板

`代码片段`中，可在生成代码之前对模板进行修改，仅对当此生成代码有效。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/10/1604937614687.png)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host@latest/2020/11/10/1604937748802.png)