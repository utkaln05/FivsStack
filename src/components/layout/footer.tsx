import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} FiveStack. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
