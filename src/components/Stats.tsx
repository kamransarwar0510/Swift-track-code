import { useEffect, useState, useRef } from "react";
import { Building2, Users, Globe, Package } from "lucide-react";

const stats = [
  { icon: Building2, value: 150, label: "Offices worldwide", suffix: "+" },
  { icon: Users, value: 2500, label: "Hardworking Staff", suffix: "+" },
  { icon: Globe, value: 120, label: "Countries covered", suffix: "+" },
  { icon: Package, value: 50000, label: "Shipments", suffix: "+" },
];

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({ icon: Icon, value, label, suffix, startCounting }: {
  icon: typeof Building2;
  value: number;
  label: string;
  suffix: string;
  startCounting: boolean;
}) => {
  const count = useCountUp(value, 2000, startCounting);

  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-muted">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} startCounting={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
