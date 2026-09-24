type SectionEyebrowProps = {
  index: string
  title: string
}

export function SectionEyebrow({ index, title }: SectionEyebrowProps) {
  return (
    <div className="flex items-baseline gap-3.5">
      <span className="font-mono text-[11px] font-bold tracking-[0.14em] text-faint">
        {index}
      </span>
      <h2 className="m-0 text-[13px] font-extrabold uppercase tracking-[0.14em] text-muted">
        {title}
      </h2>
    </div>
  )
}
