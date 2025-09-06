import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    document.title = "اتصل بنا - الفرسان الرباعية | Contact Us";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "تم الإرسال بنجاح",
      description: "سنتواصل معكم في أقرب وقت ممكن",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "العنوان",
      info: "المفرق، الأردن",
      details: "منطقة المدينة الصناعية"
    },
    {
      icon: Phone,
      title: "الهاتف",
      info: "+962 2 626 4582",
      details: "متاح من 8 صباحاً - 6 مساءً"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      info: "info@alfursanjo.com",
      details: "نرد خلال 24 ساعة"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      info: "الأحد - الخميس",
      details: "8:00 ص - 6:00 م"
    }
  ];

  const downloadCompanyProfile = () => {
    toast({
      title: "تحميل الملف الشخصي",
      description: "يتم تحضير ملف الشركة للتحميل...",
    });
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-hero text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6 bg-primary-foreground/10 text-primary-foreground">
              تواصل معنا
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              نحن هنا لخدمتكم
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              لأي استفسار أو طلب عرض سعر، لا تترددوا في التواصل معنا. فريقنا جاهز لمساعدتكم
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={downloadCompanyProfile}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg"
              >
                <Download className="ml-2 h-5 w-5" />
                تحميل ملف الشركة
              </Button>
              <Button 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact-form');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                إرسال رسالة
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                معلومات التواصل
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                تواصلوا معنا عبر أي من الوسائل التالية
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.title}
                  className="text-center hover:shadow-glow transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-2">{item.info}</p>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="contact-form">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">إرسال رسالة</CardTitle>
                    <p className="text-muted-foreground">
                      املأ النموذج وسنتواصل معكم في أقرب وقت
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">الاسم الكامل *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="اكتب اسمك الكامل"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">البريد الإلكتروني *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="example@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">رقم الهاتف</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+962 7X XXX XXXX"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">اسم الشركة</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="اسم شركتك"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">الموضوع</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="موضوع الرسالة"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">الرسالة *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="اكتب رسالتك هنا..."
                          className="min-h-32"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-primary hover:scale-105 transition-transform duration-300"
                      >
                        <Send className="ml-2 h-4 w-4" />
                        إرسال الرسالة
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>موقعنا</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          خريطة الموقع ستظهر هنا
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          المفرق، المنطقة الصناعية، الأردن
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Services */}
                <Card>
                  <CardHeader>
                    <CardTitle>خدمات إضافية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Badge variant="outline">استشارات مجانية</Badge>
                      <span className="text-sm text-muted-foreground">للطلبات الكبيرة</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Badge variant="outline">عينات مجانية</Badge>
                      <span className="text-sm text-muted-foreground">لتجربة المنتج</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <Badge variant="outline">دعم فني</Badge>
                      <span className="text-sm text-muted-foreground">على مدار الساعة</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;