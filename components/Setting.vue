<template>
    <div class="settings-overlay" :class="{ 'dark-mode': isDarkMode }" @click="closeDropDown">
      <div class="settings-container" @click.stop>
        <div class="settings-header">
          <h3 class="settings-title">Tùy chỉnh</h3>
          <button @click="closeDropDown" class="close-button">&times;</button>
        </div>
        <p class="settings-subtitle">Những tùy chỉnh này được lưu tại thiết bị hiện tại.</p>
  
        <div class="settings-section">
          <h4>Ngôn ngữ bản dịch:</h4>
          <div class="slider-container">
            <span>Tiếng Việt</span>
            <input type="range" v-model="selectedLanguage" min="0" max="1" step="1" />
            <span>Tiếng Anh</span>
          </div>
        </div>
        <div class="settings-section">
          <h4>Màn hình:</h4>
          <div class="slider-container">
            <span>Tối</span>
            <input
              style="margin-left: 10px"
              type="range"
              v-model="selectedTheme"
              min="0"
              max="1"
              step="1"
            />
            <span>Sáng</span>
          </div>
        </div>
        <div class="button-group">
          <button @click="handleSave" class="save-button">Lưu</button>
          <button @click="handleReset" class="reset-button">Reset</button>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { isDarkMode } from '~/composables/utils/settings'
  import { computed, watch } from 'vue'
  import { defineComponent, ref, onMounted } from 'vue'
  // import { getLocalStorage, setLocalStorage } from '~/composables/utils/useLocalStorage'
  import type { SettingsResponse } from '~/composables/types/settings'
  export default defineComponent({
    name: 'SettingPage',
    setup(_, { emit }) {
      const selectedLanguage = ref('0')
      const selectedTheme = ref('0')
      const originDarkMode = ref(true)
  
      const settings = computed(() => ({
        lang: selectedLanguage.value,
        theme: selectedTheme.value,
      }))
      const handleReset = () => {
        selectedLanguage.value = '0'
        selectedTheme.value = '0'
      }
  
      const closeDropDown = () => {
        isDarkMode.value = originDarkMode.value
        emit('close')
      }
  
      watch(selectedTheme, (value) => {
        if (value === '0') {
          isDarkMode.value = true
        } else {
          isDarkMode.value = false
        }
      })
  
      const handleSave = async () => {
        try {
          
          const lang = selectedLanguage.value === '0' ? 'vi' : 'en';
          await $fetch('/api/settings', {
            method: 'POST',
            body: {
              isDarkMode: selectedTheme.value === '0',
              lang: lang
            }
          })
        } catch (error) {
          console.error('Lỗi khi lưu settings:', error)
        }
        originDarkMode.value = isDarkMode.value
        closeDropDown()
        window.location.reload();
      }
  
      onMounted(async () => {
        try {
          const data = await $fetch<SettingsResponse>('/api/settings')

          if (data) {
            const lang = data.lang === 'vi' ? '0' : '1'
            selectedLanguage.value = lang
            selectedTheme.value = data.isDarkMode ? '0' : '1'
            isDarkMode.value = data.isDarkMode
            originDarkMode.value = isDarkMode.value
          }
        } catch (error) {
          console.error('Lỗi khi tải settings:', error)
        }
      })
  
      return {
        handleReset,
        handleSave,
        selectedTheme,
        selectedLanguage,
        closeDropDown,
        isDarkMode,
      }
    },
  })
  </script>
  
  <style scoped>
  .settings-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .settings-container {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    color: black;
    z-index: 1000;
  }
  
  .dark-mode .settings-container {
    background: #1a2234;
    color: white;
  }
  
  .settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .close-button {
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: rgb(122, 122, 122);
    margin-bottom: 0.5rem;
    transition: color 0.3 ease-in-out;
  }
  
  .close-button:hover {
    color: #333;
  }
  
  .dark-mode .close-button:hover {
    color: #fff;
  }
  
  .settings-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }
  
  .settings-subtitle {
    font-size: 0.875rem;
    color: #676a75;
    margin-bottom: 1.5rem;
  }
  
  .dark-mode .settings-subtitle {
    color: #9ca3af;
  }
  
  .settings-section {
    margin-bottom: 1.5rem;
  }
  
  .settings-section h4 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }
  
  .slider-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }
  
  .slider-container input[type='range'] {
    width: 2.3rem;
    height: 2rem;
  }
  
  .save-button {
    padding: 0.5rem 1rem;
    background: #f97316;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    margin-right: 10px;
  }
  
  .reset-button {
    padding: 0.5rem 1rem;
    background: transparent;
    color: black;
    border: 1px solid #4a5568;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
  }
  
  .dark-mode .reset-button {
    color: white;
  }
  
  .save-button:hover {
    background: #ea580c;
  }
  
  .reset-button:hover {
    background: rgba(74, 85, 104, 0.2);
  }
  
  @media (max-width: 640px) {
    .settings-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 90%;
      max-width: 300px;
    }
  }
  </style>