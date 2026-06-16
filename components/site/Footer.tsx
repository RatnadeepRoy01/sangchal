import Link from 'next/link'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
export default function Footer() {
  return (
    <footer className="mt-24 bg-[hsl(20_25%_12%)] text-[hsl(32_40%_92%)]">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Heart className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <span className="font-serif-display text-2xl font-bold">Sangchal</span>
            </div>
            <p className="text-sm text-[hsl(32_30%_75%)] leading-relaxed">
              A movement of compassion — uplifting women and children through health, education and economic empowerment.
            </p>
          </div>

          <div>
            <h4 className="font-serif-display text-lg mb-4 text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-[hsl(32_30%_80%)] hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[hsl(32_30%_80%)] hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/campaigns" className="text-[hsl(32_30%_80%)] hover:text-primary transition-colors">Campaigns</Link></li>
              <li><Link href="/donate" className="text-[hsl(32_30%_80%)] hover:text-primary transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-lg mb-4 text-white">Get in touch</h4>
            <ul className="space-y-3 text-sm text-[hsl(32_30%_80%)]">
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> 14, Lotus Lane, New Delhi 110001, India</li>
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary shrink-0" /> hello@sangchal.org</li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-primary shrink-0" /> +91 98100 00000</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif-display text-lg mb-4 text-white">Follow the journey</h4>
            <p className="text-sm text-[hsl(32_30%_80%)] mb-4">Stories of courage, every week.</p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-colors"><FaFacebook className="h-4 w-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-colors"><FaInstagram className="h-4 w-4" /></a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-colors"><SiX className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[hsl(32_30%_65%)]">
          <p>© {new Date().getFullYear()} Sangchal Foundation. Registered NGO under Sec 12A &amp; 80G. All rights reserved.</p>
          <p>Crafted with <Heart className="inline h-3 w-3 text-primary fill-primary" /> for every mother &amp; child.</p>
        </div>
      </div>
    </footer>
  )
}
