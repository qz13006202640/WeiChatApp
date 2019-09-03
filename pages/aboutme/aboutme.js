//aboutme.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img:'../../image/logo.png',
    title:'昕昱科技（深圳）发展有限公司',
    intro:'昕昱科技发展（深圳）有限公司坐落在深圳市观澜，是一家专业致力于人工智能系统、智能检测系统、显微镜智能系统、各企业生产检验系统研发制造为主的高科技企业，拥有完全自主研发能力和生产能力，公司目前拥有国内、国际专利17项，依靠深圳得天独厚的地理位置和资源优势，以高科技、新产品、新技术致力于为国内外企业服务。',
    context:'联系方式',
    adress:'深圳市龙华区观光路君澜大厦7Q',
    mobile:'13311503400',
    email:'1643006760@qq.com'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
