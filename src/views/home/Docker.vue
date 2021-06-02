<template>
  <div class="docker">
    <div
      :class="{'docker__item': true, 'docker__item--active': index === 0}"
      v-for="(item, index) in dockerList"
      :key="item.icon"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe6f1;', text: '首页', to: { name: 'Home' } },
      { icon: '&#xe603;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe605;', text: '订单', to: { name: 'Home' } },
      { icon: '&#xe603;', text: '我的', to: { name: 'Home' } }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01px solid $content-bg-color;
  color: $content-font-color;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-font-color;
      text-decoration: none;
    }
    .iconfont {
      font-size: .2rem;
      margin: .07rem 0 .02rem 0;
    }
    &--active {
      a {
        color: #1FA4FC;
      }
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
