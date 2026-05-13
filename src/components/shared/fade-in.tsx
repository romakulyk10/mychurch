"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

// Single shared IntersectionObserver for all FadeIn instances on the page
const callbacks = new Map<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

function observe(el: Element, onVisible: () => void) {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const cb = callbacks.get(entry.target);
            if (cb) {
              cb();
              callbacks.delete(entry.target);
              sharedObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.1 }
    );
  }
  callbacks.set(el, onVisible);
  sharedObserver.observe(el);
}

function unobserve(el: Element) {
  callbacks.delete(el);
  sharedObserver?.unobserve(el);
}

export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    observe(el, () => {
      el.classList.add("is-visible");
      // Release GPU layer once animation is done
      el.addEventListener("transitionend", () => {
        el.style.willChange = "auto";
      }, { once: true });
    });
    return () => unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("fade-in", delay > 0 && `fade-in-delay-${delay}`, className)}
    >
      {children}
    </div>
  );
}
