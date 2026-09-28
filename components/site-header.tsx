'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/#about', label: '회사소개' },
  { href: '/#brands', label: '브랜드' },
  { href: '/#history', label: '연혁' },
  { href: '/#sustainability', label: '지속가능성' },
  { href: '/#careers', label: '인재채용' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="/" className="font-serif text-lg tracking-[0.3em]" aria-label="아워시즌 홈">
          OURSEASON
        </a>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/#contact"
          className="hidden border border-foreground px-5 py-2 text-xs tracking-widest transition-colors hover:bg-foreground hover:text-background md:inline-block"
        >
          CONTACT
        </a>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="모바일 메뉴" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {[...navItems, { href: '/#contact', label: '문의하기' }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
