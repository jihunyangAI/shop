import { ArrowRight } from 'lucide-react'
import { SectionLabel } from './section-label'

const positions = [
  { team: 'Design', title: '여성복 디자이너 (경력 3년 이상)', type: '정규직' },
  { team: 'MD', title: '온라인 상품기획 MD', type: '정규직' },
  { team: 'Tech', title: '프론트엔드 엔지니어', type: '정규직' },
  { team: 'Marketing', title: '브랜드 콘텐츠 에디터', type: '계약직' },
]

export function CareersSection() {
  return (
    <section id="careers" className="scroll-mt-16 bg-secondary py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel>CAREERS</SectionLabel>
          <h2 className="font-serif text-3xl leading-snug md:text-5xl">
            함께 다음 계절을
            <br />
            만들어갈 동료를 찾습니다.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            자율 출퇴근, 연 1회 리프레시 휴가, 자사 제품 구매 지원 등 좋은 일을 오래 할 수 있는 환경을
            만듭니다.
          </p>
        </div>

        <ul className="border-t border-foreground lg:col-span-7">
          {positions.map((p) => (
            <li key={p.title}>
              <a
                href="#contact"
                className="group flex items-center justify-between gap-4 border-b border-border py-6 transition-colors hover:text-accent"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
                  <span className="w-24 text-xs tracking-widest text-muted-foreground">{p.team}</span>
                  <span className="text-lg">{p.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden text-sm text-muted-foreground sm:inline">{p.type}</span>
                  <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
