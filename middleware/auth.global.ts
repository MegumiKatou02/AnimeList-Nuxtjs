import { getLocalStorage } from "~/composables/utils/useLocalStorage"

export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.client) {
    const isLoggedIn = getLocalStorage("discord_token");

    if (to.path === "/saved" && !isLoggedIn) {
      alert("Chưa đăng nhập mà đòi vào");
      return navigateTo("/");
    }
  }
});