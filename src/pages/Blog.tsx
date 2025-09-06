import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, ArrowRight, Search, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  category: string;
  categoryEn: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');

  const categories = [
    { id: 'all', name: 'جميع المقالات', nameEn: 'All Articles' },
    { id: 'company-news', name: 'أخبار الشركة', nameEn: 'Company News' },
    { id: 'exhibitions', name: 'معارض ومشاركات', nameEn: 'Exhibitions & Events' },
    { id: 'jameed-insights', name: 'مقالات عن الجميد', nameEn: 'Jameed Insights' },
    { id: 'market-export', name: 'السوق والتصدير', nameEn: 'Market & Export' }
  ];

  const articles: Article[] = [
    {
      id: '1',
      title: 'مشاركة الفرسان الرباعية في معرض الغذاء السعودي 2024',
      titleEn: 'Al Fursan Quadruple Participation in Saudi Food Expo 2024',
      excerpt: 'شاركت شركة الفرسان الرباعية في معرض الغذاء السعودي الدولي بالرياض، حيث استطعنا عرض أحدث منتجاتنا من الجميد التقليدي أمام أكثر من 500 زائر متخصص في قطاع الأغذية من مختلف دول الخليج العربي والشرق الأوسط',
      excerptEn: 'Al Fursan Quadruple participated in the Saudi International Food Expo in Riyadh, showcasing our latest traditional Jameed products to over 500 specialized visitors from various Gulf and Middle Eastern countries',
      category: 'exhibitions',
      categoryEn: 'Exhibitions & Events',
      author: 'فريق التسويق',
      date: '2024-01-15',
      image: '/food-export.jpg',
      slug: 'saudi-food-expo-2024'
    },
    {
      id: '2',
      title: 'الحصول على شهادة الجودة الدولية ISO 22000',
      titleEn: 'Obtaining ISO 22000 International Quality Certificate',
      excerpt: 'بعد عملية تدقيق شاملة استمرت لأشهر، حصلت شركة الفرسان الرباعية رسمياً على شهادة الجودة الدولية ISO 22000 لإدارة سلامة الغذاء من هيئة المواصفات الأردنية، مما يضعنا في مقدمة الشركات الأردنية المعتمدة دولياً في هذا المجال',
      excerptEn: 'After a comprehensive audit process lasting months, Al Fursan Quadruple officially obtained the ISO 22000 international quality certificate for food safety management from the Jordan Standards Institution',
      category: 'company-news',
      categoryEn: 'Company News',
      author: 'إدارة الجودة',
      date: '2024-01-10',
      image: '/iso-certificate.jpg',
      slug: 'iso-22000-certificate'
    },
    {
      id: '3',
      title: 'الجميد الأردني: كنز غذائي يحمل تاريخ البدو',
      titleEn: 'Jordanian Jameed: A Nutritional Treasure Carrying Bedouin History',
      excerpt: 'يمثل الجميد الأردني التقليدي أكثر من مجرد منتج غذائي، فهو يحمل في طياته تاريخاً عريقاً يمتد لمئات السنين من التراث البدوي الأصيل. يتم إنتاجه من حليب الماعز والغنم الطازج عبر عملية تخمير طبيعية تستغرق أسابيع',
      excerptEn: 'Traditional Jordanian Jameed represents more than just a food product; it carries a rich history spanning hundreds of years of authentic Bedouin heritage, produced from fresh goat and sheep milk through natural fermentation',
      category: 'jameed-insights',
      categoryEn: 'Jameed Insights',
      author: 'د. محمد الرفاعي - خبير التراث الغذائي',
      date: '2024-01-05',
      image: '/jameed-traditional.jpg',
      slug: 'jameed-bedouin-heritage'
    },
    {
      id: '4',
      title: 'توسع الفرسان الرباعية في الأسواق الآسيوية',
      titleEn: 'Al Fursan Quadruple Expansion in Asian Markets',
      excerpt: 'في خطوة استراتيجية مهمة، وقعت شركة الفرسان الرباعية اتفاقيات توزيع حصرية مع ثلاث شركات رائدة في ماليزيا وإندونيسيا وتايلاند، مما يفتح أبواب السوق الآسيوية أمام منتجاتنا من الجميد الأردني التقليدي للمرة الأولى',
      excerptEn: 'In an important strategic move, Al Fursan Quadruple signed exclusive distribution agreements with three leading companies in Malaysia, Indonesia, and Thailand, opening Asian markets to our traditional Jordanian Jameed products',
      category: 'market-export',
      categoryEn: 'Market & Export',
      author: 'قسم التصدير',
      date: '2023-12-28',
      image: '/food-export.jpg',
      slug: 'asian-market-expansion'
    },
    {
      id: '5',
      title: 'تقنيات التصنيع الحديثة تلتقي مع التراث الأصيل',
      titleEn: 'Modern Manufacturing Meets Authentic Heritage',
      excerpt: 'تمكنت شركة الفرسان الرباعية من تطوير خط إنتاج متطور يجمع بين أحدث التقنيات الأوروبية في التصنيع الغذائي والطرق التقليدية العريقة لصناعة الجميد، مما يضمن الحفاظ على النكهة الأصيلة مع تحقيق أعلى معايير الجودة والسلامة',
      excerptEn: 'Al Fursan Quadruple developed an advanced production line combining the latest European food manufacturing technologies with traditional jameed-making methods, ensuring authentic flavor while meeting highest quality standards',
      category: 'jameed-insights',
      categoryEn: 'Jameed Insights',
      author: 'المهندس أحمد السعدي - مدير الإنتاج',
      date: '2023-12-20',
      image: '/cheese-factory.jpg',
      slug: 'modern-manufacturing-heritage'
    },
    {
      id: '6',
      title: 'حملة "جميدنا تراث" تصل إلى المدارس الأردنية',
      titleEn: '"Our Jameed Heritage" Campaign Reaches Jordanian Schools',
      excerpt: 'في إطار المسؤولية المجتمعية، أطلقت الفرسان الرباعية برنامجاً تعليمياً يستهدف طلاب المدارس لتعريفهم بتراث صناعة الجميد الأردني وأهميته الثقافية والاقتصادية، حيث وصل البرنامج لأكثر من 50 مدرسة في محافظات المملكة',
      excerptEn: 'As part of social responsibility, Al Fursan Quadruple launched an educational program targeting school students to introduce them to Jordanian Jameed heritage and its cultural and economic importance, reaching over 50 schools nationwide',
      category: 'company-news',
      categoryEn: 'Company News',
      author: 'قسم العلاقات العامة',
      date: '2023-12-15',
      image: '/jameed-traditional.jpg',
      slug: 'jameed-heritage-schools'
    },
    {
      id: '7',
      title: 'الفوائد الصحية المذهلة للجميد الأردني',
      titleEn: 'Amazing Health Benefits of Jordanian Jameed',
      excerpt: 'أكدت دراسة حديثة أجرتها الجامعة الأردنية بالتعاون مع خبراء التغذية أن الجميد الأردني يحتوي على مستويات عالية من البروتين (أكثر من 35%) والكالسيوم والفيتامينات، مما يجعله غذاءً مثالياً لتقوية العظام والجهاز المناعي',
      excerptEn: 'A recent study by the University of Jordan in collaboration with nutrition experts confirmed that Jordanian Jameed contains high levels of protein (over 35%), calcium, and vitamins, making it ideal for bone strength and immune system',
      category: 'jameed-insights',
      categoryEn: 'Jameed Insights',
      author: 'د. سارة الأحمد - أخصائية التغذية',
      date: '2023-12-01',
      image: '/jameed-traditional.jpg',
      slug: 'jameed-health-benefits'
    },
    {
      id: '8',
      title: 'افتتاح مصنع الفرسان الرباعية الجديد في الزرقاء',
      titleEn: 'Opening of Al Fursan Quadruple New Factory in Zarqa',
      excerpt: 'تم افتتاح المصنع الجديد لشركة الفرسان الرباعية في منطقة الزرقاء الصناعية بحضور وزير الصناعة والتجارة، ويعد هذا المصنع الأحدث في الشرق الأوسط لإنتاج الجميد بطاقة إنتاجية تصل إلى 500 طن شهرياً',
      excerptEn: 'The new Al Fursan Quadruple factory was inaugurated in Zarqa Industrial Zone with the presence of the Minister of Industry and Trade, being the most modern Jameed production facility in the Middle East with 500 tons monthly capacity',
      category: 'company-news',
      categoryEn: 'Company News',
      author: 'إدارة المشاريع',
      date: '2023-11-20',
      image: '/cheese-factory.jpg',
      slug: 'new-factory-zarqa'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSignup = () => {
    if (email) {
      // In a real application, you would send this to your backend
      console.log('Newsletter signup:', email);
      setEmail('');
      // You could show a toast notification here
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-hero">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
          <div className="absolute inset-0 bg-[url('/src/assets/factory-exterior.jpg')] bg-cover bg-center opacity-20" />
          
          <div className="relative container-section">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                أخبارنا ومقالاتنا
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                تابع آخر أخبار الفرسان الرباعية واكتشف المزيد عن عالم الجميد التقليدي
              </p>
              <p className="text-lg opacity-80">
                Our News & Articles
              </p>
            </div>
          </div>
        </section>

        <div className="container-section py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <div className="space-y-6">
                {/* Search */}
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">البحث</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="ابحث في المقالات..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardHeader>
                    <h3 className="font-semibold">التصنيفات</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-right px-3 py-2 rounded-lg transition-colors duration-200 ${
                            selectedCategory === category.id
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-muted'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <h3 className="font-semibold text-primary">اشترك في النشرة البريدية</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      احصل على آخر الأخبار والمقالات مباشرة في بريدك الإلكتروني
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="بريدك الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button 
                        onClick={handleNewsletterSignup}
                        className="w-full"
                        size="sm"
                      >
                        <Mail className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2" />
                        اشتراك
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-card transition-shadow duration-300 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        className="absolute top-4 right-4 bg-primary/90 text-primary-foreground"
                      >
                        {categories.find(cat => cat.id === article.category)?.name}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4 rtl:space-x-reverse">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 ml-1 rtl:ml-0 rtl:mr-1" />
                          <span>{new Date(article.date).toLocaleDateString('ar-SA')}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 ml-1 rtl:ml-0 rtl:mr-1" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <Link to={`/blog/${article.slug}`}>
                        <Button variant="outline" className="group/btn">
                          اقرأ المزيد
                          <ArrowRight className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform duration-200" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    لم يتم العثور على مقالات تطابق البحث
                  </p>
                </div>
              )}

              {/* Load More Button (for future pagination) */}
              {filteredArticles.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    عرض المزيد من المقالات
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;