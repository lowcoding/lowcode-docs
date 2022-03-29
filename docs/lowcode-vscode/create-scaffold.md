---
title: 脚手架开发
---

## 开始

在模板项目根目录下创建 `lowcode.scaffold.config.json` 文件，将需要做内容动态替换的文件加上 `.ejs` 后缀。

[ejs 语法](https://ejs.bootcss.com/)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host//2022/03/29/1648565022174.png)

## 配置

一个完整 `lowcode.scaffold.config.json` 配置：

```json
{
	"formSchema": {
		"schema": {
			"type": "object",
			"ui:displayType": "row",
			"ui:showDescIcon": true,
			"properties": {
				"port": {
					"title": "监听端口",
					"type": "string",
					"props": {},
					"default": "3000"
				},
				"https": {
					"title": "https",
					"type": "boolean",
					"ui:widget": "switch"
				},
				"lint": {
					"title": "eslint + prettier",
					"type": "boolean",
					"ui:widget": "switch",
					"default": true
				},
				"noREADME": {
					"title": "移除README文件",
					"type": "boolean",
					"ui:widget": "switch",
					"ui:width": "100%",
					"ui:labelWidth": 0,
					"ui:hidden": "{{rootValue.emptyREADME === true}}",
					"default": false
				},
				"emptyREADME": {
					"title": "空README文件",
					"type": "boolean",
					"ui:widget": "switch",
					"ui:hidden": "{{rootValue.noREADME === true}}"
				}
			},
			"labelWidth": 120,
			"displayType": "row"
		},
		"formData": {
			"port": 3000,
			"https": false,
			"lint": true,
			"noREADME": false,
			"emptyREADME": false
		}
	},
	"excludeCompile": ["codeTemplate/", "materials/"],
	"conditionFiles": {
		"noREADME": {
			"value": true,
			"exclude": ["README.md.ejs"]
		},
		"lint": {
			"value": false,
			"exclude": [".eslintrc.js", ".prettierrc.js"]
		}
	}
}
```

`formSchema`：[x-render 表单设计器](https://x-render.gitee.io/generator/playground) 导出的的 schema。

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host//2022/03/29/1648565391753.png)

创建项目的时候会将表单数据传入 ejs 模板中进行编译。

`excludeCompile`：配置不需要经过 ejs 编译的文件夹或文件。

`conditionFiles`：根据表单项的值，在创建项目的时候将某些文件夹或文件删除，比如：

```js
"conditionFiles": {
	"noREADME": {
		"value": true,
		"exclude": ["README.md.ejs"]
	},
	"lint": {
		"value": false,
		"exclude": [".eslintrc.js", ".prettierrc.js"]
	}
}
```

当 `lint` 这个表单项的值为 `false` 的时候，配置的文件夹或文件 ".eslintrc.js"，".prettierrc.js"，将会在创建的项目中排除掉。

## 发布脚手架

将脚手架提交到 git 仓库，注意开放项目的公开访问权限。

## 使用脚手架

### 直接使用 git 仓库地址

vscode 中安装 [lowcode 插件](https://marketplace.visualstudio.com/items?itemName=wjkang.lowcode)

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2021/07/12/1626103888745.png)

> 注意使用 clone 地址，支持指定分支，比如 `-b master https://github.com/lowcode-scaffold/lowcode-mock.git`

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host//2022/03/29/1648566794765.gif)

### 分享到模板列表中快速创建

![](https://cdn.jsdelivr.net/gh/migrate-gitee/img-host//2022/03/29/1648567141626.png)

修改 [仓库](https://github.com/lowcoding/scaffold) 中 `index.json` 内容，提交 pr。

```json
[
	{
		"category": "Starter",
		"icon": "https://s3.ax1x.com/2021/03/07/6M8rdO.png",
		"uuid": "7ba6b1577a6d406f9c14cd4169da2e98",
		"scaffolds": [
			{
				"uuid": "29066c2267cf4d4e91684e9204cbe021",
				"title": "vue2-composition-api-tsx",
				"description": "vue2-composition-api-tsx",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/vue2-composition-api-tsx.git",
				"repositoryType": "git"
			}
		]
	},
	{
		"category": "MVP",
		"icon": "https://s3.ax1x.com/2021/03/07/6M8rdO.png",
		"uuid": "d79d4c7069044f6b994a3c42787800e9",
		"scaffolds": [
			{
				"uuid": "ca4cc6765f0b4755b878b05a7b848391",
				"title": "react-mvp",
				"description": "mvp by mobx, formily/reactive, react hooks",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/react-mvp.git",
				"repositoryType": "git"
			},
			{
				"uuid": "ca4cc6765f0b4755b878b05a7b848392",
				"title": "taro-react-mvp",
				"description": "taro mvp by mobx, formily/reactive, react hooks",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/taro-react-mvp.git",
				"repositoryType": "git"
			},
			{
				"uuid": "ca4cc6765f0b4755b878b05a7b848393",
				"title": "vue-mvp",
				"description": "mvp by mobx, formily/reactive, vue reactive",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/vue-mvp.git",
				"repositoryType": "git"
			},
			{
				"uuid": "ca4cc6765f0b4755b878b05a7b848394",
				"title": "taro-vue-mvp",
				"description": "mvp by mobx, formily/reactive, vue reactive",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/taro-vue-mvp.git",
				"repositoryType": "git"
			},
			{
				"uuid": "ca4cc6765f0b4755b878b05a7b848396",
				"title": "vue2-mvp",
				"description": "mvp by mobx, formily/reactive, vue composition-api",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/vue2-mvp.git",
				"repositoryType": "git"
			},
			{
				"uuid": "ca4cc6765f0b4755b878b05a7b848395",
				"title": "mvp-demo-mock",
				"description": "mvp-demo-mock",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/mvp-demo-mock.git",
				"repositoryType": "git"
			}
		]
	},
	{
		"category": "Other",
		"icon": "https://s3.ax1x.com/2021/03/07/6M8rdO.png",
		"uuid": "a5fc0a2014654339a6785e0d2b8b4809",
		"scaffolds": [
			{
				"uuid": "55daa924065f4d18b78c9263da62923f",
				"title": "lowcode mock",
				"description": "mock and proxy tool",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/lowcode-mock.git",
				"repositoryType": "git"
			},
			{
				"uuid": "16609b8e4c2a410fb7ae0cbd382404ae",
				"title": "lowcode 物料模板",
				"description": "lowcode 物料模板",
				"screenshot": "https://cdn.jsdelivr.net/gh/migrate-gitee/img-host/2020/11/05/1604587962875.jpg",
				"repository": "https://gitee.com/lowcode-scaffold/lowcode-materials.git",
				"repositoryType": "git"
			}
		]
	}
]
```

> 保证 uuid 唯一

## 参考项目

[https://github.com/lowcode-scaffold/lowcode-mock](https://github.com/lowcode-scaffold/lowcode-mock)
