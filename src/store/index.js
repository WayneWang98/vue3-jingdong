import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层级是商铺的id，第二层是商品id（存放商品的详细信息）
      // shopId: {
      //   111: {
      //     _id: '1',
      //     name: '番茄250g/份',
      //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
      //     sales: 10,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   }
      // }
    }
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productId]
      if (!product) { // 该商店初始时没有该商品
        product = productInfo
        product.count = 0
      }
      product.count = product.count + num
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo[productId] = product
      this.state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
