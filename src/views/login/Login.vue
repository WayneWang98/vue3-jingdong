<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="text"
        placeholder="请输入用户名"
        v-model="username"
      >
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        type="password"
        placeholder="请输入密码"
        v-model="password"
        autocomplete="new-password"
      >
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="hanldeRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage"></Toast>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

// 封装和登录有关的内容
const useLoginEffect = (showToast) => {
  const router = useRouter() // 获取路由实例
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ // 访问name为Home的页面
          name: 'Home'
        })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }

  const { username, password } = toRefs(data)
  return { handleLogin, username, password }
}

const useRegisterEffect = () => {
  const router = useRouter()
  const hanldeRegisterClick = () => {
    router.push({
      name: 'Register'
    })
  }
  return { hanldeRegisterClick }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  // setup 函数的职责就是告诉你代码的一个执行流程，不应该写很多具体的逻辑在里面
  setup () {
    const { showToast, toastMessage, show } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { hanldeRegisterClick } = useRegisterEffect()

    return {
      username, password, show, toastMessage, handleLogin, hanldeRegisterClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    width: .66rem;
    height: .66rem;
    display: block;
    margin: 0 auto .4rem auto;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    border-radius: 6px;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: $btn-bgColor;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: $bgColor;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
