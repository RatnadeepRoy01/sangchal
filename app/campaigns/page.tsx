import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Users, Heart, ArrowRight, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const IMG_MAT = 'https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMHdlbGZhcmV8ZW58MHx8fHwxNzgxNjEwMzMyfDA&ixlib=rb-4.1.0&q=85'
const IMG_EDU = 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwwfHx8fDE3ODE2MTAzMzh8MA&ixlib=rb-4.1.0&q=85'
const IMG_SKILL = 'https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxza2lsbCUyMHRyYWluaW5nfGVufDB8fHx8MTc4MTYxMDMzOHww&ixlib=rb-4.1.0&q=85'
const IMG_HANDS = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHN8ZW58MHx8fHwxNzgxNjEwMzQ1fDA&ixlib=rb-4.1.0&q=85'
const IMG_WOMEN = 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50fGVufDB8fHx8MTc4MTYxMDM0NXww&ixlib=rb-4.1.0&q=85'
const IMG_HANDS2 = 'https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxoZWxwaW5nJTIwaGFuZHN8ZW58MHx8fHwxNzgxNjEwMzQ1fDA&ixlib=rb-4.1.0&q=85'

const campaigns = [
  { tag: 'Maternal Health', title: 'Safe Motherhood: 1000 Mobile Vans', location: 'Bundelkhand, UP', date: 'Active till Dec 2025', raised: 38, goal: '₹62L', img: IMG_MAT, blurb: 'Equipping 100 villages with mobile prenatal clinics and trained midwives.', urgent: true },
  { tag: 'Education', title: 'Books Before Brides', location: 'Rajasthan', date: 'Active till Mar 2026', raised: 71, goal: '₹28L', img: IMG_EDU, blurb: 'Scholarships and after-school programs to keep adolescent girls in school.' },
  { tag: 'Empowerment', title: 'Stitch a New Story', location: 'Bihar &amp; Jharkhand', date: 'Year-round', raised: 54, goal: '₹40L', img: IMG_SKILL, blurb: 'Tailoring units run by survivors — fabric, machines and dignified wages.' },
  { tag: 'Nutrition', title: 'Warm Plates, Bright Futures', location: 'Mumbai slums', date: 'Active till Aug 2025', raised: 89, goal: '₹15L', img: IMG_HANDS, blurb: 'Daily nutritious meals at 14 community kitchens for children under 12.' },
  { tag: 'Empowerment', title: 'Digital Daughters', location: 'Karnataka', date: 'Active till Jun 2026', raised: 22, goal: '₹54L', img: IMG_WOMEN, blurb: 'Digital literacy &amp; freelance income programs for 5,000 young women.' },
  { tag: 'Emergency', title: 'Monsoon Relief 2025', location: 'Assam', date: 'Urgent', raised: 46, goal: '₹35L', img: IMG_HANDS2, blurb: 'Shelter kits, clean water and trauma support for flood-affected families.', urgent: true },
]

const filters = ['All', 'Maternal Health', 'Education', 'Empowerment', 'Nutrition', 'Emergency']

export default function CampaignsPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="gradient-warm border-b border-border/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="rounded-full px-4 py-1.5 bg-primary/10 text-primary border-0 mb-5">Campaigns</Badge>
            <h1 className="font-serif-display text-5xl md:text-6xl font-bold text-balance leading-[1.05]">
              Causes you can be part of — today.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Each campaign is a real promise to a real community. Choose one that moves you, follow its progress, and watch your contribution become someone&rsquo;s tomorrow.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mr-2">
              <Filter className="h-4 w-4" /> Filter:
            </div>
            {filters.map((f, i) => (
              <button key={f} className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${i===0 ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-foreground/75 border-border hover:bg-secondary'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {campaigns.map((c) => (
              <Card key={c.title} className="group overflow-hidden border-border/60 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="rounded-full bg-white/95 text-foreground border-0 font-medium">{c.tag}</Badge>
                    {c.urgent && <Badge className="rounded-full bg-primary text-primary-foreground border-0 animate-pulse">Urgent</Badge>}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif-display text-xl font-semibold leading-snug" dangerouslySetInnerHTML={{__html: c.title}} />
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed" dangerouslySetInnerHTML={{__html: c.blurb}} />

                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> <span dangerouslySetInnerHTML={{__html: c.location}} /></div>
                    <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {c.date}</div>
                  </div>

                  <div className="mt-5">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{c.raised}% funded</span>
                      <span className="text-muted-foreground">Goal: {c.goal}</span>
                    </div>
                    <Progress value={c.raised} className="h-2 bg-secondary" />
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Button asChild className="flex-1 rounded-full bg-primary hover:bg-primary/90">
                      <Link href="/donate"><Heart className="h-4 w-4 mr-1.5" /> Donate</Link>
                    </Button>
                    <Button variant="outline" className="rounded-full border-border">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER STRIP */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-9 w-9 text-primary mx-auto mb-4" />
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-balance">Run a campaign with us</h2>
          <p className="mt-4 text-muted-foreground text-lg">Birthdays, marathons, corporate CSR — turn any milestone into momentum. We&rsquo;ll help you set it up in 48 hours.</p>
          <Button asChild size="lg" className="mt-7 rounded-full bg-foreground text-background hover:bg-foreground/90 px-7">
            <Link href="/donate">Start a fundraiser <ArrowRight className="h-4 w-4 ml-2" /></Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
