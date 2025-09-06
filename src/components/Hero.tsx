import { Play, Sparkles, ArrowDown, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import factoryImage from "@/assets/factory-exterior.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* Placeholder video - replace with actual factory video */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback to factory image if video fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${factoryImage})` }}
          />
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-primary-dark/90" />
        
        {/* Additional Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-foreground rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center justify-center min-h-screen">
        <div className="text-center py-20">
          {/* Modern Heading with Glass Effect */}
          <div className="mx-auto max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm mb-8 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm text-primary-foreground/90">مصنع رائد منذ أكثر من 20 عاماً</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight">
              <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
                من قلب الطبيعة
              </span>
              <span className="block bg-gradient-to-r from-primary-light to-primary-foreground bg-clip-text text-transparent animate-glow">
                الأردنية
              </span>
              <span className="block text-primary-foreground/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2 sm:mt-3">
                نمنحكم جميد أصيل بطعم لا يُنسى
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-in-right px-4 sm:px-0">
              شركة الفرسان الرباعية - رائدة في صناعة الألبان والجميد الأردني الأصيل، 
              بجودة عالمية ونكهة تراثية أصيلة
            </p>
          </div>

          {/* Modern CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-scale px-4 sm:px-0">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary-foreground text-primary hover:bg-primary-foreground/90 
                       shadow-glass px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-2xl transition-all duration-300 
                       hover:scale-105 hover:shadow-glow border border-primary-foreground/20 w-full sm:w-auto"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <Play className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              شاهد الفيديو التعريفي
            </Button>
            
            <Link to="/products">
              <Button 
                variant="outline" 
                size="lg"
                className="group relative overflow-hidden bg-primary-foreground/5 border-2 border-primary-foreground/30 
                         text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base 
                         font-semibold rounded-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <Package className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                عرض المنتجات
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group relative overflow-hidden bg-primary-foreground/5 border-2 border-primary-foreground/30 
                       text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base 
                       font-semibold rounded-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => navigate('/request-quote')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              اطلب عرض سعر الآن
            </Button>
          </div>

        </div>
      </div>

      {/* Simple Centered Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-primary-foreground/80 text-base font-medium cursor-pointer hover:text-primary-foreground transition-colors duration-300"
           onClick={() => {
             const aboutSection = document.getElementById('about');
             if (aboutSection) {
               aboutSection.scrollIntoView({ behavior: 'smooth' });
             }
           }}>
          اكتشف المزيد
        </p>
      </div>
      
      {/* Clean Straight Transition to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;