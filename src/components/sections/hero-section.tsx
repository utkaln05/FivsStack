import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-dvh overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-background" />
         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background" />
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-gradient-fade" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-gradient-fade animation-delay-4000" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          We Build Next-Gen Web & App Experiences
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Custom software development for modern businesses that demand performance, scale, and impeccable design.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href="#contact">Let's Collaborate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
