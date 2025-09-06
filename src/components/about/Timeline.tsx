import { Badge } from "@/components/ui/badge";

const Timeline = () => {
  const milestones = [
    {
      year: '1999',
      title: 'التأسيس',
      description: 'تأسيس شركة الفرسان الرباعية للإدارة والاستثمار في محافظة المفرق'
    },
    {
      year: '2005',
      title: 'بداية الإنتاج',
      description: 'بداية إنتاج الجميد الأردني الأصيل بأعلى معايير الجودة'
    },
    {
      year: '2010',
      title: 'الحصول على الشهادات',
      description: 'حصلنا على شهادات الجودة العالمية ISO وHACCP وFDA'
    },
    {
      year: '2015',
      title: 'التوسع',
      description: 'توسيع خطوط الإنتاج وإدخال تقنيات Aseptic الحديثة'
    },
    {
      year: '2020',
      title: 'الريادة',
      description: 'أصبحنا من الرواد في صناعة الجميد الأردني محلياً وإقليمياً'
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            رحلة النجاح
          </h2>
          <p className="text-xl text-muted-foreground">
            أهم المحطات في تاريخ الفرسان الرباعية
          </p>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className="flex gap-8 items-start animate-fade-in-up" 
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0">
                <Badge variant="secondary" className="text-lg px-4 py-2 font-bold">
                  {milestone.year}
                </Badge>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">{milestone.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;