import { getLocalStorage } from "~/composables/utils/useLocalStorage"

export default defineNuxtRouteMiddleware((to) => {
    const isLoggedIn = useCookie('discord_token').value || getLocalStorage('discord_token')
  
    if (to.path === '/saved' && !isLoggedIn) {
      alert('Chưa đăng nhập mà đòi vào')
      return navigateTo('/')
    }
  })
  