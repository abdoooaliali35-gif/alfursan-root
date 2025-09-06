import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import factoryImage from "@/assets/factory-exterior.jpg";

const CompanyStory = () => {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
              قصتنا
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-in-right">
              <p>
                تأسست شركة الفرسان الرباعية للإدارة والاستثمار في عام 1999 في محافظة المفرق، 
                الأردن، برؤية واضحة لتكون الرائدة في صناعة الجميد الأردني الأصيل.
              </p>
              
              <p>
                منذ بداياتنا المتواضعة، نمت الشركة لتصبح واحدة من أهم المصانع المتخصصة في 
                إنتاج الجميد في المنطقة، مع الحفاظ على التراث الأردني الأصيل والاستثمار في 
                أحدث التقنيات لضمان أعلى معايير الجودة والسلامة.
              </p>
              
              <p>
                اليوم، نفخر بتقديم منتجات عالية الجودة تحمل اسم "جميدنا زمان" و "جميد بدوية"، 
                التي تجمع بين الطعم الأصيل والتقنيات الحديثة في التعبئة والحفظ.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/products">
                <Button size="lg" className="px-8">
                  تعرف على منتجاتنا
                  <ChevronRight className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Factory Image */}
          <div className="relative animate-fade-in-scale">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={factoryImage} alt="مصنع الفرسان الرباعية" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">مصنعنا في المفرق</h3>
              <p className="text-white/90">مجهز بأحدث التقنيات العالمية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;