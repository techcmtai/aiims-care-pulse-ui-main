import { ReactNode } from 'react';
import { SEO, SEOProps } from './SEO';
import { SkipToMain } from './SkipToMain';

interface LayoutProps extends SEOProps {
  children: ReactNode;
}

export const Layout = ({ children, ...seoProps }: LayoutProps) => {
  return (
    <>
      <SEO {...seoProps} />
      <SkipToMain />
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container flex h-14 items-center" role="navigation" aria-label="Main navigation">
            {/* Add your navigation items here */}
          </nav>
        </header>

        <main id="main" className="flex-1" role="main" tabIndex={-1}>
          {children}
        </main>

        <footer className="w-full border-t bg-background" role="contentinfo">
          <div className="container py-8 md:py-12">
            {/* Add your footer content here */}
          </div>
        </footer>
      </div>
    </>
  );
}; 