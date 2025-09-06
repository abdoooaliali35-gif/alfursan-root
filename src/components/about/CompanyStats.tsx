import { useCountUp } from "@/hooks/useCountUp";

const CompanyStats = () => {
  const stats = [
    {
      number: 25,
      suffix: '+',
      label: 'عاماً من الخبرة'
    },
    {
      number: 1000,
      suffix: '+',
      label: 'عميل راضي'
    },
    {
      number: 10,
      suffix: '+',
      label: 'دولة نصدر إليها'
    },
    {
      number: 99,
      suffix: '%',
      label: 'معدل رضا العملاء'
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            أرقامنا تتحدث
          </h2>
          <p className="text-xl text-primary-foreground/90">
            إنجازاتنا خلال رحلة النجاح
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const StatCounter = () => {
              const { displayValue, ref } = useCountUp({ 
                end: stat.number, 
                duration: 2000 + (index * 200),
                suffix: stat.suffix || ''
              });
              
              return (
                <div 
                  ref={ref}
                  className="text-center animate-fade-in-up" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-4">{displayValue}</div>
                  <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
                </div>
              );
            };
            
            return <StatCounter key={stat.label} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;