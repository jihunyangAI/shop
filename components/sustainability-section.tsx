import Image from 'next/image'
import { Leaf, Recycle, Handshake } from 'lucide-react'
import { SectionLabel } from './section-label'

const commitments = [
  { icon: Leaf, title: '친환경 소재', body: '2030년까지 전 제품의 70%를 오가닉·재생 소재로 전환합니다.' },
  { icon: Recycle, title: '순환 패키징', body: '비닐 대신 재생지와 생분해 포장재를 사용합니다.' },
  { icon: Handshake, title: '공정한 생산', body: '모든 파트너 공방과 공정 노동 기준 협약을 맺고 있습니다.' },
]

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="scroll-mt-16 py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative aspect-[16/9] overflow-hidden md:aspect-[21/9]">
          <Image
            src="/images/sustainability.png"
            alt="오가닉 코튼과 무염색 린넨 원단"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>SUSTAINABILITY</SectionLabel>
            <h2 className="text-balance font-serif text-3xl leading-snug md:text-4xl">
              오래 입는 옷이
              <br />
              가장 친환경적인 옷입니다.
            </h2>
          </div>
          <ul className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            {commitments.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <Icon aria-hidden="true" className="size-6 text-accent" strokeWidth={1.5} />
                <h3 className="mt-5 font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
