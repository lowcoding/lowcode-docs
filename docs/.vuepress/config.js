module.exports = {
	title: 'lowcode',
	theme: 'antdocs',
	description: '低代码工具',
	base: '/',
	head: [
		['link', { rel: 'icon', href: '/assets/logo.png' }],
		['meta', { name: 'referrer', content: 'never' }],
		[
			'meta',
			{
				name: 'keywords',
				content: 'lowcode',
			},
		],
	],
	markdown: {
		lineNumbers: false,
		anchor: {
			permalinkBefore: false,
		},
	},
	themeConfig: {
		backToTop: true,
		smoothScroll: true,
		logo: '/assets/logo.png',
		nav: require('./config/nav'),
		sidebar: {
			'/lowcode-mock/': ['/lowcode-mock/'],
			'/lowcode-vscode/': [
				'/lowcode-vscode/',
				'getting-started',
				{
					title: '具体功能及使用指南',
					collapsable: false,
					sidebarDepth: 2,
					path: '/lowcode-vscode/detailed-features/',
					children: [
						'detailed-features/generate-code-by-command',
						'detailed-features/generate-code-by-webview',
						'detailed-features/quick-add-snippet',
					],
				},
				'create-materials',
				'config',
				'change-log',
				'todo',
			],
		},
		sidebarDepth: 2,
		lastUpdated: '上次更新',
		repo: 'https://github.com/lowcoding',
		editLinks: false,
		ads: {
			style: 3,
			title: '赞助商',
			btnText: '成为赞助商',
			msgTitle: '成为赞助商',
			msgText:
				'如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 Lowcode 文档侧边栏等页面。',
			msgOkText: '确定',
		},
	},
	plugins: {
		'@vuepress/medium-zoom': {
			selector: 'img',
		},
	},
}
