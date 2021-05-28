<template>
  <div class="wrapper">
    <ShopInfo :item="item" :hideBorder="true"></ShopInfo>
  </div>
</template>

<script>
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'Shop',
  components: {
    ShopInfo
  },
  setup () {
    const item = {}
    return { item }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
</style>
