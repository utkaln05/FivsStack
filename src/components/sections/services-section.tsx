import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CodeXml, Smartphone, Palette, AppWindow, LayoutDashboard } from 'lucide-react';

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Crafting high-performance, scalable web applications tailored to your business needs.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging native and cross-platform mobile apps for iOS and Android.',
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: 'UI/UX Design',
    description: 'Designing beautiful, user-centric interfaces that deliver exceptional user experiences.',
  },
  {
    icon: <AppWindow className="h-10 w-10 text-primary" />,
    title: 'SaaS Product Development',
    description: 'From idea to launch, we develop robust and scalable Software-as-a-Service products.',
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: 'Business Dashboards',
    description: 'Creating powerful data visualization tools to help you make informed business decisions.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Expertise</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a complete suite of services to bring your digital products to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 border-border bg-card/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50">
              <CardHeader className="p-0">
                {service.icon}
                <CardTitle className="mt-4 font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-muted-foreground text-sm">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
