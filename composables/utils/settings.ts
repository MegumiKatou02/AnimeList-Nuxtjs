import { ref } from 'vue'
import type { SettingsResponse } from '../types/settings'

export const isDarkMode = ref(false)

export const fetchSettings = async () => {
    try {
      const { data } = await useFetch<SettingsResponse>('/api/settings')
  
      if (data.value) {
        isDarkMode.value = data.value.isDarkMode
      }
    } catch (error) {
      console.error('Lỗi khi tải settings:', error)
    }
}

export const fetchSettingsMode = async (): Promise<boolean> => {
  try {
    const res = await $fetch<SettingsResponse>('/api/settings')

    return res.isDarkMode
  } catch (error) {
    console.error('Lỗi khi tải settings:', error)
    return false;
  }
}

fetchSettings()