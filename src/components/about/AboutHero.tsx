import { Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                    bg-[length:30px_30px] animate-shimmer" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="text-sm font-semibold">من نحن</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
            الفرسان الرباعية
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
            أكثر من 20 عامًا من الخبرة في صناعة الجميد الأردني الأصيل
            <br />
            <span className="font-semibold">رائدون في الجودة • ملتزمون بالأصالة</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;