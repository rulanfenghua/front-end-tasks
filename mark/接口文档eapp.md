## 登陆接口
```
/user/login 手机号密码登陆
post
->
{
	phone,
	password
}
<-
{
	data: {
		level // 权限级别
	}
}
```
```
/login 免登陆
post
->
{
	authCode
}
<-
{
	data: {
		level // 权限级别
	}
}
```

## 首页数据
```
/home/index 首页数据
post
->
{

}
<-
{
	data: {
		img, // 首页图片
		rank, // 排名
		amount, // 当日积分
		name, // 积分最高员工 姓名
		avatar // 积分最高员工 头像
	}
}
```
```
/home/list 首页列表
post
->
{
	pageNum,
	pagesSize
}
<-
{
	data: [
		{
			userName, // 姓名
			approvalTitle, // 文字部分 标题
			approvalContent // 文字部分 内容
			userImg, // 头像
			addIntegral, // 加分情况 加分减分
			integralTypeId // 加分情况 分数类型
			sqTime // 创建时间
		},
		...
	]
}
```

## 工作台
```
work/countLogNun 工作台数据
post
->
{

}
<-
{
	data: {
		counNum1, // 日志数量
		counNum, // 等待审批
		dwsp, // 发起数量
		csrs // 抄送数量
	}
}
```
```
/work/approverLog 审批日志
post
->
{

}
<-
{
	data: [
		{
			approvalId, // 主键
			approvalTitle, // 标题
			userName, // 姓名
			userImg, // 头像
			userDept, // 部门
			userPost, // 职位
			addIntegral, // 加分
			typeId， // 积分类型
			status， // 审批状态
			sqTime, // 审批时间
		}
	]
}
```
```
/work/approverLogDetail/{approvalId} 审批日志详情
get
->
{

}
<- 
{
	data: {
		approvalId, // 主键
		approvalTitle, // 标题
		approvalContent, // 内容
		approvalNum, // 审批编号
		userName, // 姓名
		userImg, // 头像
		userPost, // 部门
		addIntegral, // 加分
		integralTypeId， // 积分类型
		status， // 审批状态
		spTime， // 申请时间
		approvalImg, // 图片
		status, // 状态
		sqTime, // 审批时间
	}
}
```
```
/work/declare/tabs 申报积分页面tabs栏 暂弃
post
->
{

}
<-
{
	data: {
		behavior: [{title},...], // 品德积分列表数据
		moral: [{title},...], // 业绩积分列表数据
		moral: [{title},...] // 行为积分列表数据
	}
}
```
```
/work/declareBehavior 申报积分页面列表数据
post
->
{
	pageNum,
	pageSize,
	search
}
<-
{
	data: [
		{
			behaviorId, // 主键
			behaviorTitle, // 标题
			behaviorContent, // 内容
			zuiDuoIntegral, // 积分范围最多
			zuiShaoIntegral, // 积分范围最少
			shenQingFangShi, // 申请方式
			typeId, // 积分类型
		},
		...
	]
}
```
```
/work/addIntegralApprover form提交
post
->
{
	addIntegral, // 积分申请 加分
	approvalImg, // 备注图片
	spRemark, // 备注
	typeId, // 积分类型
	from: [], // 申请人
	to: [], // 抄送人
	app : [], // 审批人
}
```
```
/work/market 积分商城数据
post
->
{

}
<-
{
	data: {
		points // 积分
	}
}
```
```
/work/market/list 积分商城商品列表
post
->
{

}
<-
{
	data: {
		picture, // 商品图像
		price // 商品所需积分
	}
}
```

## 排行榜
```
/rank
post
->
{
	// 筛选项：时间，部门，职位，积分类型
	// 按日周月季年
}
<-
{
	data: [
		{
			name, // 姓名
			add, // 加分
			deduce, // 扣分
			amount, // 总分
			avatar // 头像
		},
	]
}
```

## 个人中心
```
/personal
post
->
{

}
<-
{
	data: {
		avatar, // 头像
		name, // 姓名
		info, // 部门和职位
		amount, // 总的积分
		base // 基础积分
	}
}
```