import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden pt-16">
      <Image
        src="/images/hero.png"
        alt="카멜 코트를 입고 햇살 드는 공간을 걷는 모델"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 text-background lg:px-10 lg:pb-24">
        <p className="mb-6 text-xs tracking-[0.4em] opacity-80">SINCE 2014 · SEOUL</p>
        <h1 className="max-w-3xl text-balance font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
          계절을 입고,
          <br />
          일상을 짓습니다.
        </h1>
        <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed opacity-90 md:text-lg">
          아워시즌은 좋은 소재와 정직한 가격으로 매일 입고 싶은 옷을 만드는 패션 커머스 기업입니다.
        </p>

        <div className="mt-12 flex items-center justify-between">
          <a
            href="#about"
            className="inline-flex items-center gap-3 border border-background/70 px-6 py-3 text-sm tracking-wider transition-colors hover:bg-background hover:text-foreground"
          >
            회사 알아보기
          </a>
          <a href="#about" aria-label="아래로 스크롤" className="hidden items-center gap-2 text-xs tracking-widest opacity-80 md:flex">
            SCROLL <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
