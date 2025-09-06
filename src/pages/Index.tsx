import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ProductShowcase from "@/components/ProductShowcase";
import QualityCertificates from "@/components/QualityCertificates";
import ContactRFQ from "@/components/ContactRFQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "الفرسان الرباعية - مصنع الجميد الأردني الأصيل | Al Fursan Quadruple";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'مصنع الفرسان الرباعية للجميد الأردني الأصيل - أكثر من 20 عامًا من الخبرة في تصنيع جميدنا زمان وجميد بدوية بأعلى معايير الجودة العالمية'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "الفرسان الرباعية للإدارة والاستثمار",
      "alternateName": "Al Fursan Quadruple",
      "description": "مصنع رائد في صناعة الألبان والجميد الأردني الأصيل",
      "url": "https://www.alfursanjo.com",
      "logo": "https://www.alfursanjo.com/logo.png",
      "foundingDate": "1999",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Jordan",
        "addressRegion": "Mafraq"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+962-2-626-4582",
        "contactType": "Customer Service"
      },
      "sameAs": [
        "https://www.alfursanjo.com"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Products Showcase */}
        <ProductShowcase />
        
        {/* Quality & Certificates */}
        <QualityCertificates />
        
        {/* Contact & RFQ */}
        <ContactRFQ />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;