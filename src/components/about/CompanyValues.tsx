import { Heart, Award, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CompanyValues = () => {
  const values = [
    {
      icon: Heart,
      title: 'الأصالة',
      description: 'نحافظ على التراث الأردني الأصيل في صناعة الجميد مع الحفاظ على الوصفات التقليدية'
    },
    {
      icon: Award,
      title: 'الجودة',
      description: 'نلتزم بأعلى معايير الجودة العالمية في جميع مراحل الإنتاج والتعبئة والتوزيع'
    },
    {
      icon: Users,
      title: 'رضا العملاء',
      description: 'نضع عملاءنا في المقدمة ونسعى دائماً لتلبية احتياجاتهم وتجاوز توقعاتهم'
    },
    {
      icon: Globe,
      title: 'التطوير المستمر',
      description: 'نستثمر في التكنولوجيا الحديثة والبحث والتطوير لتحسين منتجاتنا باستمرار'
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            قيمنا الأساسية
          </h2>
          <p className="text-xl text-muted-foreground">
            المبادئ التي نلتزم بها في كل ما نقوم به
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="text-center bg-gradient-glass backdrop-blur-sm border border-border/20 
                       hover:shadow-card hover:scale-105 transition-all duration-300 animate-fade-in-up" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;