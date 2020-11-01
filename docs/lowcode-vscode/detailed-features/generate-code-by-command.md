---
title: 生成代码
---

## 概述

点击菜单 `LOW-CODE->生成代码` 即可使用此功能。

<p></p>
<p></p>

此功能为 [yapi-code](https://marketplace.visualstudio.com/items?itemName=wjkang.yapi-code) 最原始的功能。

当执行此功能的时候，插件内部会判断剪贴板内是否为`yapi`的接口ID（纯数字内容）或者 `JSON` 数据。如果都不是则终止执行。

## 根据 yapi 接口定义生成代码

如果剪贴板内数据为`yapi`的接口ID（纯数字内容），则弹出选择框，选择配置的`yapi`项目（具体如何配置可查看插件配置一节）：


![](https://gitee.com/img-host/img-host/raw/master//2020/11/02/1604248225586.png)

选择项目之后，接着弹框选择模板：

![](https://gitee.com/img-host/img-host/raw/master//2020/11/02/1604248342476.png)

> 模板配置见下一节

## 根据 JSON 生成代码

如果剪贴板内为`JSON`数据，则直接弹框选择模板。

为了方便，如下格式的内容，插件内部都会转为标注格式的`JSON`数据：

```js
const model = {
  title: 'title',
  description: 'description',
};
```

```js
{
  title: 'title',
  description: 'description',
}
```

```json
{
  "title": "title",
  "description": "description"
}
```

## 插入代码

选择完模板之后，插件内部将模板和数据（剪贴板内`JSON`数据或者拉取到的`yapi`接口信息）进行编译，然后将编译得到的代码片段插入到编辑器内光标所在的位置。

## 模板配置