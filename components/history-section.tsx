import { SectionLabel } from './section-label'

const stats = [
  { value: '300만+', label: '연간 방문 고객' },
  { value: '1,200억', label: '2025 연 매출' },
  { value: '3', label: '자체 브랜드' },
  { value: '48', label: '국내외 파트너 공방' },
]

const history = [
  { year: '2014', text: '온라인 편집숍 “아워시즌” 오픈' },
  { year: '2017', text: '첫 자체 브랜드 SEASON WOMAN 론칭' },
  { year: '2019', text: '남성 라인 SEASON MAN 론칭, 누적 회원 50만 돌파' },
  { year: '2021', text: '성수 플래그십 스토어 오픈, 물류센터 자동화 구축' },
  { year: '2023', text: '라이프 브랜드 OUR DAILY 론칭, 일본 진출' },
  { year: '2025', text: '재생 소재 사용률 40% 달성, 연 매출 1,200억 돌파' },
]

export function HistorySection() {
  return (
    <section id="history" className="scroll-mt-16 bg-primary py-24 text-primary-foreground lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <dl className="grid grid-cols-2 gap-y-12 border-b border-primary-foreground/15 pb-20 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-3">
              <dt className="text-sm text-primary-foreground/60">{s.label}</dt>
              <dd className="font-serif text-4xl md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>HISTORY</SectionLabel>
            <h2 className="font-serif text-3xl leading-snug md:text-5xl">
              한 계절씩,
              <br />
              꾸준히 걸어온 길
            </h2>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {history.map((h) => (
              <li
                key={h.year}
                className="grid grid-cols-[5rem_1fr] gap-6 border-b border-primary-foreground/15 py-6 first:pt-0"
              >
                <span className="font-serif text-xl text-accent">{h.year}</span>
                <span className="leading-relaxed text-primary-foreground/85">{h.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
