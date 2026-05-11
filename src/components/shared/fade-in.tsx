"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  as?: keyof JSX.IntrinsicElements;
}

export default function FadeIn({ children, className, delay = 0, as: Tag = "div" }: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error dynamic tag
    <Tag
      ref={ref}
      className={cn("fade-in", delay > 0 && `fade-in-delay-${delay}`, className)}
    >
      {children}
    </Tag>
  );
}
