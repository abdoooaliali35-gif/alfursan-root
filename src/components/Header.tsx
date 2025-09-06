import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe, Sparkles, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
const Header = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigation = [{
    name: 'الرئيسية',
    nameEn: 'Home',
    href: '/'
  }, {
    name: 'من نحن',
    nameEn: 'About Us',
    href: '/about'
  }, {
    name: 'منتجاتنا',
    nameEn: 'Our Products',
    href: '/products'
  }, {
    name: 'الجودة والشهادات',
    nameEn: 'Quality & Certificates',
    href: '/certificates'
  }, {
    name: 'أخبارنا',
    nameEn: 'Our News',
    href: '/blog'
  }, {
    name: 'اتصل بنا',
    nameEn: 'Contact Us',
    href: '/contact'
  }];
  const isCurrentPage = (href: string) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' && location.hash === href;
    }
    return location.pathname === href;
  };
  const downloadProfile = () => {
    toast({
      title: "تحميل ملف الشركة",
      description: "يتم تحضير ملف الشركة للتحميل..."
    });
  };
  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };
  return <header className={cn("fixed top-0 w-full z-50 transition-all duration-500", isScrolled || location.pathname !== '/' ? "bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border/50" : "bg-transparent backdrop-blur-none")}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex-shrink-0">
              {/* Company Logo */}
              <div className="relative transition-all duration-300 group-hover:scale-105">
                 <img src="/lovable-uploads/0125dec0-b560-43e6-b1a2-cd8ccb5ec28f.png" alt="شعار الفرسان الرباعية للإدارة والاستثمار" className={cn("h-10 w-auto object-contain transition-all duration-500", isScrolled || location.pathname !== '/' ? "brightness-100 contrast-100 saturate-100" : "brightness-0 invert contrast-100")} loading="eager" decoding="async" />
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 blur-lg -z-10 
                              group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {navigation.map((item, index) => {
              const isCurrent = isCurrentPage(item.href);
              const isHashLink = item.href.startsWith('#');
              return isHashLink ? <a key={item.href} href={item.href} className={cn("relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group", "hover:scale-105 animate-fade-in-up", isCurrent ? "bg-primary/90 text-primary-foreground shadow-glow" : isScrolled || location.pathname !== '/' ? "text-foreground hover:bg-accent/50 hover:text-accent-foreground" : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground")} style={{
                animationDelay: `${index * 100}ms`
              }} aria-current={isCurrent ? 'page' : undefined}>
                    <span className="relative z-10">
                      {language === 'ar' ? item.name : item.nameEn}
                    </span>
                    {!isCurrent && <div className="absolute inset-0 bg-gradient-glass rounded-xl opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300 -z-10" />}
                  </a> : <Link key={item.href} to={item.href} className={cn("relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group", "hover:scale-105 animate-fade-in-up", isCurrent ? "bg-primary/90 text-primary-foreground shadow-glow" : isScrolled || location.pathname !== '/' ? "text-foreground hover:bg-accent/50 hover:text-accent-foreground" : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground")} style={{
                animationDelay: `${index * 100}ms`
              }} aria-current={isCurrent ? 'page' : undefined}>
                    <span className="relative z-10">
                      {language === 'ar' ? item.name : item.nameEn}
                    </span>
                    {!isCurrent && <div className="absolute inset-0 bg-gradient-glass rounded-xl opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300 -z-10" />}
                  </Link>;
            })}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
            

            <Button variant="ghost" size="sm" onClick={toggleLanguage} className={cn("relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 group px-2 py-1 min-w-[50px]", isScrolled || location.pathname !== '/' ? "text-muted-foreground hover:text-foreground hover:bg-accent/50" : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10")}>
              <div className="absolute inset-0 bg-gradient-glass opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />
              <span className="relative z-10 text-xs font-semibold">
                {language === 'ar' ? 'EN' : 'AR'}
              </span>
            </Button>
            
            <Button className="relative overflow-hidden bg-gradient-primary hover:scale-105 shadow-glass 
                             transition-all duration-300 rounded-xl px-6 py-2 group border border-primary-foreground/20" onClick={() => {
            navigate('/request-quote');
          }}>
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10 font-semibold">
                {language === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className={cn("transition-all duration-300 rounded-xl hover:scale-105", isScrolled || location.pathname !== '/' ? "text-foreground hover:bg-accent" : "text-primary-foreground hover:bg-primary-foreground/10")}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6 transition-transform duration-300 rotate-180" aria-hidden="true" /> : <Menu className="block h-6 w-6 transition-transform duration-300" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation with Better Contrast */}
        {isMenuOpen && <div className="md:hidden animate-fade-in-up">
            <div className="px-4 pt-6 pb-6 space-y-3 bg-background/98 backdrop-blur-xl rounded-2xl mt-4 
                          shadow-elegant border border-border/30 mx-2">
              {navigation.map((item, index) => {
            const isCurrent = isCurrentPage(item.href);
            const isHashLink = item.href.startsWith('#');
            return isHashLink ? <a key={item.href} href={item.href} className={cn("block rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-300 animate-slide-in-right", "border border-transparent", isCurrent ? "bg-gradient-primary text-primary-foreground shadow-glow border-primary/30" : "text-foreground hover:bg-primary/10 hover:text-primary hover:scale-[1.02] hover:border-primary/20 active:scale-[0.98]")} style={{
              animationDelay: `${index * 50}ms`
            }} aria-current={isCurrent ? 'page' : undefined}>
                    <div className="flex items-center justify-between">
                      <span>{language === 'ar' ? item.name : item.nameEn}</span>
                      {isCurrent && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                    </div>
                  </a> : <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)} className={cn("block rounded-xl px-6 py-4 text-lg font-semibold transition-all duration-300 animate-slide-in-right", "border border-transparent", isCurrent ? "bg-gradient-primary text-primary-foreground shadow-glow border-primary/30" : "text-foreground hover:bg-primary/10 hover:text-primary hover:scale-[1.02] hover:border-primary/20 active:scale-[0.98]")} style={{
              animationDelay: `${index * 50}ms`
            }} aria-current={isCurrent ? 'page' : undefined}>
                    <div className="flex items-center justify-between">
                      <span>{language === 'ar' ? item.name : item.nameEn}</span>
                      {isCurrent && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                    </div>
                  </Link>;
          })}
              
              <div className="pt-4 mt-4 border-t border-border/30">
                <div className="space-y-3">
                  <Button variant="ghost" size="lg" onClick={toggleLanguage} className="w-full justify-start text-muted-foreground hover:text-primary 
                             hover:bg-primary/10 rounded-xl transition-all duration-300 py-4 text-base font-medium
                             border border-transparent hover:border-primary/20">
                    <Globe className="h-5 w-5 ml-3 rtl:ml-0 rtl:mr-3" />
                    {language === 'ar' ? 'English' : 'العربية'}
                  </Button>
                  
                  <Button size="lg" className="w-full bg-gradient-primary hover:scale-[1.02] shadow-elegant 
                             transition-all duration-300 rounded-xl py-4 text-base font-bold
                             border border-primary/30 active:scale-[0.98]" onClick={() => {
                setIsMenuOpen(false);
                navigate('/request-quote');
              }}>
                    <div className="flex items-center justify-center gap-2">
                      <span>{language === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}</span>
                    </div>
                  </Button>
                  
                  <Button variant="outline" size="lg" onClick={downloadProfile} className="w-full justify-center text-primary hover:text-primary-foreground 
                             hover:bg-primary rounded-xl transition-all duration-300 py-4 text-base font-medium
                             border-primary/30 hover:border-primary">
                    <Download className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2" />
                    {language === 'ar' ? 'تحميل ملف الشركة' : 'Download Profile'}
                  </Button>
                </div>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;