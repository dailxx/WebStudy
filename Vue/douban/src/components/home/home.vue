<template lang="html">
  <div>
    <m-nav></m-nav>
    <div class="page">
      <div class="card">

      </div>
    </div>
  </div>
</template>

<script>
import MNav from '@/components/home/nav/nav'

export default {
  components: {
    MNav
  }
}
</script>

<style lang="css">
  .page {
    padding-top: 47px;
    max-width: 650px;
    background-color: #fff;
    margin: 0 auto;
    overflow-x: hidden;
    height: 100px;
  }
  .card {
    margin: 0 18px;
    height: 100px;
  }
</style>
