import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import VisionMission from "@/components/about/VisionMission";
import CompanyValues from "@/components/about/CompanyValues";
import ProductionLines from "@/components/about/ProductionLines";
import GlobalMarkets from "@/components/about/GlobalMarkets";
import CompanyStats from "@/components/about/CompanyStats";
import Timeline from "@/components/about/Timeline";
import ContactInfo from "@/components/about/ContactInfo";
import CallToAction from "@/components/about/CallToAction";

const About = () => {
  useEffect(() => {
    document.title = "من نحن - الفرسان الرباعية | About Al Fursan Quadruple";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'تعرف على الفرسان الرباعية - أكثر من 20 عامًا من الخبرة في صناعة الجميد الأردني الأصيل، رؤيتنا ورسالتنا وقيمنا');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <AboutHero />

        {/* Company Story */}
        <CompanyStory />

        {/* Vision & Mission */}
        <VisionMission />

        {/* Company Values */}
        <CompanyValues />

        {/* Production Lines & Technologies */}
        <ProductionLines />

        {/* Global Markets & Clients */}
        <GlobalMarkets />

        {/* Statistics */}
        <CompanyStats />

        {/* Timeline */}
        <Timeline />

        {/* Contact Info */}
        <ContactInfo />

        {/* Call to Action */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default About;