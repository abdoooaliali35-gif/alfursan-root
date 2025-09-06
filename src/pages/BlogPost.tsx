import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  category: string;
  categoryEn: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  tags: string[];
}

const BlogPost = () => {
  const { slug } = useParams();

  // In a real application, you would fetch this data based on the slug
  const blogPosts: Record<string, BlogPost> = {
    'saudi-food-expo-2024': {
      id: '1',
      title: 'مشاركة الفرسان الرباعية في معرض الغذاء السعودي 2024',
      titleEn: 'Al Fursan Quadruple Participation in Saudi Food Expo 2024',
      content: `
        <p>شاركت شركة الفرسان الرباعية للإدارة والاستثمار في معرض الغذاء السعودي الدولي 2024 الذي أقيم في مركز الرياض الدولي للمؤتمرات والمعارض، وحققت نجاحاً باهراً في عرض منتجاتها المتميزة من الجميد التقليدي.</p>

        <p>استقطب جناح الشركة عدداً كبيراً من الزوار والمهتمين من مختلف دول العالم، حيث تم عرض مجموعة شاملة من منتجات الجميد بعلامتي "جميدنا زمان" و"جميد بدوية" التي تمثل أصالة المذاق الأردني التقليدي.</p>

        <h2>إنجازات المعرض</h2>
        <p>حققت الشركة خلال فترة المعرض عدة إنجازات مهمة:</p>
        <ul>
          <li>توقيع اتفاقيات توزيع جديدة مع موزعين في دول الخليج العربي</li>
          <li>إبرام صفقات تصدير بقيمة تزيد عن مليون دولار</li>
          <li>التعرف على فرص استثمارية جديدة في الأسواق الآسيوية</li>
          <li>تقديم منتجات جديدة لعملاء محتملين من 15 دولة مختلفة</li>
        </ul>

        <h2>ردود فعل إيجابية</h2>
        <p>أشاد زوار المعرض بجودة منتجات الفرسان الرباعية وأصالة المذاق التقليدي، كما أبدى العديد من التجار والموزعين اهتمامهم بالحصول على وكالات توزيع حصرية في بلدانهم.</p>

        <p>وقال المدير التنفيذي للشركة: "نحن فخورون بالاستجابة الإيجابية التي حصلنا عليها في المعرض، وهذا يؤكد على جودة منتجاتنا وقوة العلامة التجارية التي بنيناها على مر السنين."</p>

        <h2>خطط مستقبلية</h2>
        <p>تخطط الشركة لتوسيع نشاطها في الأسواق الجديدة التي تم التعرف عليها خلال المعرض، بالإضافة إلى تطوير منتجات جديدة تلبي احتياجات الأسواق المختلفة مع المحافظة على الجودة والأصالة التي تشتهر بها.</p>
      `,
      contentEn: '',
      category: 'exhibitions',
      categoryEn: 'Exhibitions & Events',
      author: 'فريق التسويق',
      date: '2024-01-15',
      image: '/src/assets/factory-exterior.jpg',
      slug: 'saudi-food-expo-2024',
      tags: ['معارض', 'تصدير', 'الرياض', 'نجاح']
    },
    'iso-22000-certificate': {
      id: '2',
      title: 'الحصول على شهادة الجودة الدولية ISO 22000',
      titleEn: 'Obtaining ISO 22000 International Quality Certificate',
      content: `
        <p>حصلت شركة الفرسان الرباعية للإدارة والاستثمار على شهادة الجودة الدولية ISO 22000 لإدارة سلامة الغذاء، وهو إنجاز مهم يؤكد التزام الشركة بأعلى معايير الجودة والسلامة في صناعة الأغذية.</p>

        <h2>أهمية شهادة ISO 22000</h2>
        <p>تعتبر شهادة ISO 22000 من أهم الشهادات الدولية في مجال سلامة الغذاء، وهي تضمن:</p>
        <ul>
          <li>تطبيق أنظمة إدارة سلامة الغذاء وفقاً للمعايير الدولية</li>
          <li>ضمان جودة المنتجات من المواد الخام حتى المستهلك النهائي</li>
          <li>تطبيق نظام HACCP لتحليل المخاطر ونقاط التحكم الحرجة</li>
          <li>التحسين المستمر لعمليات الإنتاج والجودة</li>
        </ul>

        <h2>عملية الحصول على الشهادة</h2>
        <p>استغرقت عملية الحصول على هذه الشهادة أكثر من عام من العمل المكثف، شملت:</p>
        <ul>
          <li>تدريب جميع العاملين على معايير سلامة الغذاء</li>
          <li>تطوير وتحديث جميع العمليات والإجراءات</li>
          <li>تحديث المعدات والأجهزة وفقاً للمعايير الدولية</li>
          <li>إجراء عمليات تدقيق داخلية شاملة</li>
          <li>التدقيق النهائي من قبل هيئة اعتماد دولية معترف بها</li>
        </ul>

        <h2>تأثير على العمليات</h2>
        <p>ساهمت عملية التأهيل للحصول على الشهادة في تحسين العديد من جوانب العمل:</p>
        <ul>
          <li>رفع مستوى الوعي بأهمية سلامة الغذاء بين جميع العاملين</li>
          <li>تطوير أنظمة المراقبة والتتبع للمواد الخام والمنتجات النهائية</li>
          <li>تحسين كفاءة العمليات وتقليل الفاقد</li>
          <li>ضمان الامتثال لجميع المتطلبات التنظيمية المحلية والدولية</li>
        </ul>

        <p>هذا الإنجاز يعزز من ثقة العملاء في منتجات الفرسان الرباعية ويفتح آفاقاً جديدة للتوسع في الأسواق الدولية التي تتطلب هذه المعايير العالية من الجودة والسلامة.</p>
      `,
      contentEn: '',
      category: 'company-news',
      categoryEn: 'Company News',
      author: 'إدارة الجودة',
      date: '2024-01-10',
      image: '/src/assets/production-line.jpg',
      slug: 'iso-22000-certificate',
      tags: ['جودة', 'شهادات', 'ISO', 'سلامة غذائية']
    },
    'jameed-health-benefits': {
      id: '3',
      title: 'فوائد الجميد الغذائية والصحية المذهلة',
      titleEn: 'The Amazing Nutritional and Health Benefits of Jameed',
      content: `
        <p>يعتبر الجميد من أهم المنتجات الغذائية التقليدية في المنطقة العربية، وخاصة في بلاد الشام، حيث يتمتع بقيمة غذائية عالية وفوائد صحية متعددة تجعله غذاءً مثالياً للجميع.</p>

        <h2>القيمة الغذائية للجميد</h2>
        <p>يحتوي الجميد على مجموعة متنوعة من العناصر الغذائية المهمة:</p>
        <ul>
          <li><strong>البروتين:</strong> يحتوي على نسبة عالية من البروتين عالي الجودة (حوالي 35-40%)</li>
          <li><strong>الكالسيوم:</strong> مصدر ممتاز للكالسيوم المهم لصحة العظام والأسنان</li>
          <li><strong>فيتامين B12:</strong> ضروري لصحة الجهاز العصبي وتكوين خلايا الدم الحمراء</li>
          <li><strong>الفوسفور:</strong> مهم لصحة العظام والأسنان ووظائف الخلايا</li>
          <li><strong>المغنيسيوم:</strong> يدعم وظائف العضلات والأعصاب</li>
        </ul>

        <h2>الفوائد الصحية</h2>
        <h3>1. تقوية العظام والأسنان</h3>
        <p>بفضل محتواه العالي من الكالسيوم والفوسفور، يساعد الجميد في:</p>
        <ul>
          <li>الوقاية من هشاشة العظام</li>
          <li>تقوية الأسنان ومنع تسوسها</li>
          <li>دعم نمو العظام عند الأطفال</li>
        </ul>

        <h3>2. دعم الجهاز المناعي</h3>
        <p>يحتوي الجميد على بروبيوتيك طبيعي ومضادات أكسدة تساعد في:</p>
        <ul>
          <li>تقوية جهاز المناعة</li>
          <li>مقاومة الالتهابات</li>
          <li>تحسين صحة الجهاز الهضمي</li>
        </ul>

        <h3>3. بناء العضلات</h3>
        <p>البروتين عالي الجودة في الجميد يساعد في:</p>
        <ul>
          <li>بناء وإصلاح الأنسجة العضلية</li>
          <li>دعم الرياضيين وكمال الأجسام</li>
          <li>المحافظة على الكتلة العضلية مع التقدم في السن</li>
        </ul>

        <h2>كيفية الاستفادة من الجميد</h2>
        <p>يمكن تناول الجميد بطرق مختلفة:</p>
        <ul>
          <li><strong>المنسف:</strong> الطبق التقليدي الأشهر</li>
          <li><strong>الشوربة:</strong> إضافته للشوربات والمرق</li>
          <li><strong>السلطات:</strong> مبشور كتوابل للسلطات</li>
          <li><strong>الصلصات:</strong> كأساس للصلصات المختلفة</li>
        </ul>

        <h2>نصائح للاستهلاك</h2>
        <p>للحصول على أقصى فائدة من الجميد:</p>
        <ul>
          <li>اختر الجميد المصنع من الحليب الطبيعي 100%</li>
          <li>احرص على التنويع في طرق التحضير</li>
          <li>تناوله كجزء من نظام غذائي متوازن</li>
          <li>احفظه في مكان بارد وجاف</li>
        </ul>

        <p>الجميد ليس مجرد طعام تقليدي، بل هو كنز غذائي يجمع بين المذاق الأصيل والفوائد الصحية المتعددة، مما يجعله خياراً ممتازاً للعائلات التي تسعى لنظام غذائي صحي ومتوازن.</p>
      `,
      contentEn: '',
      category: 'jameed-insights',
      categoryEn: 'Jameed Insights',
      author: 'أخصائي التغذية',
      date: '2024-01-05',
      image: '/src/assets/jameedna-zaman-package.jpg',
      slug: 'jameed-health-benefits',
      tags: ['صحة', 'تغذية', 'فوائد', 'جميد']
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container-section">
            <div className="text-center py-16">
              <h1 className="text-3xl font-bold mb-4">المقال غير موجود</h1>
              <p className="text-muted-foreground mb-8">عذراً، لم يتم العثور على المقال المطلوب</p>
              <Link to="/blog">
                <Button>العودة للمقالات</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = Object.values(blogPosts)
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        <article>
          {/* Hero Image */}
          <div className="relative h-96 bg-gradient-hero">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary-dark/70" />
            <img 
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container-section">
                <div className="max-w-4xl mx-auto text-white">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">
                    {post.category === 'exhibitions' ? 'معارض ومشاركات' :
                     post.category === 'company-news' ? 'أخبار الشركة' :
                     post.category === 'jameed-insights' ? 'مقالات عن الجميد' :
                     post.category === 'market-export' ? 'السوق والتصدير' : post.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    {post.title}
                  </h1>
                  <div className="flex items-center text-white/90 space-x-6 rtl:space-x-reverse">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-5 w-5 ml-2 rtl:ml-0 rtl:mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container-section py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="lg:w-3/4">
                  <div className="prose prose-lg max-w-none text-right" dir="rtl">
                    <div 
                      dangerouslySetInnerHTML={{ __html: post.content }}
                      className="article-content space-y-6"
                    />
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-semibold mb-4">العلامات:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-semibold mb-4">شارك المقال:</h3>
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')}
                      >
                        <Facebook className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2" />
                        فيسبوك
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank')}
                      >
                        <Twitter className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2" />
                        تويتر
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')}
                      >
                        <Linkedin className="h-4 w-4 ml-2 rtl:ml-0 rtl:mr-2" />
                        لينكد إن
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:w-1/4">
                  <div className="sticky top-8 space-y-6">
                    {/* Related Articles */}
                    {relatedPosts.length > 0 && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-semibold mb-4">مقالات ذات صلة</h3>
                          <div className="space-y-4">
                            {relatedPosts.map((relatedPost) => (
                              <Link 
                                key={relatedPost.id}
                                to={`/blog/${relatedPost.slug}`}
                                className="block group"
                              >
                                <div className="flex space-x-3 rtl:space-x-reverse">
                                  <img 
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    className="w-16 h-16 object-cover rounded-lg"
                                  />
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors duration-200 line-clamp-2">
                                      {relatedPost.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {new Date(relatedPost.date).toLocaleDateString('ar-SA')}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Back to Blog */}
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-primary mb-3">المزيد من المقالات</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          تصفح المزيد من مقالاتنا وأخبارنا
                        </p>
                        <Link to="/blog">
                          <Button variant="outline" className="w-full">
                            جميع المقالات
                            <ArrowRight className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;