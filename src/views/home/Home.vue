<template>  <!-- vue3允许template下有多个同级容器，区别于vue2 -->
    <div class="wrapper">
      <StaticPart></StaticPart>
      <Nearby></Nearby>
    </div>
    <Docker></Docker>
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .2rem .18rem;
}
</style>
