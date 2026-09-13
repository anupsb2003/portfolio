import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  size: string;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from(
      { length: 45 },
      (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 5}s`,
        size: `${2 + Math.random() * 4}px`,
      })
    );

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle: Particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
