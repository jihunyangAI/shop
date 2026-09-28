const contacts = [
  { label: '고객센터', value: '1588-0000', note: '평일 10:00 - 17:00' },
  { label: '제휴 · 입점 문의', value: 'partner@ourseason.co.kr' },
  { label: '채용 문의', value: 'recruit@ourseason.co.kr' },
  { label: '본사', value: '서울특별시 성동구 성수이로 00, 아워시즌 빌딩' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl tracking-[0.3em] md:text-4xl">OURSEASON</p>
            <p className="mt-6 max-w-sm leading-relaxed text-primary-foreground/70">
              계절을 입고, 일상을 짓습니다. 아워시즌에 대해 궁금한 점이 있다면 언제든 연락주세요.
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {contacts.map((c) => (
              <div key={c.label}>
                <dt className="text-xs tracking-widest text-accent">{c.label}</dt>
                <dd className="mt-2 leading-relaxed">
                  {c.value}
                  {c.note && <span className="block text-sm text-primary-foreground/60">{c.note}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>(주)아워시즌 · 대표이사 김계절 · 사업자등록번호 000-00-00000</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <a href="/careers" className="text-sm tracking-widest text-primary-foreground hover:text-accent">
              채용정보
            </a>
            <p>{'© 2026 OURSEASON Inc. All rights reserved.'}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
