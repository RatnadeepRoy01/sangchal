'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/donate', label: 'Donate' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <Heart className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif-display text-2xl font-bold text-foreground tracking-tight">Sangchal</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">Women &amp; Child Welfare</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-colors',
                  pathname === l.href
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/75 hover:text-foreground hover:bg-secondary'
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm px-5">
              <Link href="/donate">
                <Heart className="h-4 w-4 mr-2" /> Donate Now
              </Link>
            </Button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 pt-2 space-y-1 border-t border-border/60">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block px-4 py-3 rounded-lg text-sm font-medium',
                  pathname === l.href ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-secondary'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 rounded-full bg-primary hover:bg-primary/90">
              <Link href="/donate" onClick={() => setOpen(false)}>
                <Heart className="h-4 w-4 mr-2" /> Donate Now
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
