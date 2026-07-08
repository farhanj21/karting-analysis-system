"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Signature, firstSignature, secondSignature } from "@/components/ui/Signature";

export function SignatureInView() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref} className="inline-flex items-center gap-2 text-xs text-zinc-500">
      <span>Made By</span>
      <a
        href="https://github.com/farhanj21/karting-frontend"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 transition-colors duration-150 hover:text-accent-soft"
      >
        <Signature isInView={inView} data={secondSignature} />
        <span>&amp;</span>
        <Signature isInView={inView} data={firstSignature} />
      </a>
    </div>
  );
}
