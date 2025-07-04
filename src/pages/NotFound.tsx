import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content={`The page '${location.pathname}' does not exist on AIIMS Care.`} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://www.aiimscare.com${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content={`The page '${location.pathname}' does not exist on AIIMS Care.`} />
        <meta property="og:url" content={`https://www.aiimscare.com${location.pathname}`} />
        <meta property="og:image" content="https://www.aiimscare.com/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="404 - Page Not Found" />
        <meta property="twitter:description" content={`The page '${location.pathname}' does not exist on AIIMS Care.`} />
        <meta property="twitter:image" content="https://www.aiimscare.com/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
