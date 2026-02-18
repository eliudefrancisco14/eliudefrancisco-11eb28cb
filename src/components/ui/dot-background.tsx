import React from "react";
import { cn } from "@/lib/utils";

export function DotBackground({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full bg-background bg-dot-foreground/[0.15] dark:bg-dot-foreground/[0.10]",
        className
      )}
    >
      {/* Radial gradient mask que faz os pontos desaparecerem nas bordas */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
