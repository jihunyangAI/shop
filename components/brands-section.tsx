import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const brands = [
  {
    name: 'SEASON WOMAN',
    category: '여성 컨템포러리',
    desc: '린넨과 울 등 자연 소재로 완성한 여성을 위한 모던 워드로브.',
    image: '/images/brand-women.png',
    alt: '아이보리 블라우스와 베이지 팬츠를 입은 여성 모델',
  },
  {
    name: 'SEASON MAN',
    category: '남성 캐주얼',
    desc: '출근부터 주말까지, 구조를 덜어낸 편안한 테일러링.',
    image: '/images/brand-men.png',
    alt: '차콜 블레이저를 입고 앉아 있는 남성 모델',
  },
  {
    name: 'OUR DAILY',
    category: '베이직 & 라이프',
    desc: '매일 입는 니트와 코튼 베이직, 그리고 생활을 위한 제품들.',
    image: '/images/brand-daily.png',
    alt: '선반 위에 가지런히 개어진 니트와 코튼 베이직 의류',
  },
]

export function BrandsSection() {
  return (
    <section id="brands" className="scroll-mt-16 bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>OUR BRANDS</SectionLabel>
            <h2 className="font-serif text-3xl md:text-5xl">세 개의 브랜드, 하나의 철학</h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            각 브랜드는 서로 다른 고객을 향하지만, 좋은 옷을 합리적으로 제안한다는 같은 기준을 공유합니다.
          </p>
        </div>

        <ul className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {brands.map((b) => (
            <li key={b.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">{b.category}</p>
                  <h3 className="mt-1 font-serif text-xl tracking-wider">{b.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
