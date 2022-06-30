<view class="container">
  <view class="userinfo">
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>

  <button type="primary" bindtap="randomName"> 随机起名 </button>

  <!-- <view class="usermotto">
    <text class="user-motto">{{motto}}</text>
  </view> -->
</view>


<!-- <text qq:for="{{nameArray}}">
 {{item}}
</text> -->
<view>
  <text class="name-txt">{{nameArray[0]}}</text>
  <text class="name-txt">{{nameArray[1]}}</text>
  <text class="name-txt">{{nameArray[2]}}</text>
  <text class="name-txt">{{nameArray[3]}}</text>
</view>
<view style="white-space:pre-wrap">\n</view>
<view>
  <text class="name-txt">{{nameArray[4]}}</text>
  <text class="name-txt">{{nameArray[5]}}</text>
  <text class="name-txt">{{nameArray[6]}}</text>
  <text class="name-txt">{{nameArray[7]}}</text>
</view>
<view style="white-space:pre-wrap">\n</view>
<view>
  <text class="name-txt">{{nameArray[8]}}</text>
  <text class="name-txt">{{nameArray[9]}}</text>
  <text class="name-txt">{{nameArray[10]}}</text>
  <text class="name-txt">{{nameArray[11]}}</text>
</view>
<view style="white-space:pre-wrap">\n</view>
<view>
  <text class="name-txt">{{nameArray[12]}}</text>
  <text class="name-txt">{{nameArray[13]}}</text>
  <text class="name-txt">{{nameArray[14]}}</text>
  <text class="name-txt">{{nameArray[15]}}</text>
</view>
<view style="white-space:pre-wrap">\n</view>
<view>
  <text class="name-txt">{{nameArray[16]}}</text>
  <text class="name-txt">{{nameArray[17]}}</text>
  <text class="name-txt">{{nameArray[18]}}</text>
  <text class="name-txt">{{nameArray[19]}}</text>
</view>

