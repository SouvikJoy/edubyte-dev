import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en',
    flag: 'us',
  },
  bn: {
    name: 'Bangla',
    iso: 'bn',
    flag: 'bd',
  },
}

export function LanguageManager() {
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'en'
      return availableLocales[foundLang] ? foundLang : 'en'
    } catch (error) {
      return 'en'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
