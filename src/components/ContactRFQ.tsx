import { useState } from "react";
import { Phone, Mail, MapPin, Send, Building, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ContactRFQ = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "الهاتف",
      value: "+962 2 626 4582",
      value2: "+201147877414",
      color: "text-primary"
    },
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: "info@alfursanjo.com",
      color: "text-jameed-red"
    },
    {
      icon: MapPin,
      label: "العنوان",
      value: "الأردن - المفرق",
      color: "text-badawya-gold"
    }
  ];

  const products = [
    { value: 'jameedna-zaman', label: 'جميدنا زمان' },
    { value: 'jameed-badawya', label: 'جميد بدوية' },
    { value: 'mixed-order', label: 'طلبية مختلطة' },
    { value: 'other', label: 'منتج آخر' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.product) {
      toast({
        title: "خطأ في النموذج",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "تم إرسال طلبكم بنجاح",
      description: "سنتواصل معكم خلال 24 ساعة لتقديم عرض السعر",
    });

    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-muted/30" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">تواصل معنا</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            اطلب عرض سعر أو استفسر عن منتجاتنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فريقنا المتخصص جاهز لتقديم أفضل الأسعار والخدمات لشركتكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-6 w-6 text-primary ml-2 rtl:ml-0 rtl:mr-2" />
                  معلومات التواصل
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className={`w-12 h-12 ${info.color.replace('text-', 'bg-')}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                      {info.value2 && (
                        <p className="text-muted-foreground">{info.value2}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="hover:shadow-card transition-all duration-300">
              <CardHeader>
                <CardTitle>أوقات العمل</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">الأحد - الخميس</span>
                    <span className="text-muted-foreground">8:00 ص - 5:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">الجمعة</span>
                    <span className="text-muted-foreground">مغلق</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">السبت</span>
                    <span className="text-muted-foreground">9:00 ص - 2:00 م</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Website Info */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">زوروا موقعنا الإلكتروني</h4>
                <p className="text-primary-foreground/90 mb-4">
                  www.alfursanjo.com
                </p>
                <p className="text-sm text-primary-foreground/80">
                  لمزيد من المعلومات حول منتجاتنا وخدماتنا
                </p>
              </CardContent>
            </Card>
          </div>

          {/* RFQ Form */}
          <Card className="hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-6 w-6 text-primary ml-2 rtl:ml-0 rtl:mr-2" />
                نموذج طلب عرض سعر (RFQ)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">اسم الشركة *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder="اسم شركتكم"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">اسم المسؤول *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                      placeholder="اسم الشخص المسؤول"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="company@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+962 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product">المنتج المطلوب *</Label>
                    <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المنتج" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.value} value={product.value}>
                            {product.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">الكمية المطلوبة</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange('quantity', e.target.value)}
                      placeholder="مثال: 1000 كرتونة"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">تفاصيل إضافية</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="أي متطلبات خاصة أو استفسارات إضافية..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-elegant text-lg py-3"
                >
                  <Send className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                  إرسال طلب العرض
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * الحقول المطلوبة | سنتواصل معكم خلال 24 ساعة
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactRFQ;