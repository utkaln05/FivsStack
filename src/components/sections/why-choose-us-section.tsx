import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cog, Target, Briefcase } from 'lucide-react';

const benefits = [
  {
    icon: <Cog className="h-10 w-10 text-accent" />,
    title: 'Scalable Code',
    description: 'We write clean, maintainable, and highly scalable code that grows with your business, ensuring long-term performance and reliability.',
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: 'User-Centric Design',
    description: 'Our design philosophy places the user at the center, creating intuitive and enjoyable experiences that boost engagement and satisfaction.',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: 'Business-Focused Solutions',
    description: 'We go beyond technology to understand your business goals, delivering solutions that provide real, measurable value and a strong ROI.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">The SaaSify Advantage</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're more than just developers; we're your strategic partners in innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="font-headline text-2xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
