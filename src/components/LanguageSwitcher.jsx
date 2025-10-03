import { useEffect, useRef, useState } from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export function LanguageSwitcher({ className = '' }) {
  const { language, setLanguage, options } = useLanguage()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const activeOption = options.find((option) => option.code === language) ?? options[0]

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  function handleSelect(code) {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-theme-blue shadow-sm transition hover:border-theme-purple/40 hover:text-theme-purple"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Change language"
      >
        <Globe size={16} />
        {activeOption?.shortLabel}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-40 rounded-2xl border border-slate-200 bg-white p-2 text-xs font-semibold text-theme-blue shadow-card">
          {options.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => handleSelect(option.code)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 uppercase tracking-[0.2em] transition ${
                option.code === language
                  ? 'bg-light-theme-purple text-theme-purple'
                  : 'hover:bg-light-theme-purple/60 hover:text-theme-purple'
              }`}
            >
              <span>{option.shortLabel}</span>
              <span className="text-[0.6rem] font-medium tracking-[0.3em] text-muted-grey">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
