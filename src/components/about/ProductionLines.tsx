import { Factory, Zap, Shield, Gauge, Cog, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import productionLineImage from "@/assets/production-line.jpg";

const ProductionLines = () => {
  const technologies = [
    {
      icon: Factory,
      title: "تقنية Aseptic الأوروبية",
      description: "تقنية التعبئة المعقمة المتطورة التي تضمن الحفاظ على القيمة الغذائية والطعم الأصيل"
    },
    {
      icon: Shield,
      title: "أنظمة الأمان الغذائي",
      description: "معايير HACCP وISO 22000 لضمان سلامة المنتجات من المصدر حتى المستهلك"
    },
    {
      icon: Gauge,
      title: "مراقبة الجودة المتقدمة",
      description: "مختبرات مجهزة بأحدث الأجهزة لفحص جودة المواد الخام والمنتجات النهائية"
    },
    {
      icon: Cog,
      title: "خطوط إنتاج متطورة",
      description: "معدات أوروبية حديثة تضمن الإنتاج بكفاءة عالية ومعايير جودة استثنائية"
    }
  ];

  const productionCapacity = [
    { metric: "5000", unit: "طن سنوياً", description: "طاقة إنتاجية" },
    { metric: "24/7", unit: "تشغيل", description: "خطوط الإنتاج" },
    { metric: "99.8%", unit: "كفاءة", description: "معدل التشغيل" },
    { metric: "ISO", unit: "معتمد", description: "معايير الجودة" }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            خطوط الإنتاج والتقنيات
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نستخدم أحدث التقنيات الأوروبية المتطورة لضمان إنتاج جميد أردني أصيل بأعلى معايير الجودة العالمية
          </p>
        </div>

        {/* Production Image and Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative animate-fade-in-scale">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img 
                src={productionLineImage} 
                alt="خطوط الإنتاج في مصنع الفرسان الرباعية" 
                className="w-full h-96 object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">خطوط الإنتاج المتطورة</h3>
              <p className="text-white/90">تقنيات أوروبية حديثة</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              تقنيات إنتاج متقدمة
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              مصنعنا مجهز بأحدث خطوط الإنتاج الأوروبية التي تجمع بين التقنيات المتطورة والحفاظ على 
              الطعم التراثي الأصيل للجميد الأردني. نستثمر باستمرار في تحديث معداتنا لضمان أعلى 
              معايير الجودة والكفاءة.
            </p>

            {/* Production Capacity */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {productionCapacity.map((item, index) => (
                <div key={item.description} className="text-center p-4 bg-background rounded-xl border border-border/20">
                  <div className="text-2xl font-bold text-primary">{item.metric}</div>
                  <div className="text-sm text-muted-foreground">{item.unit}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.title} 
              className="text-center bg-background border border-border/20 hover:shadow-card hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-20 bg-gradient-glass backdrop-blur-sm rounded-3xl p-8 border border-border/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">ضمان الجودة والسلامة</h3>
            <p className="text-lg text-muted-foreground">
              نطبق أعلى معايير الجودة والسلامة في جميع مراحل الإنتاج
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "فحص المواد الخام", description: "فحص دقيق لجميع المواد الخام قبل دخولها الإنتاج" },
              { title: "مراقبة العمليات", description: "مراقبة مستمرة لجميع مراحل الإنتاج والتعبئة" },
              { title: "اختبار المنتج النهائي", description: "فحص شامل للمنتجات قبل التوزيع" }
            ].map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionLines;