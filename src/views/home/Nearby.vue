<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="item in nearbyList"
      :to="`/shop/${item._id}`"
      :key="item._id"
    > <!-- 要在 router-link 中使用v-for，而不是在组件上 -->
      <ShopInfo
        :item="item"
        :hideBorder="false"
      >
      </ShopInfo>
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    color: $content-font-color;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
}
</style>
