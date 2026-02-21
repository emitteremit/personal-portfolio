import React from 'react';

// Generate stable particle list once (not on every render)
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${(i * 4.7 + 3) % 100}%`,
    top: `${(i * 7.3 + 8) % 100}%`,
    size: `${2 + (i % 3)}px`,
    opacity: 0.25 + (i % 5) * 0.08,
    color: i % 3 === 0
        ? 'rgba(45,212,191,0.70)'
        : i % 3 === 1
            ? 'rgba(139,92,246,0.60)'
            : 'rgba(59,130,246,0.55)',
}));

const Background = () => (
    <div
        aria-hidden="true"
        style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
        }}
    >
        {/* ── Ambient Orbs ─────────────────────────────── */}
        <div
            className="orb orb-teal orb-float"
            style={{
                width: '650px',
                height: '650px',
                top: '-12%',
                right: '-6%',
                opacity: 0.75,
                animationDelay: '0s',
                animationDuration: '28s'
            }}
        />
        <div
            className="orb orb-purple orb-float"
            style={{
                width: '550px',
                height: '550px',
                bottom: '-8%',
                left: '-9%',
                opacity: 0.65,
                animationDelay: '-5s',
                animationDuration: '32s'
            }}
        />
        <div
            className="orb orb-blue orb-float"
            style={{
                width: '400px',
                height: '400px',
                top: '38%',
                left: '42%',
                opacity: 0.45,
                animationDelay: '-12s',
                animationDuration: '24s'
            }}
        />

        {/* ── Floating Particles ───────────────────────── */}
        {PARTICLES.map((p, i) => (
            <span
                key={p.id}
                className="particle"
                style={{
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    opacity: p.opacity,
                    background: p.color,
                    animationDelay: `${-(i * 0.7)}s`,
                    animationDuration: `${12 + (i % 7)}s`
                }}
            />
        ))}
    </div>
);

export default Background;
