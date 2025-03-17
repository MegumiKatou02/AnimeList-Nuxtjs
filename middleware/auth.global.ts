import { getLocalStorage } from "~/composables/utils/useLocalStorage"

export default defineNuxtRouteMiddleware((to) => {
    const isLoggedIn: string | null = getLocalStorage('discord_token')
    console.log(isLoggedIn);
    
    if (to.path === '/saved' && !isLoggedIn) {
      alert('Chưa đăng nhập mà đòi vào')
      return navigateTo('/')
    }
  })
  