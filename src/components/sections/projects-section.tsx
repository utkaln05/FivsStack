import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    title: 'Ride-Booking Platform',
    description: 'A comprehensive mobility solution connecting riders and drivers seamlessly.',
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'map car'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'An advanced dashboard for real-time data analysis and AI-driven insights.',
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'dashboard chart'
  },
  {
    title: 'Global E-commerce Site',
    description: 'A scalable e-commerce platform with a global reach and localized experiences.',
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'shopping cart'
  },
  {
    title: 'Healthcare SaaS Product',
    description: 'A secure, compliant SaaS platform for managing patient data and clinic operations.',
    imageUrl: 'https://placehold.co/600x400',
    aiHint: 'doctor medical'
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Work in Action</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore some of the innovative solutions we've delivered to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden rounded-lg border-border bg-card/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
              <CardContent className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.aiHint}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>
              <CardHeader className="p-6">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
