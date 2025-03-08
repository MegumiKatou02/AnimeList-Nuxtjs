import { ref } from 'vue'
import { defaultSettings } from './constants'
import { getLocalStorage } from './useLocalStorage'

const savedSettings = JSON.parse(getLocalStorage('setting') || JSON.stringify(defaultSettings))
const isDarkTheme = savedSettings.theme == '0' ? true : false

export const isDarkMode = ref(isDarkTheme)