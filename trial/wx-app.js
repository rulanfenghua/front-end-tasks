App({
	onLaunch: function() {
		var logs = wx.getStorageSync('logs') || []
		logs.unshift(Date.now())
		wx.setStorageSync('logs',logs)

		wx.login({
			success: res => {
				// ...
			}
		})

		// 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					wx.getUserInfo({
						success: res => {
							this.globalData.userInfo = res.userInfo

							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res)
							}
						}
					})
				}
			}
		})
	},
	globalData: {
		userInfo: null
	}
})