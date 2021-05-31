// 与购物车有关的逻辑
import { toRefs } from 'vue'
import { useStore } from 'vuex'

export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }

  return { cartList, changeCartItemInfo }
}
