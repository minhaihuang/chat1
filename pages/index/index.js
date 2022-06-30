
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo'),
    nameArray: [],
    sexValue: 0,
    firstNameValue: 0,
    lastNameValue: 0,
    sexItems: [
      {
        "name": '男性',
        "checked": false,
        "value": 1
      },
      {
        "name": '女性',
        "checked": false,
        "value": 2
      }
    ],
    firstNameItems: [
      {
        "name": '单姓',
        "checked": false,
        "value": 1
      },
      {
        "name": '复性',
        "checked": false,
        "value": 2
      }
    ],
    lastNameItems: [
      {
        "name": '单字',
        "checked": false,
        "value": 1
      },
      {
        "name": '双字',
        "checked": false,
        "value": 2
      }
    ]
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
  randomName: function (){
    qq.request({
          url: 'http://10.194.132.51:8080/name/random?length=2', // 仅为示例，并非真实的接口地址
          header: {
            'content-type': 'text/plain' // 默认值
          },
          method: 'get',
          success: res => {
            console.log(res)
             this.setData({
              nameArray: res.data
            })
          },
          fail(res){
            console.log(res)
          }
        })
  },
  inRoom: function () {
    // appId
    const appId = "1112220200"
    // 获取sessionKey
    const sessionKey = qq.getStorageSync("sessionKey")
    console.log("sessionKey为："+ sessionKey)
    // 从后端获取房间号
    const groupId = "1559129713_672975981"
    // 随机数
    const nonceStr = "8AP6DT9ybtniUJfb"
    // 获取时间戳
    var timeStamp = Date.parse(new Date());
    timeStamp = timeStamp / 1000;
    console.log("当前时间戳为：" + timeStamp);
    // 签名
    let str = [appId, groupId, nonceStr, timeStamp].sort().join('')
    console.log(str)
    const CryptoJS = require('../../utils/CryptoJS.js')
    let signature = CryptoJS.HmacSHA256('1559129713_67297598215591297148AP6DT9ybtniUJfbwx20afc706a711eefc', sessionKey).toString()
    qq.joinVoIPChat({
      signature: signature,
      nonceStr: nonceStr,
      timeStamp: timeStamp,
      groupId: groupId,
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
  },
  radioChangeSex: function(e){
    //  console.log('radio发生change事件，携带value值为：', e.detail.value)
    //  this.setData({
    //    sexValue: e.detail.value
    //  })
    //  console.log(this.data.sexValue)
  },
  sexRadioClick: function(e){
    console.log(e.currentTarget.dataset.value)
    console.log(this.data.sexValue == e.currentTarget.dataset.value)
    console.log(this.data.sexValue)
    if(this.data.sexValue == e.currentTarget.dataset.value){
      
      this.setData({
        sexItems: [
              {
                "name": '男性',
                "checked": false,
                "value": 1
              },
              {
                "name": '女性',
                "checked": false,
                "value": 2
              }
            ],
        sexValue: 0
        })
    }else{
       this.setData({
       sexValue: e.currentTarget.dataset.value
     })
    }
  },
  firstNameRadioClick: function(e){
    if(this.data.firstNameValue == e.currentTarget.dataset.value){
      this.setData({
        firstNameItems: [
              {
                "name": '单姓',
                "checked": false,
                "value": 1
              },
              {
                "name": '复姓',
                "checked": false,
                "value": 2
              }
            ],
        firstNameValue: 0
        })
    }else{
       this.setData({
       firstNameValue: e.currentTarget.dataset.value
     })
    }
  },
  lastNameRadioClick: function(e){
    if(this.data.lastNameValue == e.currentTarget.dataset.value){
      this.setData({
        lastNameItems: [
              {
                "name": '单字',
                "checked": false,
                "value": 1
              },
              {
                "name": '双字',
                "checked": false,
                "value": 2
              }
            ],
        lastNameValue: 0
        })
    }else{
       this.setData({
       lastNameValue: e.currentTarget.dataset.value
     })
    }
  }
})
