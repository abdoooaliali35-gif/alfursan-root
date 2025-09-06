import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Package, Star, ChevronRight, Award, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import jameedZamanImage from "@/assets/jameedna-zaman-package.jpg";
import jameedBadawyaImage from "@/assets/jameed-badawya-package.jpg";
const Products = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "منتجاتنا - الفرسان الرباعية | Al Fursan Quadruple Products";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'اكتشف مجموعة منتجات الفرسان الرباعية من الجميد الأردني الأصيل - جميدنا زمان وجميد بدوية بأعلى معايير الجودة العالمية');
    }
  }, []);
  const products = [{
    id: 'jameedna-zaman',
    name: 'جميدنا زمان',
    nameEn: 'Jameedna Zaman',
    description: 'جميد أردني أصيل مصنوع من حليب الغنم الطازج المبستر مع البهارات والملح، معبأ بطريقة عصرية تحافظ على الطعم التقليدي الأصيل',
    shortDesc: 'الطعم التقليدي الأصيل بتقنية حديثة',
    image: jameedZamanImage,
    rating: 4.9,
    reviews: 127,
    certificates: ['ISO', 'HACCP', 'FDA'],
    colors: ['jameed-red', 'jameed-burgundy', 'jameed-yellow'],
    link: '/products/jameedna-zaman'
  }, {
    id: 'jameed-badawya',
    name: 'جميد بدوية',
    nameEn: 'Jameed Badawya',
    description: 'جميد بدوي تقليدي بلمسة حديثة، يجمع بين النكهة الأصيلة والتعبئة الصحية العصرية لتجربة فريدة وصحية',
    shortDesc: 'تراث بدوي أصيل بجودة عالمية',
    image: jameedBadawyaImage,
    rating: 4.8,
    reviews: 93,
    certificates: ['Halal', 'FDA', 'HACCP'],
    colors: ['badawya-cream', 'badawya-gold', 'badawya-sand'],
    link: '/products/jameed-badawya'
  }];
  return <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20 mx-0 py-[81px]">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                        bg-[length:30px_30px] animate-shimmer" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
                منتجاتنا المميزة
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-in-right">
                اكتشف مجموعة منتجاتنا من الجميد الأردني الأصيل
                <br />
                <span className="font-semibold">جودة استثنائية • طعم لا يُنسى</span>
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {products.map((product, index) => <Card key={product.id} className="group relative overflow-hidden bg-gradient-glass backdrop-blur-lg border border-border/20 
                           hover:shadow-glass hover:scale-105 transition-all duration-700 animate-fade-in-up rounded-3xl" style={{
              animationDelay: `${index * 200}ms`
            }}>
                  {/* Premium Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <Badge className="bg-gradient-primary text-primary-foreground border border-primary-foreground/20 
                                   shadow-glow animate-pulse">
                      منتج مميز
                    </Badge>
                  </div>

                  {/* Product Header */}
                  <div className="h-80 relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain drop-shadow-2xl animate-float 
                                 transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
                          <p className="text-white/90 text-xl font-medium">{product.nameEn}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-white/30'}`} />)}
                          </div>
                          <p className="text-white/80">({product.reviews} تقييم)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Product Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {product.shortDesc}
                    </p>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Certificates */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        الشهادات والمعايير
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {product.certificates.map((cert, idx) => <Badge key={cert} variant="secondary" className="bg-gradient-glass backdrop-blur-sm border border-primary/20 text-primary 
                                     hover:bg-primary/10 transition-all duration-300 px-4 py-2 font-semibold">
                            <Shield className="h-3 w-3 mr-1 rtl:mr-0 rtl:ml-1" />
                            {cert}
                          </Badge>)}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Link to={product.link} className="flex-1">
                        <Button variant="default" size="lg" className="w-full group relative overflow-hidden bg-gradient-primary">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent 
                                        -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                          <Package className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                          <span className="relative z-10">تفاصيل المنتج</span>
                          <ChevronRight className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1 group"
                        onClick={() => navigate('/request-quote')}
                      >
                        اطلب عرض سعر
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز لتجربة الطعم الأصيل؟
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              اطلب منتجاتنا الآن واستمتع بأجود أنواع الجميد الأردني الأصيل
            </p>
            <Button 
              variant="glass" 
              size="lg" 
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 px-8 py-4"
              onClick={() => navigate('/request-quote')}
            >
              اطلب عرض سعر شامل
              <ChevronRight className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Products;