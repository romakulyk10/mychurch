"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}

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

    let rafId: number;

    observe(el, () => {
      // Promote GPU layer one frame before animation starts
      el.style.willChange = "opacity, transform";
      rafId = requestAnimationFrame(() => {
        // Clear the inline opacity guard — CSS animation takes over from here
        el.style.opacity = "";
        el.classList.add("is-visible");
        el.addEventListener("animationend", () => {
          el.style.willChange = "auto";
        }, { once: true });
      });
    });

    return () => {
      unobserve(el);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // opacity:0 inline = guaranteed invisible on first paint, even before CSS loads
    <div
      ref={ref}
      style={{ opacity: 0 }}
      className={cn("fade-in", delay > 0 && `fade-in-delay-${delay}`, className)}
    >
      {children}
    </div>
  );
}
