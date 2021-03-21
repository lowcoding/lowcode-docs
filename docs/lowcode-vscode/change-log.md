---
title: 更新日志
---

# 更新日志

<p></p>

<template>
  <a-timeline>
    <a-timeline-item>
		v1.0.5
		<a-tag color="green">lowcode</a-tag>
		<p>
			更新内容：<br/>
			&emsp;- <a-tag color="orange">新增</a-tag> 区块支持按条件删除文件<br/>
		</p>
	</a-timeline-item>
    <a-timeline-item>
		v1.0.4
		<a-tag color="green">lowcode</a-tag>
		<p>
			更新内容：<br/>
			&emsp;- <a-tag color="orange">新增</a-tag> 脚手架功能<br/>
		</p>
	</a-timeline-item>
    <a-timeline-item>
		v1.0.3
		<a-tag color="green">lowcode</a-tag>
		<p>
			更新内容：<br/>
			&emsp;- <a-tag color="orange">新增</a-tag> webview 获取 yapi 接口信息支持传入接口方法名称<br/>
			&emsp;- <a-tag color="purple">修复</a-tag> yapi domain问题<br/>
		</p>
	</a-timeline-item>
	<a-timeline-item>
		v1.0.2
		<a-tag color="green">lowcode</a-tag>
		<p>
			更新内容：<br/>
			&emsp;- <a-tag color="orange">新增</a-tag> 支持在vscode状态栏增加打开webview菜单<br/>
			&emsp;- <a-tag color="orange">新增</a-tag> 代码片段加入vscode智能提示<br/>
			&emsp;- <a-tag color="orange">新增</a-tag> 代码片段支持vscode原生snippet语法<br/>
			&emsp;- <a-tag color="green">优化</a-tag> 合并yapi-code模板与物料代码片段<br/>
		</p>
	</a-timeline-item>
    <a-timeline-item>
      v1.0.1
      <a-tag color="green">lowcode</a-tag>
      <p>
        更新内容：<br/>
		&emsp;- <a-tag color="purple">修复</a-tag> 修复无法解析带注释的JSON数据<br/>
      </p>
   </a-timeline-item>
   <a-timeline-item>
      v1.0.0
      <a-tag color="green">lowcode</a-tag>
    </a-timeline-item>
    <a-timeline-item>
      v0.1.1
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化webview操作<br/>
		&emsp;- <a-tag color="purple">修复</a-tag> 修复一些问题<br/>
      </p>
    </a-timeline-item>
   <a-timeline-item>
      v0.1.0
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 支持下载 npm 物料包<br/>
		&emsp;- <a-tag color="orange">新增</a-tag> 支持通过可视化更新插件配置项<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.19
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 支持快速添加代码片段<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.18
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 支持可视化操作<br/>
		&emsp;- <a-tag color="orange">新增</a-tag> 支持物料功能<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.17
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 改用 `webpack` 打包，减小插件包大小<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.16
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 支持直接在 `package.json` 中配置插件选项，优先级比 `settings.json` 高 <br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.15
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
		&emsp;- <a-tag color="orange">新增</a-tag> 输出变量 `rawSelectedText`，方便在模板中取到 vs 编辑器中选中的原始文本 <br/>
		&emsp;- <a-tag color="orange">新增</a-tag> 输出变量 `rawClipboardText`，方便在模板中取到系统剪切板中的原始文本 <br/>
        &emsp;- <a-tag color="green">优化</a-tag> 如果通过 vs 编辑器中选中的文本无法解析出 `typeName`，通过 `funcName` 拼凑出 `typeName`，比如 `funcName` 为 `fetch`，则 `typeName` 为 `IFetchResult`<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 编辑器右键菜单插件标题由 `YAPI-CODE->生成代码` 改为 `LOW-CODE->生成代码`<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.0.12
      <a-tag color="blue">yapi-code</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 添加配置项，支持配置：根据 json key 关键字生成相应 mock 数据 <br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 模板中可从 jsonData 取到 json 数据，jsonKeys 取到 json 数据 key 数组<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 支持复制对象类型变量作为 json 数据，不需要标准 json 格式<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 生成的类型可选字段全部转为必选（替换 ?: 为 :）<br/>
      </p>
    </a-timeline-item>
	<a-timeline-item>
      不知道加了什么😀
    </a-timeline-item>
  </a-timeline>
</template>
