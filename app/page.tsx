import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, GraduationCap, Stethoscope, Sparkles, Users, HandHeart, Quote, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const HERO_IMG = 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50fGVufDB8fHx8MTc4MTYxMDM0NXww&ixlib=rb-4.1.0&q=85'
const MATERNAL_IMG = 'https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMHdlbGZhcmV8ZW58MHx8fHwxNzgxNjEwMzMyfDA&ixlib=rb-4.1.0&q=85'
const EDU_IMG = 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwwfHx8fDE3ODE2MTAzMzh8MA&ixlib=rb-4.1.0&q=85'
const SKILL_IMG = 'https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxza2lsbCUyMHRyYWluaW5nfGVufDB8fHx8MTc4MTYxMDMzOHww&ixlib=rb-4.1.0&q=85'
const HANDS_IMG = 'https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxoZWxwaW5nJTIwaGFuZHN8ZW58MHx8fHwxNzgxNjEwMzQ1fDA&ixlib=rb-4.1.0&q=85'
  
export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-warm">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge className="rounded-full px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary/15 border-0 font-medium mb-6">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" /> Empowering lives since 2009
              </Badge>
              <h1 className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] text-balance">
                Every woman.<br />Every child.<br />
                <span className="text-primary italic">Every story matters.</span>
              </h1>
              <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Sangchal — meaning &lsquo;movement&rsquo; — is a sanctuary of care. We walk alongside mothers, daughters and children to build futures rooted in dignity, health and learning.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-8 h-12 text-base shadow-md shadow-primary/20">
                  <Link href="/donate"><Heart className="h-5 w-5 mr-2" /> Donate Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-foreground/20 hover:bg-secondary px-8 h-12 text-base">
                  <Link href="/campaigns">Our Campaigns <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { v: '48,000+', l: 'Lives touched' },
                  { v: '180+', l: 'Villages served' },
                  { v: '15 yrs', l: 'On the ground' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif-display text-3xl md:text-4xl font-bold text-foreground">{s.v}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                <Image src={HERO_IMG} alt="Women of strength and community" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-5 max-w-[260px] border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <HandHeart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-serif-display text-2xl font-bold leading-none">96%</div>
                    <div className="text-xs text-muted-foreground mt-1">of donations reach the field</div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl px-5 py-4 items-center gap-3 border border-border">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">2,400+ donors strong</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">What we do</p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-balance">Three pillars of care, woven into one mission</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              We meet families where they are — with patience, expertise and an unshakable belief in their potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Stethoscope, title: 'Maternal Health', img: MATERNAL_IMG, desc: 'Safer pregnancies and healthier babies through prenatal care, nutrition and trained midwives in remote villages.' },
              { icon: GraduationCap, title: 'Child Education', img: EDU_IMG, desc: 'Joyful learning centres, scholarships and digital literacy programs that keep children — especially girls — in school.' },
              { icon: Sparkles, title: 'Women Empowerment', img: SKILL_IMG, desc: 'Vocational training, microfinance and leadership circles that turn ambition into independence.' },
            ].map((p) => (
              <Card key={p.title} className="group overflow-hidden border-border/60 bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-7">
                  <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{p.desc}</p>
                  <Link href="/about" className="inline-flex items-center text-primary font-medium mt-5 text-sm hover:gap-2 gap-1 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT BANNER */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HANDS_IMG} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20_30%_12%)]/95 via-[hsl(20_30%_12%)]/80 to-[hsl(20_30%_12%)]/60" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/90 font-medium mb-3">Our promise</p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-balance mb-6">Care that travels the last mile.</h2>
            <p className="text-lg text-white/85 leading-relaxed mb-8">
              From hill hamlets to urban shelters, our field workers cycle, walk and listen — because true change begins with someone showing up.
            </p>
            <div className="space-y-3.5">
              {[
                'Trauma-informed support for survivors of violence',
                'Nutritious meals at 42 community kitchens',
                'Free legal aid for women in distress',
                'Safe shelter homes operating 24×7',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-white/95">{t}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-9 rounded-full bg-primary hover:bg-primary/90 px-8 h-12">
              <Link href="/donate">Stand with us <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STORY / TESTIMONIAL */}
      <section className="py-20 lg:py-28 bg-secondary/40">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Quote className="h-10 w-10 text-primary mx-auto mb-6" />
            <p className="font-serif-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug text-balance italic">
              &ldquo;Sangchal didn&rsquo;t just bring a doctor to my village — they brought back my belief that my daughter could become one.&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/15 flex items-center justify-center font-serif-display text-primary font-semibold">M</div>
              <div className="text-left">
                <div className="font-semibold">Meena Devi</div>
                <div className="text-sm text-muted-foreground">Mother of two, Bundelkhand</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-[hsl(6_70%_38%)] text-primary-foreground p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-serif-display text-4xl md:text-5xl font-bold leading-tight text-balance">Be the reason a girl finishes school.</h2>
                <p className="mt-5 text-primary-foreground/90 text-lg leading-relaxed">Your contribution — however small — buys textbooks, medicines, hope. Every rupee is accounted for and every child is named.</p>
              </div>
              <div className="flex md:justify-end">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-7 w-full max-w-sm border border-white/20">
                  <div className="text-sm text-primary-foreground/80">Suggested gift</div>
                  <div className="font-serif-display text-5xl font-bold mt-1">₹1,500</div>
                  <div className="text-sm text-primary-foreground/80 mt-1">funds one girl&rsquo;s school year</div>
                  <Button asChild className="w-full mt-6 rounded-full bg-white text-primary hover:bg-white/90 h-12 text-base font-semibold">
                    <Link href="/donate"><Heart className="h-4 w-4 mr-2" /> Donate Today</Link>
                  </Button>
                  <div className="text-xs text-primary-foreground/70 mt-3 text-center">80G tax exemption available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
