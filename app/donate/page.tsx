'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, Shield, BadgeCheck, Sparkles, CheckCircle2, CreditCard, Building2, IndianRupee, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const HANDS_IMG = 'https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwyfHxoZWxwaW5nJTIwaGFuZHN8ZW58MHx8fHwxNzgxNjEwMzQ1fDA&ixlib=rb-4.1.0&q=85'

const presets = [500, 1500, 3000, 7500, 15000]
const causes = [
  { id: 'general', label: 'Where most needed', desc: 'Let us direct your gift to the most urgent cause this month.' },
  { id: 'maternal', label: 'Maternal Health', desc: 'Safe deliveries, prenatal care and nutrition for mothers.' },
  { id: 'education', label: 'Child Education', desc: 'Scholarships, books and learning centres for children.' },
  { id: 'empowerment', label: 'Women Empowerment', desc: 'Skill training, microfinance and survivor support.' },
]

export default function DonatePage() {
  const [amount, setAmount] = useState(1500)
  const [custom, setCustom] = useState('')
  const [frequency, setFrequency] = useState('one-time')
  const [cause, setCause] = useState('general')
  const [submitted, setSubmitted] = useState(false)

  const finalAmount = custom ? Number(custom) : amount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] gradient-warm flex items-center justify-center px-4 py-20">
        <Card className="max-w-lg w-full text-center border-border/60 rounded-3xl shadow-xl">
          <CardContent className="p-10">
            <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5">
              <Heart className="h-8 w-8 text-primary fill-primary" />
            </div>
            <h2 className="font-serif-display text-3xl font-bold">Thank you, truly.</h2>
            <p className="text-muted-foreground mt-3">
              Your intent to give ₹{finalAmount.toLocaleString('en-IN')} {frequency === 'monthly' ? '/month' : ''} just became a reason for someone to hope.
            </p>
            <p className="text-sm text-muted-foreground mt-5">A confirmation email and 80G receipt will reach you soon. The field team will share photos from where your gift travels.</p>
            <Button onClick={() => setSubmitted(false)} className="mt-7 rounded-full bg-primary hover:bg-primary/90">Make another gift</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      {/* HEADER */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={HANDS_IMG} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20_30%_12%)]/92 via-[hsl(20_30%_12%)]/80 to-primary/55" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative text-white">
          <div className="max-w-3xl">
            <Badge className="rounded-full px-4 py-1.5 bg-white/15 text-white border-0 backdrop-blur mb-5">
              <Shield className="h-3.5 w-3.5 mr-1.5" /> 80G tax exemption · Encrypted &amp; secure
            </Badge>
            <h1 className="font-serif-display text-5xl md:text-6xl font-bold text-balance leading-[1.05]">
              Give with intention. <span className="italic text-primary-foreground/95">Change someone&rsquo;s tomorrow.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
              96 paise of every rupee reaches the field. You&rsquo;ll know whose life it touched — by name, by photo, by progress reports.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* FORM */}
            <Card className="lg:col-span-3 border-border/60 rounded-3xl shadow-sm">
              <CardContent className="p-7 md:p-10">
                <h2 className="font-serif-display text-3xl font-bold">Your gift</h2>
                <p className="text-muted-foreground mt-1">Every amount carries weight. Choose what feels right.</p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-7">
                  {/* Frequency tabs */}
                  <div>
                    <Label className="text-sm font-medium mb-2.5 block">Frequency</Label>
                    <Tabs value={frequency} onValueChange={setFrequency}>
                      <TabsList className="grid grid-cols-2 w-full bg-secondary rounded-full p-1 h-12">
                        <TabsTrigger value="one-time" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">One-time</TabsTrigger>
                        <TabsTrigger value="monthly" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                          Monthly <Sparkles className="h-3.5 w-3.5 ml-1.5" />
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="monthly" className="mt-3 text-sm text-muted-foreground">
                        Recurring givers fund our most enduring change. Cancel anytime.
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Amount */}
                  <div>
                    <Label className="text-sm font-medium mb-2.5 block">Amount (INR)</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {presets.map((p) => (
                        <button
                          type="button"
                          key={p}
                          onClick={() => { setAmount(p); setCustom('') }}
                          className={`h-12 rounded-xl border font-semibold transition-all ${
                            !custom && amount === p
                              ? 'bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20'
                              : 'bg-card border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          ₹{p.toLocaleString('en-IN')}
                        </button>
                      ))}
                    </div>
                    <div className="relative mt-3">
                      <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder="Or enter custom amount"
                        value={custom}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustom(e.target.value)}
                        className="h-12 pl-9 rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Cause */}
                  <div>
                    <Label className="text-sm font-medium mb-2.5 block">Direct my gift to</Label>
                    <RadioGroup value={cause} onValueChange={setCause} className="grid sm:grid-cols-2 gap-2.5">
                      {causes.map((c) => (
                        <label
                          key={c.id}
                          htmlFor={c.id}
                          className={`cursor-pointer rounded-xl border p-4 transition-all ${
                            cause === c.id ? 'border-primary bg-primary/5 ring-1 ring-primary/30' : 'border-border hover:border-primary/40'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <RadioGroupItem value={c.id} id={c.id} className="mt-1" />
                            <div>
                              <div className="font-medium text-sm">{c.label}</div>
                              <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{c.desc}</div>
                            </div>
                          </div>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Donor info */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="name" className="text-sm">Full name</Label>
                      <Input id="name" required placeholder="Your name" className="h-11 mt-1.5 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input id="email" type="email" required placeholder="you@email.com" className="h-11 mt-1.5 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+91" className="h-11 mt-1.5 rounded-xl" />
                    </div>
                    <div>
                      <Label htmlFor="pan" className="text-sm">PAN <span className="text-muted-foreground">(for 80G)</span></Label>
                      <Input id="pan" placeholder="ABCDE1234F" className="h-11 mt-1.5 rounded-xl uppercase" />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 h-14 text-base font-semibold shadow-lg shadow-primary/20">
                    <Heart className="h-5 w-5 mr-2 fill-current" />
                    Donate ₹{finalAmount ? Number(finalAmount).toLocaleString('en-IN') : 0}{frequency === 'monthly' ? ' / month' : ''}
                  </Button>

                  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> 256-bit SSL secure</span>
                    <span className="flex items-center gap-1.5"><CreditCard className="h-3.5 w-3.5" /> Cards, UPI, NetBanking</span>
                    <span className="flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5" /> 80G receipt instant</span>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* SIDE */}
            <div className="lg:col-span-2 space-y-5">
              <Card className="border-border/60 rounded-3xl bg-secondary/40">
                <CardContent className="p-7">
                  <h3 className="font-serif-display text-xl font-semibold mb-4">What your gift becomes</h3>
                  <ul className="space-y-3.5 text-sm">
                    {[
                      { amt: '₹500', txt: 'School supplies for 1 child for a term' },
                      { amt: '₹1,500', txt: 'A girl&rsquo;s full school year' },
                      { amt: '₹3,000', txt: 'Prenatal kit + 4 check-ups for a mother' },
                      { amt: '₹7,500', txt: 'A month of meals at a community kitchen' },
                      { amt: '₹15,000', txt: 'A woman&rsquo;s 3-month skill training' },
                    ].map((i) => (
                      <li key={i.amt} className="flex items-start gap-3">
                        <div className="shrink-0 font-serif-display font-bold text-primary w-16">{i.amt}</div>
                        <div className="text-foreground/85" dangerouslySetInnerHTML={{__html: i.txt}} />
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/60 rounded-3xl">
                <CardContent className="p-7">
                  <h3 className="font-serif-display text-xl font-semibold mb-3">Other ways to give</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium">Bank Transfer</div>
                        <div className="text-muted-foreground">A/c: 0123-4567-8910 · HDFC Bank · IFSC: HDFC0000123</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CreditCard className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium">UPI</div>
                        <div className="text-muted-foreground">sangchal@hdfcbank</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <div className="font-medium">Corporate CSR</div>
                        <div className="text-muted-foreground">Write to csr@sangchal.org for partnership decks.</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-3xl bg-primary/10 border border-primary/20 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div className="text-sm text-foreground/85">
                    <strong className="text-foreground">Audited &amp; transparent.</strong> Annual financials and field reports are published openly. Ask us anything — we owe you that.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
