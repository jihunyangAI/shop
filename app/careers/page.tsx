import type { Metadata } from 'next'
import { SectionLabel } from '@/components/section-label'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: '채용정보 | 온라인 상품기획 MD | 아워시즌',
  description: '아워시즌 온라인 상품기획 MD 채용 안내와 자격요건입니다.',
}

const duties = [
  '시즌별 상품 구성과 발주 물량을 계획합니다.',
  '판매 데이터를 보고 재고와 재발주를 조정합니다.',
  'SEASON WOMAN, SEASON MAN, OUR DAILY의 상품 라인을 기획합니다.',
  '원단과 생산 파트너와 일정, 가격, 품질을 조율합니다.',
]

const requirements = [
  '패션 상품기획 또는 온라인 MD 경력 2년 이상',
  '시즌 일정에 맞춰 상품을 구성해 본 경험',
  '판매 수치를 읽고 발주와 재고를 조정할 수 있는 분',
  '엑셀 등 기본 자료로 상품 수량을 관리할 수 있는 분',
  '디자인, 생산, 마케팅 팀과 일정에 맞춰 협의할 수 있는 분',
]

const preferred = [
  '여성복, 남성복, 라이프 카테고리 중 하나 이상을 맡아 본 경험',
  '온라인 패션 쇼핑몰의 상품 운영 경험',
  '린넨, 울, 코튼 등 소재 특성을 이해하고 상품에 반영한 경험',
]

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background px-6 pt-28 pb-24 lg:px-10 lg:pt-36 lg:pb-32">
        <article className="mx-auto max-w-3xl">
          <SectionLabel>CAREERS</SectionLabel>
          <p className="text-sm tracking-widest text-muted-foreground">정규직 · 상품기획</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">온라인 상품기획 MD</h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            아워시즌은 좋은 소재와 정직한 가격으로 매일 입고 싶은 옷을 만듭니다. 그 상품의 한 시즌을
            구성하고 운영할 MD를 찾습니다.
          </p>

          <section className="mt-16">
            <h2 className="font-serif text-2xl">하는 일</h2>
            <ul className="mt-6 space-y-3 border-t border-foreground pt-6">
              {duties.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-2xl">자격요건</h2>
            <ul className="mt-6 space-y-3 border-t border-foreground pt-6">
              {requirements.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <h2 className="font-serif text-2xl">우대사항</h2>
            <ul className="mt-6 space-y-3 border-t border-foreground pt-6">
              {preferred.map((item) => (
                <li key={item} className="leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 bg-secondary px-6 py-8 md:px-8">
            <h2 className="font-serif text-2xl">근무와 지원</h2>
            <dl className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs tracking-widest text-accent">근무지</dt>
                <dd className="mt-2 leading-relaxed">서울특별시 성동구 성수이로 00, 아워시즌 빌딩</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-accent">근무 조건</dt>
                <dd className="mt-2 leading-relaxed">자율 출퇴근, 연 1회 리프레시 휴가, 자사 제품 구매 지원</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs tracking-widest text-accent">지원 방법</dt>
                <dd className="mt-2 leading-relaxed">
                  이력서와 경력기술서를 recruit@ourseason.co.kr 로 보내 주세요.
                </dd>
              </div>
            </dl>
          </section>

          <a href="/" className="mt-12 inline-block text-sm tracking-widest text-muted-foreground hover:text-foreground">
            홈으로 돌아가기
          </a>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
