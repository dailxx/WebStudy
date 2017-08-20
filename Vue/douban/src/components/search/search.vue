<template lang="html">
  <div>
    <div class="top">
      <a href="#" class="close">关闭</a>
      <form action="" method="get">
        <div>
          <input type="search" name="query">
        </div>
      </form>
    </div>
    <div class="middle">
      <div class="row">
        <a href="#">
          <strong style="color: rgb(35, 132, 232);">电影</strong>
          <span>影院热映</span>
        </a>
        <a href="#">
          <strong style="color: rgb(122, 106, 219);">电视</strong>
          <span>正在热播</span>
        </a>
        <a href="#">
          <strong style="color: rgb(159, 120, 96);">图书</strong>
          <span>畅销排行</span>
        </a>
      </div>
      <div class="row">
        <a href="#">
          <strong style="color: rgb(230, 70, 126);">同城</strong>
          <span>周末活动</span>
        </a>
        <a href="#">
          <strong style="color: rgb(42, 184, 204);">小组</strong>
          <span>志趣相投</span>
        </a>
        <a href="#">
          <strong style="color: rgb(244, 143, 46);">音乐</strong>
          <span>新碟榜</span>
        </a>
      </div>
      <div class="row">
        <a href="#">
          <strong style="color: rgb(159, 120, 96);">阅读</strong>
          <span>电子书</span>
        </a>
        <a href="#">
          <strong style="color: rgb(87, 116, 197);">游戏</strong>
          <span>虚拟世界</span>
        </a>
        <a href="#">
          <strong style="color: rgb(89, 108, 221);">应用</strong>
          <span>玩手机</span>
        </a>
      </div>
      <div class="row">
        <a href="#">
          <strong style="color: rgb(225, 100, 77);">东西</strong>
          <span>心爱之物</span>
        </a>
        <a href="#">
          <strong style="color: rgb(64, 207, 169);">FM</strong>
          <span>红心歌单</span>
        </a>
        <a href="#">
          <strong style="color: rgb(66, 189, 86);">市集</strong>
          <span>购买原创</span>
        </a>
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <a href="#">注册帐号</a>
        <a href="#">登录豆瓣</a>
      </div>
      <div class="item">
        <a href="#">使用桌面版</a>
        <a href="#">使用豆瓣App</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  form {
    border-bottom: 1px  solid #f3f3f3;
    padding: 15px 18px 15px 60px;
  }
  input[type=search] {
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
    width: 100%;
    height: 31px;
    font-size: 16px;
    background: url('../../assets/image/search_icon.png') no-repeat 50% #f3f3f3;
    background-size: 17px 17px;
  }
  a {
    text-decoration: none;
    text-align: center;
  }
  .top .close {
    position: absolute;
    display: inline-block;
    top: 20px;
    left: 18px;
    color: #42bd56;
    font-size: 16px;
  }
  .middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 25px;
  }
  .middle .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 25px;
  }
  .middle .row strong {
    display: block;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
  .middle .row span {
    display: block;
    color: #999;
    height: 17px;
    font-size: 12px;
    letter-spacing: 1px;
  }
  .bottom {
    width: 100%;
    border-bottom: 1px  solid #f3f3f3;
    font-size: 0px;
  }
  .bottom .item {
    border-top: 1px  solid #f3f3f3;
    padding: 13px 0;
  }
  .bottom a {
    display: inline-block;
    box-sizing: border-box;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    font-size: 15px;
    color: #42bd56;
  }
  .bottom a:first-child {
    border-right: 1px solid #e5e5e5;
  }
</style>
