export default {
	'0': [
		{
			label: "站点设置",
			path: "/site-set",
			icon: 'icon-setting',
			component: 'views/allIndex/site',
		},
		{
			label: "注册登录",
			path: "/sign-up-set",
			icon: 'icon-instagram-fill',
			component: 'views/allIndex/signUp',
		},
		{
			label: "三方登录",
			path: "/worth-mentioning-set",
			icon: 'icon-apartment',
			component: 'views/allIndex/worthMentioning',
		},
		{
			label: "支付设置",
			path: "/pay-set",
			icon: 'icon-moneycollect',
			component: 'views/allIndex/pay',
		},
		{
			label: "附件设置",
			path: "/annex-set",
			icon: 'icon-file-GIF',
			component: 'views/allIndex/annex',
		},
		{
			label: "水印设置",
			path: "/water-mark-set",
			icon: 'icon-file-image',
			component: 'views/allIndex/waterMark',
		},
		{
			label: "过滤设置",
			path: "/content-filter-set",
			icon: 'icon-filter',
			component: 'views/allIndex/contentFilter',
		},
		{
			label: "腾讯云设置",
			path: "/tencent-cloud-set",
			icon: 'el-icon-cloudy',
			component: 'views/allIndex/tencentCloud',
		},
		{
			label: "通知设置",
			path: "/system-notice-set",
			icon: 'el-icon-bell',
			component: 'views/allIndex/noticeSet',
		},
		{
			label: "其他服务设置",
			path: "/system-other-set",
			icon: 'el-icon-wind-power',
			component: 'views/allIndex/otherSet',
		},
	],
	'1': [
		{
			label: "用户管理",
			path: "/user",
			icon: 'el-icon-user',
			component: 'views/user/user',
		},
		{
			label: "角色管理",
			path: "/user-role-set",
			icon: 'el-icon-s-custom',
			component: 'views/user/role',
		},
		{
			label: "用户审核",
			path: "/user-review-set",
			icon: 'el-icon-s-check',
			component: 'views/user/userReview',
		},
	],
	'2': [
		{
			label: "内容分类",
			path: "/cont-class",
			icon: 'icon-align-left',
			component: 'views/cont/contClass',
		},
		{
			label: "内容管理",
			path: "/cont-manage",
			icon: 'icon-filesearch',
			component: 'views/cont/contManage',
		},
		{
			label: "内容审核",
			path: "/cont-review",
			icon: 'icon-audit',
			component: 'views/cont/contReview',
		},
		{
			label: "话题管理",
			path: "/topics-management",
			icon: 'icon-number',
			component: 'views/cont/topics',
		},
		{
			label: "举报管理",
			path: "/report-manage",
			icon: 'icon-error',
			component: 'views/cont/reportManage',
		},
		{
			label: "回收站",
			path: "/recycle-bin",
			icon: 'el-icon-delete',
			component: 'views/cont/recycleBin',
		},
	],
	'3': [
		{
			label: "资金明细",
			path: "/wallet-details",
			icon: 'icon-wallet',
			component: 'views/wallet/fundDetails',
		},
		{
			label: "订单列表",
			path: "/order-record",
			icon: 'icon-rizhi',
			component: 'views/wallet/orderRecord',
		},
		{
			label: "提现管理",
			path: "/withdrawal-application",
			icon: 'icon-moneycollect-fill',
			component: 'views/wallet/withdrawalApplication',
		},
		{
			label: "财务统计",
			path: "/financial-statistics",
			icon: 'icon-linechart',
			component: 'views/wallet/financialStatistics',
		},
	]
}
