import Link from 'next/link'
import Image from 'next/image'
import { Stethoscope, GraduationCap, Sparkles, Heart, Leaf, Target, Eye, Compass, Award, Users, Mail, Quote } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const MATERNAL_IMG = 'https://images.unsplash.com/photo-1534818113099-dbe2b2e800ae?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMHdlbGZhcmV8ZW58MHx8fHwxNzgxNjEwMzMyfDA&ixlib=rb-4.1.0&q=85'
const EDU_IMG = 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxlZHVjYXRpb24lMjBjaGlsZHJlbnxlbnwwfHx8fDE3ODE2MTAzMzh8MA&ixlib=rb-4.1.0&q=85'
const SKILL_IMG = 'https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxza2lsbCUyMHRyYWluaW5nfGVufDB8fHx8MTc4MTYxMDMzOHww&ixlib=rb-4.1.0&q=85'
const HERO_IMG = 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50fGVufDB8fHx8MTc4MTYxMDM0NXww&ixlib=rb-4.1.0&q=85'

export default function AboutPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="gradient-warm border-b border-border/60">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <Badge className="rounded-full px-4 py-1.5 bg-primary/10 text-primary border-0 mb-5">About Sangchal</Badge>
            <h1 className="font-serif-display text-5xl md:text-6xl font-bold text-balance leading-[1.05]">
              A movement of care that began with one mother&rsquo;s courage.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              In 2009, in a small clinic in Jhansi, our founder watched a young mother walk fourteen kilometres in labour. That night, Sangchal was born — a promise that no woman, no child, would ever walk alone again.
            </p>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: 'Our Vision', text: 'A world where every woman thrives in dignity and every child grows in safety, opportunity and love.' },
              { icon: Target, title: 'Our Mission', text: 'To deliver health, education and economic agency to underserved women and children — last mile, every mile.' },
              { icon: Compass, title: 'Our Values', text: 'Compassion before charity. Dignity before data. Community before credit. Always.' },
            ].map((v) => (
              <Card key={v.title} className="border-border/60 rounded-2xl">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif-display text-2xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PILLAR 1: MATERNAL HEALTH */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={MATERNAL_IMG} alt="Mother and child" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <Badge className="rounded-full bg-primary/10 text-primary border-0">Pillar 01</Badge>
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-balance leading-[1.1]">Maternal Health</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                We bring prenatal check-ups, safe delivery kits and trained midwives into villages where the nearest hospital is hours away. Our mobile health vans cover 42 districts — turning anxious nine-month journeys into joyful ones.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  '12,400 safe deliveries facilitated since inception',
                  'Free iron & folic acid for 28,000 expecting mothers',
                  'Postpartum support and lactation counselling',
                  'Adolescent menstrual health workshops',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 2: CHILD EDUCATION */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <Badge className="rounded-full bg-accent/10 text-accent border-0">Pillar 02</Badge>
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-balance leading-[1.1]">Child Education</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Curiosity is sacred. We run 38 learning centres, sponsor scholarships and equip rural schools with libraries, mid-day meals and digital classrooms — so that no child&rsquo;s talent is buried by their pin code.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  '9,200 children currently enrolled in our centres',
                  '1,150 scholarships for first-generation girl learners',
                  'STEM kits and tablet libraries in 60 villages',
                  'After-school mentorship by 400+ volunteers',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={EDU_IMG} alt="Children learning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PILLAR 3: WOMEN EMPOWERMENT */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={SKILL_IMG} alt="Women in skill training" fill className="object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <Badge className="rounded-full bg-primary/10 text-primary border-0">Pillar 03</Badge>
              </div>
              <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-balance leading-[1.1]">Women Empowerment</h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Independence is a quiet revolution. Through tailoring units, digital literacy bootcamps and self-help groups, we turn skills into livelihoods — and survivors into leaders who lift up the next ten women behind them.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  '6,800 women trained across 14 vocations',
                  '320 self-help groups managing ₹4.2 Cr in savings',
                  '24×7 helpline &amp; legal aid for survivors',
                  'Leadership circles in 60 panchayats',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/85" dangerouslySetInnerHTML={{__html: t}} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Award className="h-9 w-9 text-primary mx-auto mb-4" />
            <h2 className="font-serif-display text-4xl font-bold">Recognition &amp; Trust</h2>
            <p className="mt-3 text-muted-foreground">Our work has been honoured by institutions that share our values of transparency and impact.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['NITI Aayog Darpan','12A &amp; 80G Certified','GuideStar Platinum','UN Women Partner'].map((b) => (
              <div key={b} className="rounded-2xl border border-border bg-card p-6 text-center">
                <div className="font-serif-display text-lg font-semibold text-foreground" dangerouslySetInnerHTML={{__html: b}} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TEAM & LEADERSHIP */}
      <section className="py-20 lg:py-24 bg-secondary/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Users className="h-9 w-9 text-primary mx-auto mb-4" />
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">People behind the promise</p>
            <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-balance">Team &amp; Leadership</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Doctors, educators, organisers and survivors-turned-leaders &mdash; bound by one quiet conviction: that every life is worth showing up for.
            </p>
          </div>

          {/* Leadership */}
          <div className="mb-14">
            <h3 className="font-serif-display text-2xl font-semibold text-center mb-8">Our Leadership</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Dr. Ananya Iyer', role: 'Founder &amp; Executive Director', bio: 'Obstetrician turned activist. Founded Sangchal in 2009 after a decade in rural healthcare.', initials: 'AI', tone: 'from-[hsl(6_65%_55%)] to-[hsl(6_65%_38%)]' },
                { name: 'Vikram Bhattacharya', role: 'Chief Operating Officer', bio: 'Former public-policy advisor. Architect of our 14-state field operations.', initials: 'VB', tone: 'from-[hsl(232_45%_55%)] to-[hsl(232_50%_38%)]' },
                { name: 'Rukhsana Sheikh', role: 'Director, Programs', bio: 'Two decades in child rights. Leads education and nutrition initiatives.', initials: 'RS', tone: 'from-[hsl(28_70%_55%)] to-[hsl(28_70%_40%)]' },
                { name: 'Kavita Rao', role: 'Director, Women Empowerment', bio: 'Survivor and award-winning social entrepreneur. Built our 320 self-help groups.', initials: 'KR', tone: 'from-[hsl(340_55%_55%)] to-[hsl(340_55%_38%)]' },
              ].map((m) => (
                <Card key={m.name} className="border-border/60 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`aspect-square bg-gradient-to-br ${m.tone} flex items-center justify-center relative`}>
                    <span className="font-serif-display text-6xl font-bold text-white/95 drop-shadow-sm">{m.initials}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <h4 className="font-serif-display text-xl font-semibold" dangerouslySetInnerHTML={{__html: m.name}} />
                    <p className="text-sm text-primary font-medium mt-0.5" dangerouslySetInnerHTML={{__html: m.role}} />
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.bio}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <a href="#" className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="LinkedIn">
                        <FaLinkedin className="h-3.5 w-3.5" />
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Email">
                        <Mail className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Board of Trustees */}
          <div>
            <h3 className="font-serif-display text-2xl font-semibold text-center mb-8">Board of Trustees</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: 'Justice (Retd.) Meera Nair', role: 'Chairperson', initials: 'MN', tone: 'bg-[hsl(6_60%_92%)] text-[hsl(6_65%_38%)]' },
                { name: 'Dr. Arjun Kapoor', role: 'Trustee &mdash; Health', initials: 'AK', tone: 'bg-[hsl(232_40%_92%)] text-[hsl(232_50%_40%)]' },
                { name: 'Lakshmi Subramanian', role: 'Trustee &mdash; Finance', initials: 'LS', tone: 'bg-[hsl(28_55%_90%)] text-[hsl(28_70%_38%)]' },
                { name: 'Prof. Imran Qureshi', role: 'Trustee &mdash; Education', initials: 'IQ', tone: 'bg-[hsl(152_35%_90%)] text-[hsl(152_45%_30%)]' },
                { name: 'Neha Bansal', role: 'Trustee &mdash; Technology', initials: 'NB', tone: 'bg-[hsl(340_45%_92%)] text-[hsl(340_55%_40%)]' },
                { name: 'Sundar Mehta', role: 'Trustee &mdash; Strategy', initials: 'SM', tone: 'bg-[hsl(45_70%_90%)] text-[hsl(35_75%_35%)]' },
              ].map((t) => (
                <div key={t.name} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-sm transition-all">
                  <div className={`h-14 w-14 rounded-full flex items-center justify-center font-serif-display text-xl font-bold shrink-0 ${t.tone}`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground" dangerouslySetInnerHTML={{__html: t.name}} />
                    <div className="text-sm text-muted-foreground mt-0.5" dangerouslySetInnerHTML={{__html: t.role}} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder quote */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 relative">
              <Quote className="h-9 w-9 text-primary/40 absolute top-6 left-6" />
              <div className="pl-12">
                <p className="font-serif-display text-xl md:text-2xl italic text-foreground/90 leading-snug text-balance">
                  &ldquo;We are not a charity. We are an apprenticeship in dignity &mdash; for every woman who walks through our doors, and for everyone of us lucky enough to walk beside her.&rdquo;
                </p>
                <div className="mt-5 text-sm">
                  <div className="font-semibold">Dr. Ananya Iyer</div>
                  <div className="text-muted-foreground">Founder &amp; Executive Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <Image src={HERO_IMG} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/55" />
            <div className="relative p-10 md:p-14 text-white">
              <h3 className="font-serif-display text-3xl md:text-4xl font-bold max-w-2xl text-balance">Volunteer, partner or donate — there&rsquo;s a place for you in this movement.</h3>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-7">
                  <Link href="/donate"><Heart className="h-4 w-4 mr-2" /> Donate</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white px-7">
                  <Link href="/campaigns">See Campaigns</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
