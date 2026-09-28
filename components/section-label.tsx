import { cn } from '@/lib/utils'

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('mb-6 flex items-center gap-3 text-xs tracking-[0.35em] text-accent', className)}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}
