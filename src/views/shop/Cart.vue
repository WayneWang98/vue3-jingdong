<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// 和购物车信息有关的逻辑
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count * product.price
      }
    }
    return count.toFixed(2)
  })

  return { total, price }
}

export default {
  name: 'Cart',
  setup () {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  box-sizing: border-box;
  height: .49rem;
  line-height: .49rem;
  border-top: .01rem solid $content-bg-color;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem; // 浏览器中最小文字为12px，如果width设置为10px，会有问题，所以这里设置为20px再进行等比例缩小
      height: .2rem;
      line-height: .2rem;
      background: $hightlight-fontColor;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-font-color;
    font-size: .12rem;
    &__price {
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    font-size: .14rem;
    text-align: center;
  }
}
</style>
