import Link from "next/link";
import {
  Droplets,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WebsiteFooter() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
                <Droplets className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-foreground">
                Blood<span className="text-primary">Link</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Connecting generosity with need. Making blood donation accessible,
              reliable, and safe.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Privacy & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="font-semibold mb-4">For Users</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/app/dashboard"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Donor Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/app/matching"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Find Requests
                </Link>
              </li>
              <li>
                <Link
                  href="/app/rewards"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  LifePoints Rewards
                </Link>
              </li>
              <li>
                <Link
                  href="/app/community"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Community Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                support@bloodlink.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                1-800-BLOOD-LINK
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  123 Medical Center Dr.
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BloodLink. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
