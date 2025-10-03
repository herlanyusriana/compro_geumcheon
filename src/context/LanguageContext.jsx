import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LANGUAGE_OPTIONS = [
  { code: 'id', label: 'Indonesia', shortLabel: 'ID' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'ko', label: 'Korea Selatan', shortLabel: 'KR' },
]

const LanguageContext = createContext({
  language: 'id',
  setLanguage: () => {},
  options: LANGUAGE_OPTIONS,
})

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'id'
  }

  const stored = window.localStorage.getItem('gci-language')
  if (stored && LANGUAGE_OPTIONS.some((option) => option.code === stored)) {
    return stored
  }

  return 'id'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem('gci-language', language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      options: LANGUAGE_OPTIONS,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
