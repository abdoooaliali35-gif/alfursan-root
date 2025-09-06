import { Globe, MapPin, Users, TrendingUp, Package, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GlobalMarkets = () => {
  const markets = [
    { country: "الأردن", status: "محلي", growth: "+15%" },
    { country: "السعودية", status: "رئيسي", growth: "+25%" },
    { country: "الإمارات", status: "متنامي", growth: "+30%" },
    { country: "الكويت", status: "مستقر", growth: "+12%" },
    { country: "قطر", status: "جديد", growth: "+40%" },
    { country: "البحرين", status: "متنامي", growth: "+18%" },
    { country: "العراق", status: "واعد", growth: "+35%" },
    { country: "لبنان", status: "مستقر", growth: "+8%" }
  ];

  const clientTypes = [
    {
      icon: Package,
      title: "موزعون رئيسيون",
      count: "25+",
      description: "شركاء توزيع في جميع أنحاء المنطقة"
    },
    {
      icon: Users,
      title: "عملاء تجزئة",
      count: "500+",
      description: "متاجر ومحلات تجارية تثق بمنتجاتنا"
    },
    {
      icon: Star,
      title: "عملاء مؤسسات",
      count: "100+",
      description: "فنادق ومطاعم ومؤسسات غذائية"
    }
  ];

  const achievements = [
    { metric: "85%", label: "حصة السوق المحلي" },
    { metric: "8", label: "دول نصدر إليها" },
    { metric: "95%", label: "معدل رضا العملاء" },
    { metric: "20+", label: "عاماً من الثقة" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            الأسواق العالمية والعملاء
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نفتخر بثقة عملائنا في أكثر من 8 دول، ونسعى لتوسيع حضورنا عالمياً مع الحفاظ على جودة منتجاتنا التراثية
          </p>
        </div>

        {/* Markets Map */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">خريطة الأسواق</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map((market, index) => (
              <Card 
                key={market.country}
                className="text-center hover:shadow-card transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="font-bold text-foreground">{market.country}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Badge 
                      variant={market.status === 'محلي' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {market.status}
                    </Badge>
                    
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium text-green-600">{market.growth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">شركاء النجاح</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card 
                key={client.title}
                className="text-center bg-gradient-glass backdrop-blur-sm border border-border/20 hover:shadow-card hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <client.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="text-3xl font-bold text-primary mb-2">{client.count}</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{client.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Statistics */}
        <div className="bg-gradient-hero text-primary-foreground rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">إنجازاتنا في الأسواق</h3>
            <p className="text-primary-foreground/90 text-lg">
              أرقام تعكس ثقة عملائنا وقوة حضورنا في السوق
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{achievement.metric}</div>
                <p className="text-primary-foreground/80">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Expansion */}
        <div className="mt-20 text-center">
          <div className="bg-muted/30 rounded-3xl p-12">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-6">التوسع المستقبلي</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نخطط لتوسيع حضورنا في أسواق جديدة خلال السنوات القادمة، مع التركيز على أوروبا وأمريكا الشمالية 
              لنشر تراث الجميد الأردني الأصيل عالمياً.
            </p>
            
            <div className="flex justify-center gap-4 mt-8">
              {['أوروبا', 'أمريكا الشمالية', 'آسيا'].map((region) => (
                <Badge key={region} variant="outline" className="px-4 py-2">
                  {region} - قريباً
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;