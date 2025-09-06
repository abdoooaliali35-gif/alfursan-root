import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Package, Star, ChevronRight, Award, Shield, ArrowLeft, Truck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Using the new uploaded image
const jameedZamanImage = "/lovable-uploads/29d4bd03-e9a3-4b63-8302-c7e4b543f677.png";

const JameednaZaman = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "جميدنا زمان - الفرسان الرباعية | Jameedna Zaman";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'جميدنا زمان - جميد أردني أصيل مصنوع من حليب الغنم الطازج المبستر، معبأ بتقنية عصرية للحفاظ على الطعم التقليدي الأصيل'
      );
    }
  }, []);

  const specifications = [
    { label: 'الباركود', value: '6251591112007' },
    { label: 'الوزن', value: '1000غ' },
    { label: 'نوع التعبئة', value: 'اسيبتك (Aseptic)' },
    { label: 'التعبئة', value: 'كرتونة 6×1' },
    { label: 'الأبعاد (سم)', value: '21×24×52' },
    { label: 'مدة الصلاحية', value: '24 شهر' }
  ];

  const certificates = ['ISO 22000', 'HACCP', 'FDA', 'وزارة الصحة'];

  const features = [
    {
      icon: Shield,
      title: 'جودة مضمونة',
      description: 'مصنوع من حليب الغنم الطازج 100% مع أعلى معايير النظافة'
    },
    {
      icon: Package,
      title: 'تعبئة عصرية',
      description: 'تقنية Aseptic المتطورة للحفاظ على الطعم والقيمة الغذائية'
    },
    {
      icon: CheckCircle,
      title: 'طبيعي 100%',
      description: 'خالي من المواد الحافظة والألوان الصناعية'
    },
    {
      icon: Award,
      title: 'وصفة تقليدية',
      description: 'طريقة تحضير تراثية أردنية أصيلة توارثناها عبر الأجيال'
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
              <span className="text-foreground font-medium">جميدنا زمان</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-jameed text-white relative overflow-hidden">
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
                  جميدنا زمان
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-in-right">
                  Jameedna Zaman
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  جميد أردني أصيل مصنوع من حليب الغنم الطازج المبستر مع البهارات والملح، 
                  معبأ بطريقة عصرية تحافظ على الطعم التقليدي الأصيل
                </p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-300 fill-current" />
                    ))}
                  </div>
                  <span className="text-white/80 text-lg">(127 تقييم)</span>
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 px-8"
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
                    src={jameedZamanImage} 
                    alt="جميدنا زمان"
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
                تفاصيل شاملة عن منتج جميدنا زمان
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
                لماذا تختار جميدنا زمان؟
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
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-primary" />
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
                  className="bg-gradient-glass backdrop-blur-sm border border-primary/20 text-primary 
                           hover:bg-primary/10 transition-all duration-300 px-6 py-3 text-lg font-semibold
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
        <section className="py-20 bg-gradient-jameed text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لتذوق الأصالة؟
            </h2>
            <p className="text-xl text-white/90 mb-8">
              اطلب جميدنا زمان الآن واستمتع بالطعم الأردني الأصيل
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8"
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

export default JameednaZaman;