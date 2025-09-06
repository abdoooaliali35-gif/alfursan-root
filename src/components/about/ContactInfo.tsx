import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'محافظة المفرق، الأردن'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      info: '+962-2-626-4582'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'info@alfursanjo.com'
    },
    {
      icon: Globe,
      title: 'الموقع الإلكتروني',
      info: 'www.alfursanjo.com'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            معلومات التواصل
          </h2>
          <p className="text-xl text-muted-foreground">
            نحن هنا للإجابة على جميع استفساراتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((contact, index) => (
            <Card 
              key={contact.title} 
              className="text-center bg-background border border-border/20 hover:shadow-card 
                       transition-all duration-300 animate-fade-in-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;