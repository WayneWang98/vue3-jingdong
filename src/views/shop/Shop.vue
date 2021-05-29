<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe677;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe687;</span>
        <input class="search__content__input" type="text" placeholder="请输入商品名称"/>
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-show="item.imgUrl"></ShopInfo> <!-- v-show 解决加载时图片闪烁的问题 -->
    <Content></Content>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'

// 获取当前商户信息
const useShopInfoEffect = () => {
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const route = useRoute()
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back() // 返回到上一页面
  }

  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()

    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  line-height: .32rem;
  display: flex;
  margin: .14rem 0 .04rem 0;
  &__back {
    width: .3rem;
    font-size: .2rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bg-color;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      width: 100%;
      height: .32rem;
      display: block;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      color: $content-font-color;
      font-size: .14rem;
      &::placeholder {
        color: $content-font-color;
      }
    }
  }
}
</style>
