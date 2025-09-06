import { Award, Shield, CheckCircle, Globe, FileCheck, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productionLineImage from "@/assets/production-line.jpg";

const QualityCertificates = () => {
  const certificates = [
    {
      name: "ISO 22000",
      description: "إدارة سلامة الغذاء",
      icon: Shield,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      name: "ISO 9001",
      description: "إدارة الجودة",
      icon: Award,
      color: "text-jameed-red",
      bgColor: "bg-jameed-red/10"
    },
    {
      name: "HACCP",
      description: "تحليل المخاطر ونقاط التحكم الحرجة",
      icon: CheckCircle,
      color: "text-badawya-gold",
      bgColor: "bg-badawya-gold/10"
    },
    {
      name: "HALAL FOOD",
      description: "شهادة الحلال المعتمدة",
      icon: Star,
      color: "text-primary-light",
      bgColor: "bg-primary-light/10"
    },
    {
      name: "FDA",
      description: "إدارة الغذاء والدواء الأمريكية",
      icon: FileCheck,
      color: "text-jameed-burgundy",
      bgColor: "bg-jameed-burgundy/10"
    },
    {
      name: "EUR.1",
      description: "شهادة المنشأ الأوروبية",
      icon: Globe,
      color: "text-badawya-sand",
      bgColor: "bg-badawya-sand/10"
    }
  ];

  const qualityFeatures = [
    {
      title: "خطوط إنتاج حديثة",
      description: "أحدث التقنيات في التصنيع والتعبئة",
      percentage: "100"
    },
    {
      title: "رقابة جودة صارمة",
      description: "فحص شامل في جميع مراحل الإنتاج",
      percentage: "100"
    },
    {
      title: "مواد خام طبيعية",
      description: "حليب غنم طازج من المراعي الأردنية",
      percentage: "100"
    },
    {
      title: "تعبئة آمنة",
      description: "تقنية Aseptic للحفاظ على الجودة",
      percentage: "100"
    }
  ];

  return (
    <section className="py-24 bg-background" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">الجودة والشهادات</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            التزام بأعلى معايير الجودة العالمية
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نلتزم بتطبيق أنظمة الجودة العالمية لضمان سلامة وأمان منتجاتنا، 
            مع الحصول على أهم الشهادات المعترف بها دولياً
          </p>
        </div>

        {/* Certificates Visual Display */}
        <div className="bg-white rounded-3xl p-12 shadow-card mb-20">
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

        {/* Quality Features */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              لماذا نتميز في الجودة؟
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              من المواد الخام إلى المنتج النهائي، نضمن أعلى مستويات الجودة في كل مرحلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityFeatures.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${feature.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-muted-foreground">مستوى الجودة</span>
                        <span className="text-sm font-semibold text-primary">{feature.percentage}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Production Capacity Banner */}
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Production Image */}
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={productionLineImage} 
                  alt="خطوط الإنتاج في مصنع الفرسان الرباعية"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-jameed-red/80 to-transparent"></div>
              </div>
              
              {/* Content */}
              <CardContent className="p-12 bg-gradient-jameed text-white flex items-center">
                <div className="w-full">
                  <h3 className="text-3xl font-bold mb-4">طاقة إنتاجية عالية</h3>
                  <p className="text-xl text-white/90 mb-8">
                    نلبي احتياجات السوق المحلي والدولي بكفاءة عالية
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-white/80 text-sm">خطوط إنتاج متواصلة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">1000+</div>
                      <div className="text-white/80 text-sm">وحدة يومياً</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">18</div>
                      <div className="text-white/80 text-sm">شهر مدة صلاحية</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QualityCertificates;