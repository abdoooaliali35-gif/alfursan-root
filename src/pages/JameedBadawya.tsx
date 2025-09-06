import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Package, Star, ChevronRight, Award, Shield, ArrowLeft, Truck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import jameedBadawyaImage from "@/assets/jameed-badawya-package.jpg";

const JameedBadawya = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "جميد بدوية - الفرسان الرباعية | Jameed Badawya";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'جميد بدوية - جميد بدوي تقليدي بلمسة حديثة، يجمع بين النكهة الأصيلة والتعبئة الصحية العصرية لتجربة فريدة وصحية'
      );
    }
  }, []);

  const specifications = [
    { label: 'الباركود', value: '6251591112144' },
    { label: 'الوزن', value: '1000غ' },
    { label: 'نوع التعبئة', value: 'اسيبتك (Aseptic)' },
    { label: 'التعبئة', value: 'اسيبتك 6×1' },
    { label: 'الأبعاد (سم)', value: '21×24×52' },
    { label: 'مدة الصلاحية', value: '24 شهر' }
  ];

  const certificates = ['Halal', 'FDA', 'HACCP', 'وزارة الصحة'];

  const features = [
    {
      icon: Shield,
      title: 'تراث بدوي أصيل',
      description: 'وصفة تقليدية بدوية تم توارثها عبر الأجيال مع الحفاظ على أصالة المذاق'
    },
    {
      icon: Package,
      title: 'تعبئة صحية حديثة',
      description: 'تقنية Aseptic المتطورة تضمن سلامة المنتج والحفاظ على قيمته الغذائية'
    },
    {
      icon: CheckCircle,
      title: 'مكونات طبيعية',
      description: 'مصنوع من حليب الغنم الطازج مع البهارات الطبيعية بدون إضافات صناعية'
    },
    {
      icon: Award,
      title: 'جودة مضمونة',
      description: 'يخضع للفحص والمراقبة المستمرة وفق أعلى معايير الجودة العالمية'
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-32">
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">الرئيسية</Link>
              <ChevronRight className="h-4 w-4 rotate-180" />
              <Link to="/products" className="hover:text-primary transition-colors">المنتجات</Link>
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span className="text-foreground font-medium">جميد بدوية</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-badawya text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                        bg-[length:30px_30px] animate-shimmer" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Star className="h-4 w-4 text-yellow-300" />
                  <span className="text-sm font-semibold">منتج مميز</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                  جميد بدوية
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-in-right">
                  Jameed Badawya
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  جميد بدوي تقليدي بلمسة حديثة، يجمع بين النكهة الأصيلة والتعبئة الصحية العصرية 
                  لتجربة فريدة وصحية تعكس أصالة التراث البدوي
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-6 w-6 ${i < 4 ? 'text-yellow-300 fill-current' : 'text-white/30'}`} />
                    ))}
                  </div>
                  <span className="text-white/80 text-lg">(93 تقييم)</span>
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-badawya-gold hover:bg-white/90 px-8"
                    onClick={() => navigate('/request-quote')}
                  >
                    اطلب عرض سعر
                    <ChevronRight className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
                  </Button>
                  
                  <Link to="/products">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                      <ArrowLeft className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                      العودة للمنتجات
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-white/20 to-transparent rounded-3xl p-8 backdrop-blur-sm">
                  <img 
                    src={jameedBadawyaImage} 
                    alt="جميد بدوية"
                    className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                مواصفات المنتج
              </h2>
              <p className="text-xl text-muted-foreground">
                تفاصيل شاملة عن منتج جميد بدوية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <Card 
                  key={spec.label}
                  className="bg-gradient-glass backdrop-blur-sm border border-border/20 hover:shadow-card 
                           transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">{spec.label}</h3>
                    <p className="text-xl font-bold text-foreground">{spec.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                مميزات المنتج
              </h2>
              <p className="text-xl text-muted-foreground">
                لماذا تختار جميد بدوية؟
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="text-center bg-background border border-border/20 hover:shadow-card 
                           hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-badawya-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-badawya-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              الشهادات والمعايير
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              معتمد من أهم الجهات العالمية للجودة والسلامة الغذائية
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {certificates.map((cert, index) => (
                <Badge 
                  key={cert}
                  variant="secondary" 
                  className="bg-gradient-glass backdrop-blur-sm border border-badawya-gold/20 text-badawya-gold 
                           hover:bg-badawya-gold/10 transition-all duration-300 px-6 py-3 text-lg font-semibold
                           animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Shield className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-badawya text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لتذوق التراث؟
            </h2>
            <p className="text-xl text-white/90 mb-8">
              اطلب جميد بدوية الآن واستمتع بالطعم البدوي الأصيل
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-badawya-gold hover:bg-white/90 px-8"
                onClick={() => navigate('/request-quote')}
              >
                <Package className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                اطلب عرض سعر
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8"
              >
                <Truck className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                استفسر عن التوصيل
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JameedBadawya;