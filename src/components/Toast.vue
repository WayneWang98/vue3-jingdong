<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Toast',
  props: ['message']
}
export const useToastEffect = () => { // 把和Toast有关的内容封装起来
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })

  const showToast = (message) => {
    toastData.showToast = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.showToast = false
      toastData.toastMessage = ''
    }, 2000)
  }

  const { show, toastMessage } = toRefs(toastData)

  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: $bgColor;
}
</style>
