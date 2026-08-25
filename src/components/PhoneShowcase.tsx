import { useEffect, useRef, useState, type ReactNode } from "react";

export function PhoneShowcase({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Mouse proximity tilt state
  const targetRef = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const currentRef = useRef({ rotateX: 0, rotateY: 0, scale: 1 });
  const rafRef = useRef<number | null>(null);
  const [transform, setTransform] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.max(rect.width, rect.height) * 0.8;
      const influence = Math.max(0, 1 - distance / maxDistance);

      // Max tilt angles
      const maxTilt = 18;
      const targetRotateY = (dx / (rect.width / 2)) * maxTilt * influence;
      const targetRotateX = -(dy / (rect.height / 2)) * maxTilt * influence;
      const targetScale = 1 + 0.04 * influence;

      targetRef.current = {
        rotateX: targetRotateX,
        rotateY: targetRotateY,
        scale: targetScale,
      };
    };

    const handleMouseLeave = () => {
      targetRef.current = { rotateX: 0, rotateY: 0, scale: 1 };
    };

    const animate = () => {
      const lerp = 0.12;
      currentRef.current.rotateX +=
        (targetRef.current.rotateX - currentRef.current.rotateX) * lerp;
      currentRef.current.rotateY +=
        (targetRef.current.rotateY - currentRef.current.rotateY) * lerp;
      currentRef.current.scale +=
        (targetRef.current.scale - currentRef.current.scale) * lerp;

      setTransform(
        `perspective(1200px) rotateX(${currentRef.current.rotateX.toFixed(2)}deg) rotateY(${currentRef.current.rotateY.toFixed(2)}deg) scale(${currentRef.current.scale.toFixed(3)})`,
      );

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`phone-showcase ${visible ? "is-visible" : ""} ${className}`}
    >
      <div className="phone-float">
        <div
          className="phone-tilt"
          style={{ transform, transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
