import { useEffect, useRef, useState, useCallback } from "react";

interface UseSectionSpyOptions {
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  offset?: number;
}

export const useSectionSpy = ({
  sectionRefs,
  scrollContainerRef,
  offset = 24,
}: UseSectionSpyOptions) => {
  const [activeSegment, setActiveSegment] = useState(0);
  const lockActiveUntilRef = useRef(0);

  const handleManualChange = useCallback((index: number) => {
    lockActiveUntilRef.current = Date.now() + 600;
    setActiveSegment(index);

    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [sectionRefs]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let ticking = false;

    const updateActiveSection = () => {
      if (Date.now() < lockActiveUntilRef.current) {
        ticking = false;
        return;
      }

      const sections = sectionRefs.current;
      const tabsElement = scrollContainer.querySelector<HTMLElement>(
        '[data-product-tabs="true"]',
      );
      const tabsHeight = tabsElement?.offsetHeight ?? 0;
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const offsetTop = containerTop + tabsHeight + offset;

      let nextActive = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < sections.length; i += 1) {
        const el = sections[i];
        if (!el) continue;

        const { top } = el.getBoundingClientRect();
        const distance = Math.abs(top - offsetTop);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextActive = i;
        }
      }

      setActiveSegment((prev) => (prev === nextActive ? prev : nextActive));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    updateActiveSection();

    return () => {
      scrollContainer.removeEventListener("scroll", onScroll);
    };
  }, [scrollContainerRef, sectionRefs, offset]);

  return { activeSegment, setActiveSegment, handleManualChange };
};
