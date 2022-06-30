<view >
  <view>
    <button wx:if="{{!hasUserInfo && canIUse}}" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block wx:else>
      <image bindtap="bindViewTap" class="userinfo-avatar" src="{{userInfo.avatarUrl}}" mode="cover"></image>
      <!-- <text class="userinfo-nickname">{{userInfo.nickName}}</text> -->
    </block>
    <button  class="userinfo" type="primary" size="mini" bindtap="randomName"> 随机起名 </button>
  </view>
</view>
<!-- <text qq:for="{{nameArray}}">
 {{item}}
</text> -->
<view style="margin-top:20px"/>

<radio-group class="radio-group" bindchange="radioChangeSex">
  性：
   <label class="radio" qq:for="{{sexItems}}">
    <radio style="margin-left:10px" value="{{item.value}}" checked="{{item.checked}}" bindtap="sexRadioClick" data-value="{{item.value}}" />
    {{item.name}}
  </label>
</radio-group>

<radio-group class="radio-group" bindchange="radioChangeFirstName" style="margin-top:5px">
  姓：
   <label class="radio" qq:for="{{firstNameItems}}">
    <radio style="margin-left:10px" value="{{item.value}}" checked="{{item.checked}}" bindtap="firstNameRadioClick" data-value="{{item.value}}" />
    {{item.name}}
  </label>
</radio-group>

<radio-group class="radio-group" bindchange="radioChangeLastName" style="margin-top:5px">
  名：
  <label class="radio" qq:for="{{lastNameItems}}">
    <radio style="margin-left:10px" value="{{item.value}}" checked="{{item.checked}}" bindtap="lastNameRadioClick" data-value="{{item.value}}" />
    {{item.name}}
  </label>
</radio-group>

<view style="margin-top:20px"/>

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

<view class="download-button">
  <button type="primary" style = "backgroup-color:green" size="mini" bindtap="randomName"> 下载常用姓氏 </button>
  <button type="primary" size="mini" bindtap="randomName"> 下载常用汉字 </button>
</view>

