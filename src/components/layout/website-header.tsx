import { useState } from "react";
import Link from "next/link";
import { useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function WebsiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary">
            <Droplets className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-foreground">
            Blood<span className="text-primary">Link</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === link.href
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Link href="/app/dashboard">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/app/dashboard">
            <Button variant="hero" size="sm">
              Join Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-lg"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-up">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Link href="/app/dashboard" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Button>
              </Link>
              <Link href="/app/dashboard" className="flex-1">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
