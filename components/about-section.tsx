import Image from 'next/image'
import { SectionLabel } from './section-label'

const values = [
  {
    no: '01',
    title: '좋은 소재',
    body: '원단 선택부터 봉제까지, 오래 입을수록 진가가 드러나는 옷을 위해 소재에 먼저 투자합니다.',
  },
  {
    no: '02',
    title: '정직한 가격',
    body: '불필요한 유통 단계를 줄인 D2C 구조로, 품질 대비 합리적인 가격을 약속합니다.',
  },
  {
    no: '03',
    title: '고객 중심',
    body: '연간 50만 건 이상의 고객 리뷰를 분석해 핏과 디테일을 끊임없이 개선합니다.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/story.png"
              alt="원단 스와치와 디자인 스케치가 놓인 아틀리에"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <SectionLabel>ABOUT US</SectionLabel>
          <h2 className="text-balance font-serif text-3xl leading-snug md:text-5xl">
            유행보다 오래가는
            <br />
            옷의 가치를 믿습니다.
          </h2>
          <p className="mt-8 text-pretty leading-relaxed text-muted-foreground">
            2014년 작은 온라인 편집숍으로 시작한 아워시즌은 이제 자체 브랜드 3개와 연간 300만 명이 찾는
            패션 플랫폼을 운영하는 기업으로 성장했습니다. 우리는 옷장 속에서 가장 자주 손이 가는 한 벌을
            만드는 일에 집중합니다.
          </p>

          <dl className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-3 sm:gap-6">
            {values.map((v) => (
              <div key={v.no}>
                <dt>
                  <span className="block text-xs tracking-widest text-accent">{v.no}</span>
                  <span className="mt-2 block text-lg font-medium">{v.title}</span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
