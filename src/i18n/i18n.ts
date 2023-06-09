import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import zhTw from './locales/zh-tw.json'

export const defaultNS = 'common'
export const resources = {
  zhTw: zhTw,
} as const

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'zhTw',
  defaultNS,
  resources,
})

export default i18n
