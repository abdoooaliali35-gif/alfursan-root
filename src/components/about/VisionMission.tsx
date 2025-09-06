import { Eye, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision */}
          <Card className="bg-gradient-glass backdrop-blur-sm border border-border/20 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">رؤيتنا</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أن نكون الشركة الرائدة عالمياً في صناعة الجميد الأردني الأصيل، 
                ونشر التراث الأردني العريق في جميع أنحاء العالم مع الحفاظ على أعلى 
                معايير الجودة والأصالة.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="bg-gradient-glass backdrop-blur-sm border border-border/20 hover:shadow-card transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">رسالتنا</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                تقديم أجود أنواع الجميد الأردني الأصيل باستخدام أحدث التقنيات 
                والمعايير العالمية، مع الحفاظ على الوصفات التقليدية وتلبية احتياجات 
                عملائنا المحليين والعالميين.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;