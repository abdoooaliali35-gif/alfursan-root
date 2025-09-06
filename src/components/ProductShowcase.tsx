import { Package, Award, Truck, Shield, Sparkles, Star, ChevronRight, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import jameedZamanImage from "@/assets/jameedna-zaman-package.jpg";
import jameedBadawyaImage from "@/assets/jameed-badawya-package.jpg";
import productionLineImage from "@/assets/production-line.jpg";

const ProductShowcase = () => {
  const navigate = useNavigate();
  const jameedProducts = [
    {
      id: 'jameedna-zaman',
      name: 'جميدنا زمان',
      nameEn: 'Jameedna Zaman',
      description: 'جميد أردني أصيل مصنوع من حليب الغنم الطازج المبستر مع البهارات والملح، معبأ بطريقة عصرية تحافظ على الطعم التقليدي الأصيل',
      descriptionEn: 'Authentic Jordanian Jameed made from fresh pasteurized sheep milk, spices, and salt, aseptically packed to preserve its traditional taste',
      barcode: '6251591112007',
      weight: '1000غ',
      packaging: 'كرتونة 6×1',
      packagingType: 'اسيبتك',
      dimensions: '21×24×52',
      certificates: ['ISO', 'HACCP', 'FDA'],
      colors: ['jameed-red', 'jameed-burgundy', 'jameed-yellow'],
      gradient: 'gradient-jameed',
      image: jameedZamanImage,
      rating: 4.9,
      reviews: 127
    },
    {
      id: 'jameed-badawya',
      name: 'جميد بدوية',
      nameEn: 'Jameed Badawya',
      description: 'جميد بدوي تقليدي بلمسة حديثة، يجمع بين النكهة الأصيلة والتعبئة الصحية العصرية لتجربة فريدة وصحية',
      descriptionEn: 'Traditional Bedouin Jameed with a modern touch, combining authentic flavor with hygienic modern packaging',
      barcode: '6251591112144',
      weight: '1000غ',
      packaging: 'اسيبتك 6×1',
      packagingType: 'اسيبتك',
      dimensions: '21×24×52',
      certificates: ['Halal', 'FDA', 'HACCP'],
      colors: ['badawya-cream', 'badawya-gold', 'badawya-sand'],
      gradient: 'gradient-badawya',
      image: jameedBadawyaImage,
      rating: 4.8,
      reviews: 93
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'جودة عالمية',
      description: 'شهادات ISO وHACCP وHalal وFDA',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      icon: Package,
      title: 'تعبئة عصرية',
      description: 'تقنية Aseptic للحفاظ على الجودة',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Truck,
      title: 'توريد سريع',
      description: 'خدمة توصيل لجميع أنحاء العالم',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    {
      icon: Award,
      title: 'خبرة 20+ عام',
      description: 'رائدون في صناعة الجميد الأردني',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden" id="products">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-glass backdrop-blur-sm 
                        border border-primary/20 mb-4 sm:mb-6 animate-fade-in-up">
            <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">منتجاتنا المميزة</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in-up 
                        bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            منتجات الجميد الأصيل
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-in-right px-4 sm:px-0">
            نفخر بتقديم أجود أنواع الجميد الأردني المصنوع بأعلى معايير الجودة العالمية
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold">طعم أصيل، جودة استثنائية</span>
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-24">
          {jameedProducts.map((product, index) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <Card 
                className="group relative overflow-hidden bg-gradient-glass backdrop-blur-lg border border-border/20 
                         hover:shadow-glass hover:scale-105 transition-all duration-700 animate-fade-in-up rounded-3xl 
                         cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
              {/* Premium Badge */}
              <div className="absolute top-6 right-6 z-20">
                <Badge className="bg-gradient-primary text-primary-foreground border border-primary-foreground/20 
                               shadow-glow animate-pulse">
                  منتج مميز
                </Badge>
              </div>

              {/* Product Header with Modern Gradient */}
              <div className={`h-48 sm:h-56 md:h-64 bg-${product.gradient} relative overflow-hidden rounded-t-3xl`}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                                bg-[length:20px_20px] animate-shimmer" />
                </div>
                
                {/* Product Image with Float Animation */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl animate-float 
                             transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Product Title with Glass Effect */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{product.name}</h3>
                      <p className="text-white/90 text-lg font-medium">{product.nameEn}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-white/30'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-white/80">({product.reviews} تقييم)</p>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8">
                {/* Product Description */}
                <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                  {product.description}
                </p>

                {/* Product Specifications with Modern Design */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <Package className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                    مواصفات المنتج
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { label: 'الباركود', value: product.barcode },
                      { label: 'الوزن', value: product.weight },
                      { label: 'التعبئة', value: product.packaging },
                      { label: 'الأبعاد (سم)', value: product.dimensions }
                    ].map((spec, idx) => (
                      <div key={idx} className="bg-gradient-glass rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border/20">
                        <span className="text-xs sm:text-sm font-medium text-muted-foreground block mb-1">{spec.label}</span>
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certificates */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    الشهادات والمعايير
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {product.certificates.map((cert, idx) => (
                      <Badge 
                        key={cert} 
                        variant="secondary" 
                        className="bg-gradient-glass backdrop-blur-sm border border-primary/20 text-primary 
                                 hover:bg-primary/10 transition-all duration-300 px-4 py-2 text-sm font-semibold 
                                 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <Shield className="h-3 w-3 mr-1 rtl:mr-0 rtl:ml-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button with Modern Design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden text-xs sm:text-sm"
                    asChild
                  >
                    <span>
                      <Eye className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                      عرض التفاصيل
                    </span>
                  </Button>
                  <Button 
                    variant="default"
                    size="lg"
                    className="group relative overflow-hidden text-xs sm:text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigate('/request-quote');
                    }}
                  >
                    <Package className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    اطلب عرض سعر
                  </Button>
                </div>
              </CardContent>
            </Card>
            </Link>
          ))}
        </div>

        {/* Features Grid with Modern Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group text-center bg-gradient-glass backdrop-blur-lg border border-border/20 
                       hover:shadow-glass hover:scale-105 hover:-translate-y-2 transition-all duration-500 
                       animate-fade-in-up rounded-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 
                              group-hover:scale-110 transition-transform duration-300 relative`}>
                  <feature.icon className={`h-8 w-8 ${feature.color} transition-transform duration-300`} />
                  <div className={`absolute inset-0 ${feature.bg} rounded-2xl opacity-0 group-hover:opacity-75 
                                blur-md transition-opacity duration-300`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-20 text-center">
          <Card className="bg-gradient-hero text-primary-foreground relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <CardContent className="p-8 sm:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                            bg-[length:30px_30px] animate-shimmer" />
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">جاهز لتجربة الطعم الأصيل؟</h3>
                <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  اطلب منتجاتنا الآن واستمتع بأجود أنواع الجميد الأردني الأصيل
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to="/products">
                    <Button 
                      variant="glass" 
                      size="lg" 
                      className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                    >
                      <Eye className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                      عرض جميع المنتجات
                      <ChevronRight className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                    onClick={() => navigate('/request-quote')}
                  >
                    <Package className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                    اطلب عرض سعر شامل
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;