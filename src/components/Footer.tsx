import { Phone, Mail, MapPin, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/0125dec0-b560-43e6-b1a2-cd8ccb5ec28f.png" 
                alt="شعار الفرسان الرباعية للإدارة والاستثمار"
                className="h-8 w-auto object-contain brightness-0 invert transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
              <p className="text-primary-foreground/90 text-sm leading-relaxed">
                رائدون في صناعة الألبان والجميد الأردني الأصيل منذ أكثر من 20 عامًا، 
                نقدم منتجات عالية الجودة بمعايير دولية.
              </p>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Award className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-xs text-primary-foreground/80">7 شهادات جودة عالمية</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    منتجاتنا
                  </Link>
                </li>
                <li>
                  <Link to="/certificates" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    الجودة والشهادات
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-lg mb-4">منتجاتنا</h3>
              <ul className="space-y-2">
                <li className="text-primary-foreground/80 text-sm">
                  جميدنا زمان
                </li>
                <li className="text-primary-foreground/80 text-sm">
                  جميد بدوية
                </li>
                <li className="text-primary-foreground/80 text-sm">
                  منتجات قادمة...
                </li>
              </ul>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => navigate('/request-quote')}
                >
                  اطلب عرض سعر
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">معلومات التواصل</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    الأردن - المفرق
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Phone className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <div className="text-sm text-primary-foreground/80">
                    <div>+962 2 626 4582</div>
                    <div>+201147877414</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Mail className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    info@alfursanjo.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Globe className="h-4 w-4 text-primary-foreground/80 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">
                    www.alfursanjo.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} الفرسان الرباعية للإدارة والاستثمار. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-primary-foreground/80">
              <span>صنع في الأردن بفخر</span>
              <div className="w-px h-4 bg-primary-foreground/30"></div>
              <span>ISO 22000 معتمد</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;