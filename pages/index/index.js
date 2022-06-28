//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
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
      qq.getUserInfo({
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
  },
  inRoom: function () {
    qq.joinVoIPChat({
      signature: "b002b824688dd8593a6079e11d8c5e8734fbcb39a6d5906eb347bfbcad79c617",
      nonceStr: "8AP6DT9ybtniUJfb",
      timeStamp: 1559129714,
      groupId: "1559129713_672975982",
      muteConfig: {
        muteMicrophone: 0,
        muteEarphone: 0
      },
      success: function(res){
        console.log(res)
      },
      fail: function(res){
        console.log(res)
      },
      complete: function(res){
        console.log(res)
      }
    })
  },
  exitRoom: function(){
    qq.exitVoIPChat({
      success: function(res){
        console.log(res)
      },
      fail: function(res){
        console.log(res)
      },
      complete: function(res){
        console.log(res)
      }
    })
  }
})
