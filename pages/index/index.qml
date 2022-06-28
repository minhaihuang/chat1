<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>

    <button type="primary" bindtap="inRoom"> 开始匹配 </button>
    <br/>
     <button type="primary" bindtap="exitRoom"> 离开房间 </button>
  </view>

  <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view>
</view>
