import { useEffect } from "react";
import { Award, Shield, CheckCircle, Globe, FileCheck, Star, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productionLineImage from "@/assets/production-line.jpg";

const Certificates = () => {
  useEffect(() => {
    document.title = "الشهادات والجودة - الفرسان الرباعية | Quality & Certificates";
  }, []);

  const certificates = [
    {
      name: "ISO 22000",
      description: "نظام إدارة سلامة الغذاء",
      details: "معيار دولي يحدد متطلبات نظام إدارة سلامة الغذاء في جميع أنحاء السلسلة الغذائية",
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      name: "ISO 9001",
      description: "نظام إدارة الجودة",
      details: "معيار دولي لأنظمة إدارة الجودة يساعد في تحسين الأداء وتلبية توقعات العملاء",
      icon: Award,
      color: "text-jameed-red",
      bgColor: "bg-jameed-red/10"
    },
    {
      name: "HACCP",
      description: "تحليل المخاطر ونقاط التحكم الحرجة",
      details: "نظام وقائي يحدد المخاطر الفيزيائية والكيميائية والبيولوجية في عملية الإنتاج",
      icon: CheckCircle,
      color: "text-badawya-gold",
      bgColor: "bg-badawya-gold/10"
    },
    {
      name: "HALAL FOOD",
      description: "شهادة الحلال المعتمدة",
      details: "شهادة تؤكد أن جميع منتجاتنا تتوافق مع أحكام الشريعة الإسلامية",
      icon: Star,
      color: "text-primary-light",
      bgColor: "bg-primary-light/10"
    },
    {
      name: "FDA Approved",
      description: "موافقة إدارة الغذاء والدواء الأمريكية",
      details: "اعتماد من هيئة الغذاء والدواء الأمريكية يضمن سلامة وجودة منتجاتنا",
      icon: FileCheck,
      color: "text-jameed-burgundy",
      bgColor: "bg-jameed-burgundy/10"
    },
    {
      name: "TÜV AUSTRIA",
      description: "شهادة الجودة الأوروبية",
      details: "اعتماد من هيئة الاختبار والمعايرة النمساوية الرائدة عالمياً",
      icon: Globe,
      color: "text-badawya-sand",
      bgColor: "bg-badawya-sand/10"
    }
  ];

  const qualityFeatures = [
    {
      title: "مختبرات متطورة",
      description: "مختبرات مجهزة بأحدث التقنيات لفحص جودة المنتجات",
      percentage: "100"
    },
    {
      title: "رقابة مستمرة",
      description: "مراقبة دقيقة لجميع مراحل الإنتاج على مدار 24 ساعة",
      percentage: "100"
    },
    {
      title: "معايير عالمية",
      description: "تطبيق أعلى المعايير الدولية في الإنتاج والتعبئة",
      percentage: "100"
    },
    {
      title: "فريق خبراء",
      description: "فريق من المختصين ذوي الخبرة الطويلة في ضمان الجودة",
      percentage: "100"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-hero text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-primary-foreground/10 text-primary-foreground">
              الشهادات والجودة
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              معايير الجودة العالمية
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              نلتزم بأعلى معايير الجودة والسلامة المعترف بها عالمياً لضمان تقديم منتجات آمنة وعالية الجودة
            </p>
            
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg">
              <Download className="ml-2 h-5 w-5" />
              تحميل ملف الشهادات
            </Button>
          </div>
        </section>

        {/* Certificates Visual Display */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                شهاداتنا المعتمدة
              </h2>
              <p className="text-muted-foreground">
                نفتخر بحصولنا على أهم الشهادات العالمية
              </p>
            </div>
            
            {/* Certificates Logos Display */}
            <div className="bg-white rounded-3xl p-12 shadow-card">
              {/* First Row - Main Certificates */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-8">
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src="/lovable-uploads/706ea940-5d23-4faf-8897-3a1528410980.png"
                      alt="ISO 22000 Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-foreground text-sm">ISO 22000</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src="/lovable-uploads/dcfb331c-bae4-480c-8e7c-d30a55611016.png"
                      alt="ISO 9001 Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-foreground text-sm">ISO 9001</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src="/lovable-uploads/58d26267-5e1f-47a1-802b-d08134eb5120.png"
                      alt="Halal Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-foreground text-sm">HALAL</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src="/lovable-uploads/fe47d08b-d9cf-48cf-ac37-e7ec1f3f8d14.png"
                      alt="FDA Approved Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-foreground text-sm">FDA</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src="/lovable-uploads/d06089eb-733f-45bb-80fb-cdc379d7e9d1.png"
                      alt="TÜV Austria Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-foreground text-sm">TÜV AUSTRIA</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src="/lovable-uploads/483545ae-0308-4102-93df-dc238d3f8133.png"
                      alt="Made in Jordan Certificate"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-bold text-foreground text-sm">صنع في الأردن</p>
                </div>
              </div>
              
              {/* Second Row - Additional FDA Logos */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-center text-lg font-semibold text-foreground mb-6">شهادات FDA الإضافية</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                  <div className="text-center">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                      <img 
                        src="/lovable-uploads/4b4277c2-0c42-49ac-a952-80e0600e87bf.png"
                        alt="FDA Gold Approved Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">FDA Gold</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                      <img 
                        src="/lovable-uploads/da73e2d9-4ceb-48da-ac05-0afc318f5388.png"
                        alt="FDA Red Stamp Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">FDA Stamp</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                      <img 
                        src="/lovable-uploads/232332e7-b13a-4fd6-9a82-277c926a4b71.png"
                        alt="FDA Green Badge Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">FDA Badge</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                      <img 
                        src="/lovable-uploads/c9033cd6-95c5-49b8-a7c9-e1463f7c55ca.png"
                        alt="FDA Green Check Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">FDA Check</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                      <img 
                        src="/lovable-uploads/e3653393-180f-4ca2-9d3f-3259b93bc00d.png"
                        alt="FDA Black Text Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">FDA Black</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2">
                      <img 
                        src="/lovable-uploads/87ad5e4e-2b40-43cf-badc-5693f68225e7.png"
                        alt="FDA Red Badge Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="font-bold text-foreground text-sm">FDA Red</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Certificates */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                تفاصيل شهاداتنا
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                كل شهادة تعكس التزامنا بالتميز والجودة في كل جانب من جوانب عملنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <Card 
                  key={cert.name}
                  className="group hover:shadow-glow transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-20 h-20 ${cert.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className={`h-10 w-10 ${cert.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold">{cert.name}</CardTitle>
                    <p className="text-primary font-medium">{cert.description}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                عمليات ضمان الجودة
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                نطبق أفضل الممارسات في كل مرحلة من مراحل الإنتاج
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {qualityFeatures.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="hover:shadow-card transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="w-full bg-border rounded-full h-3">
                          <div 
                            className="bg-gradient-primary h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${feature.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-sm text-muted-foreground">مستوى التطبيق</span>
                          <span className="text-sm font-bold text-primary">{feature.percentage}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Production Excellence */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={productionLineImage} 
                    alt="خطوط الإنتاج في مصنع الفرسان الرباعية"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
                </div>
                
                <CardContent className="p-12 bg-gradient-primary text-primary-foreground flex items-center">
                  <div className="w-full">
                    <h3 className="text-3xl font-bold mb-4">التميز في الإنتاج</h3>
                    <p className="text-xl text-primary-foreground/90 mb-8">
                      مصنع حديث مجهز بأحدث التقنيات العالمية
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">+20</div>
                        <div className="text-primary-foreground/80 text-sm">عامًا من الخبرة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">100%</div>
                        <div className="text-primary-foreground/80 text-sm">ضمان الجودة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">24/7</div>
                        <div className="text-primary-foreground/80 text-sm">مراقبة مستمرة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">6+</div>
                        <div className="text-primary-foreground/80 text-sm">شهادات دولية</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Certificates;