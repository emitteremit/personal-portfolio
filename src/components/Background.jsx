import React, { useEffect, useRef } from "react";

/* =========================================================
   BACKGROUND
   Lightweight • 2 Orbs • Mouse Repulsion • No Canvas
========================================================= */

const Background = () => {
  const orbRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      orbRefs.current.forEach((orb) => {
        if (!orb) return;

        const rect = orb.getBoundingClientRect();

        const orbX = rect.left + rect.width / 2;
        const orbY = rect.top + rect.height / 2;

        const dx = orbX - mouseX;
        const dy = orbY - mouseY;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        const radius = 260;

        if (distance < radius) {
          const safeDistance = Math.max(distance, 1);

          const force =
            Math.pow(
              1 - distance / radius,
              2
            );

          const moveX =
            (dx / safeDistance) *
            35 *
            force;

          const moveY =
            (dy / safeDistance) *
            35 *
            force;

          orb.style.setProperty(
            "--mouse-x",
            `${moveX}px`
          );

          orb.style.setProperty(
            "--mouse-y",
            `${moveY}px`
          );
        } else {
          orb.style.setProperty(
            "--mouse-x",
            "0px"
          );

          orb.style.setProperty(
            "--mouse-y",
            "0px"
          );
        }
      });
    };

    let ticking = false;

    const onMouseMove = (event) => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        handleMouseMove(event);
        ticking = false;
      });
    };

    window.addEventListener(
      "mousemove",
      onMouseMove,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        onMouseMove
      );
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{
        zIndex: 0,
      }}
    >
      {/* =====================================================
          LIGHTWEIGHT AMBIENT ORBS
      ====================================================== */}

      {/* Desktop / Top Right */}
      <div
        ref={(el) => {
          orbRefs.current[0] = el;
        }}
        className="premium-orb premium-orb-blue"
        style={{
          width: "380px",
          height: "380px",
          top: "-15%",
          right: "-10%",
          opacity: 0.20,
          animationDelay: "0s",
          animationDuration: "50s",
        }}
      />

      {/* Desktop / Bottom Left */}
      <div
        ref={(el) => {
          orbRefs.current[1] = el;
        }}
        className="premium-orb premium-orb-cyan"
        style={{
          width: "320px",
          height: "320px",
          bottom: "-13%",
          left: "-9%",
          opacity: 0.16,
          animationDelay: "-12s",
          animationDuration: "56s",
        }}
      />

      {/* =====================================================
          VERY SUBTLE GRID
      ====================================================== */}

      <div className="premium-grid" />

      {/* =====================================================
          EDGE VIGNETTE
      ====================================================== */}

      <div className="premium-vignette" />
    </div>
  );
};

export default Background;