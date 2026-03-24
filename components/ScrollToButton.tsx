"use client";

type ScrollToButtonProps = {
  targetId: string;
  children: React.ReactNode;
  className?: string;
};

export function ScrollToButton({ targetId, children, className }: ScrollToButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      {children}
    </button>
  );
}
