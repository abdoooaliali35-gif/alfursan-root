import { Link } from "react-router-dom";
import { Factory, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          جاهز للتعرف على منتجاتنا؟
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8">
          اكتشف مجموعة منتجاتنا من الجميد الأردني الأصيل
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/products">
            <Button variant="glass" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 px-8">
              <Factory className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
              تصفح المنتجات
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
            <Phone className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
            اتصل بنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;