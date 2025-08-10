import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Local images
import BaberShopImage from '../../../assets/image.png';
import NewsBox from '../../../assets/newsBox.jpg';
import carrental from '../../../assets/car-rental.jpg';
import snappHire from '../../../assets/snappHire.jpg';

const projects = [
  {
    title: 'Barber_Connect',
    description: 'A full-service barber booking platform that enables customers to easily schedule appointments and barbers to efficiently manage their services and bookings.',
    imageUrl: BaberShopImage,
    isLocal: true,
    aiHint: 'map car',
    link: 'https://barber-connect-rho.vercel.app/'
  },
  {
    title: 'Car Rental',
    description: 'This car rental platform allows users to browse, book, and manage vehicle rentals, while owners can list their cars and track bookings seamlessly.',
    imageUrl: carrental,
    isLocal: true,
    aiHint: 'dashboard chart',
    link: 'https://car-rental-six-bay.vercel.app/'
  },
  {
    title: 'NewsBox',
    description: 'NewsBox is a webpage that shows users the latest news and allows them to search and categorize news according to their choice.',
    imageUrl: NewsBox,
    isLocal: true,
    aiHint: 'shopping cart',
    link: 'https://pavan-1410.github.io/NewsBox/'
  },
  {
    title: 'SnappHire',
    description: 'An AI-powered campus placement platform that streamlines recruitment workflows, conducts realistic mock interviews, and intelligently analyzes resumes for efficient hiring.',
    imageUrl: snappHire,
    isLocal: false,
    aiHint: 'map car',
    link: 'https://snapphire.vercel.app/login'
  },
  
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Work in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore some of the innovative solutions we've delivered to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-lg border-border bg-card/50 transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
              </Link>
              <div className="px-6 pb-6">
                <Button asChild className="w-full">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    Visit Project
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
