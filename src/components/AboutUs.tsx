import { Users, UserCheck, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import factoryImage from "@/assets/factory-exterior.jpg";

const AboutUs = () => {
  const stats = [
    {
      icon: Users,
      number: 150,
      label: "موظف",
      color: "text-primary"
    },
    {
      icon: UserCheck,
      number: 10,
      label: "مهندس",
      color: "text-primary"
    },
    {
      icon: Building2,
      number: 40,
      label: "عميل مياومة",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
          {/* Content - Right Side */}
          <div className="space-y-6 sm:space-y-8 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-1.5 sm:w-2 h-8 sm:h-12 bg-primary rounded-full"></div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">من نحن</h2>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary">فرسان الجودة</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                تسعى الفرسان الرباعية إلى التميز الدائم في توفير منتجات صحية وذات جودة عالية من خيرات 
                الطبيعة الأردنية.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                شركة الفرسان الرباعية للإدارة والاستثمار هي من أكبر الشركات الرائدة في المملكة الأردنية الهاشمية 
                وهي شركة ذات مسؤولية محدودة تعمل في مجال صناعة المواد الغذائية المختلفة ويقع مبنى الشركة في منطقة المفرق.
              </p>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                تضم الشركة مجموعة من مصانع المنتجات الغذائية عالية الجودة وفق أعلى المعايير الدولية. 
                يبلغ عدد موظفي الشركة حوالي مئة وخمسون موظف وعشرة مهندسين وأربعين موظف مياومة تقريباً 
                وتطرح الشركة منتجاتها في الأسواق بأسعار معقولة تناسب الجميع كما تحرص 
                دوماً على التجديد ومراقبة جودة منتجاتها وتطويرها والاستجابة لمتطلبات المستهلك.
              </p>
            </div>
          </div>

          {/* Factory Image - Left Side */}
          <div className="lg:order-1">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
              <img 
                src={factoryImage} 
                alt="مصنع الفرسان الرباعية" 
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const StatsCard = () => {
              const { count, ref } = useCountUp({ end: stat.number, duration: 2000 + (index * 200) });
              
              return (
                <Card 
                  ref={ref}
                  className="group text-center hover:shadow-xl transition-all duration-500 animate-fade-in border-0 bg-primary shadow-lg hover:shadow-primary/25"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary-foreground rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-primary-foreground">
                      {count}
                    </h3>
                    <p className="text-primary-foreground/80 font-medium text-sm sm:text-base lg:text-lg">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            };
            
            return <StatsCard key={stat.label} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;