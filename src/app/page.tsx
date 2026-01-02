import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Star,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { impactStats, partnerHospitals } from "@/data/mockData";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-bloodlink-red-light via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <Badge variant="secondary" className="mb-6 animate-fade-in">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Trusted by 150+ hospitals nationwide
              </span>
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up">
              Connecting <span className="text-primary">Generosity</span> with
              Need.
              <br />
              <span className="text-muted-foreground">Safely. Reliably.</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Join over 50,000 donors making a difference. Every donation can
              save up to three lives. Find verified blood requests near you and
              become a lifesaver today.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="/app/dashboard">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Start Saving Lives
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button
                  variant="hero-outline"
                  size="xl"
                  className="w-full sm:w-auto"
                >
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Hospital Verified
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  HIPAA Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  4.9★ App Rating
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-primary/10 rounded-full animate-pulse" />
            <div className="absolute w-64 h-64 bg-primary/20 rounded-full" />
            <div className="relative z-10 w-48 h-48 bg-primary rounded-full flex items-center justify-center shadow-glow">
              <Heart className="w-20 h-20 text-primary-foreground animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Impact Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Activity className="w-4 h-4 mr-2" />
              Live Impact Dashboard
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Making a Real Difference
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                value: impactStats.livesSaved.toLocaleString(),
                label: "Lives Saved",
                icon: Heart,
              },
              {
                value: impactStats.activeDonors.toLocaleString(),
                label: "Active Donors",
                icon: Users,
              },
              {
                value: impactStats.partnerHospitals.toString(),
                label: "Partner Hospitals",
                icon: Shield,
              },
              {
                value: impactStats.averageResponseTime,
                label: "Avg. Response",
                icon: Clock,
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How BloodLink Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to becoming a lifesaver. Our smart matching
              connects you with those who need help most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Register & Verify",
                description:
                  "Create your profile with blood type and health information. Get verified as a trusted donor.",
                icon: Users,
              },
              {
                step: "02",
                title: "Smart Matching",
                description:
                  "Our algorithm matches you with compatible requests based on your location and availability.",
                icon: Activity,
              },
              {
                step: "03",
                title: "Save Lives",
                description:
                  "Donate at a verified hospital and track your impact. Earn LifePoints for every contribution.",
                icon: Heart,
              },
            ].map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                )}

                <div className="relative z-10 p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-medium">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="text-5xl font-bold text-muted/20">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose BloodLink
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with safety, reliability, and community at its core.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Smart Matching",
                description:
                  "AI-powered algorithm matches donors with compatible requests in real-time.",
                icon: Activity,
              },
              {
                title: "Hospital Verified",
                description:
                  "All requests are verified by partner hospitals before posting.",
                icon: Shield,
              },
              {
                title: "LifePoints Rewards",
                description:
                  "Earn points for every donation. Redeem for rewards from partners.",
                icon: Star,
              },
              {
                title: "Reliability Score",
                description:
                  "Build your reputation as a trusted, dependable donor.",
                icon: CheckCircle,
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories from our community of lifesavers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "BloodLink connected me with a donor within 2 hours when my daughter needed emergency surgery. Forever grateful.",
                author: "Maria S.",
                role: "Blood Recipient's Mother",
              },
              {
                quote:
                  "I've donated 12 times through BloodLink. The LifePoints system keeps me motivated, and knowing I've helped save lives is incredible.",
                author: "James T.",
                role: "Regular Donor, 95% Reliability",
              },
              {
                quote:
                  "As a hospital administrator, BloodLink has streamlined our emergency blood procurement significantly.",
                author: "Dr. Chen",
                role: "UCSF Medical Center",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Hospitals */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Trusted By Leading Healthcare Providers
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerHospitals.map((hospital) => (
              <div
                key={hospital}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {hospital}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 lg:p-20 text-center">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Join 50,000+ Lifesavers Today
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Every drop counts. Register now and be part of a community
                that's saving lives every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/app/dashboard">
                  <Button
                    size="xl"
                    className="bg-white text-primary hover:bg-white/90 font-semibold shadow-elevated"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-2 border-white text-white bg-transparent hover:bg-white/10"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
