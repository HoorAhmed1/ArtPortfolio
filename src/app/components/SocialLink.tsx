"use client"

import type React from "react"

type SocialLinkProps = {
  href: string
  label: string
  Icon: React.ComponentType<{ className?: string }>
  accentClassName?: string
  textClassName?: string
  ariaLabel?: string
}

export function SocialLink({
  href,
  label,
  Icon,
  accentClassName = "text-white",
  textClassName = "text-white",
  ariaLabel,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
      aria-label={ariaLabel ?? label}
    >
      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors ${accentClassName}`}>
        <Icon className="w-5 h-5" />
      </span>
      <span className={`font-medium ${textClassName}`}>{label}</span>
    </a>
  )
}