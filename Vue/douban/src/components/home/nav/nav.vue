<template lang="html">
  <div class="header">
    <div class="content">
      <router-link :to="{ name: 'Home'}">
        <div class="logo"></div>
      </router-link>
      <div>
        <ul>
          <router-link :to="{ name: 'Movie'}" tag="li" style="color: #2384E8;">电影</router-link>
          <router-link :to="{ name: 'Book'}" tag="li" style="color: #9F7860;">图书</router-link>
          <router-link :to="{ name: 'Broadcast'}" tag="li" style="color: #E4A813;">广播</router-link>
          <router-link :to="{ name: 'Group'}" tag="li" style="color: #2AB8CC;">小组</router-link>
        </ul>
        <router-link :to="{ name: 'Search'}" tag="span"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    font-size: 0;
  }
  .content {
    display: flex;
    border-bottom: 1px solid #f3f3f3;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    background-color: #fff;
    height: 47px;
    box-sizing: border-box;
  }
  .logo {
    display: inline-block;
    width: 46px;
    height: 22px;
    background-image: url('../../../assets/image/logo.png');
    background-size: cover;
  }
  ul {
    display: inline-block;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    list-style-type: none;
    font-size: 15px;
    margin-right: 19px;
  }
  span {
    position: relative;
    display: inline-block;
    top: 4px;
    width: 25px;
    height: 18px;
    background-image: url('../../../assets/image/search.png');
    background-size: cover;
  }
</style>
