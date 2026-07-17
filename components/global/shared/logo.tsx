import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
     <div className="shrink">
            <Link href="/" className="text-xl font-bold tracking-wider text-brand-secondary hover:opacity-90 transition-all">
              BOONON <span className="text-xs font-light text-brand-bg/80">.studio</span>
            </Link>
          </div>
  )
}
