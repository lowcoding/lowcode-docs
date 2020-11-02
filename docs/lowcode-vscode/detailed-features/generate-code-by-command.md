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

插件会读取当前打开项目的根目录文件夹 `codeTemplate` 内的文件做为模板。

模板文件名必须以 `.ejs` 结尾，模板语法查看 [EJS文档](https://ejs.bootcss.com/)

![](https://jaycewu.coding.net/p/img-host/d/buket1/git/raw/master/2020/11/02/1604292222596.png)

## 模板数据

```js
{
	type: string; // 生成的 ts 接口类型
	requestBodyType：string; // yapi 接口定义需要提交的数据的 ts 接口类型
    funcName: string; // vs 代码编辑器选中的文本通过空格' '分割后的第一个元素
    typeName: string; // vs 代码编辑器选中的文本通过空格' '分割后的第二个元素
    api: {
        query_path: {
            path: string;
        };
        method: string;
        title: string;
        project_id: number;
        req_params: {
			name: string;
			desc: string;
		}[];
        _id: number;
        req_query: { required: '0' | '1'; name: string }[];
        res_body_type: "raw" | "json";
        res_body: string;
        username: string;
    }; // yapi 接口返回的信息，这里只列出可能需要的字段，模板中可以访问到全部
	inputValues: string[]; // vscode 代码编辑器选中的文本通过空格' '分割后的数组，第一个元素就是`funcName`，第二个为 `typeName`
	mockCode：string; // 生成的 mock 代码，主要是 数组类型数据的生成代码
	mockData: string; // 生成的 mock 数据
	rawSelectedText: string; //编辑器中选中的原始文本
    rawClipboardText: string; //系统剪切板中的原始文本
}
```

## 模板例子

```
<%= type %>  
<% if (api.req_query.length > 0 || api.req_params.length > 0) { %>
export interface I<%= funcName.slice(0, 1).toUpperCase() + funcName.slice(1) %>Params {
<% api.req_query.map(query => { %><%= query.name %>: 请手动修改此类型;<% }) %>
<% api.req_params.map(query => { %><%= query.name %>: 请手动修改此类型;<% }) %> 
}
<% } %> 
<% if (requestBodyType) { %>
<%= requestBodyType %> 
<% } %> 

/**
* <%= api.title %> 
* https://yapi.bu6.io/project/<%= api.project_id %>/interface/api/<%= api._id %> 
* @author <%= api.username %>  
* 
<% if (api.req_query.length > 0 || api.req_params.length > 0) { -%>* @param {I<%= funcName.slice(0, 1).toUpperCase() + funcName.slice(1) %>Params} params<% } %>
<% if (requestBodyType) { -%>* @param {I<%= funcName.slice(0, 1).toUpperCase() + funcName.slice(1) %>Data} data<% } %>
* @returns
*/
export function <%= funcName %> (
<% if (api.req_query.length>0 || api.req_params.length > 0) { %>
params: I<%= funcName.slice(0, 1).toUpperCase() + funcName.slice(1) %>Params,
<% } _%>
<% if (requestBodyType) { %> 
data: I<%= funcName.slice(0, 1).toUpperCase() + funcName.slice(1) %>Data
<% } %> 
) {
return request<<%= typeName %>>(`/galaxy<%= api.query_path.path.replace(/\{/g,"${params.") %><% if(api.req_query.length>0) { %>?<% api.req_query.map(query => { %><%= query.name %>=${params.<%= query.name %>}&<% }) %><% } %>`, {
		method: '<%= api.method %>',
<% if (requestBodyType) {%>data,<% } %> 
	})
}
```
