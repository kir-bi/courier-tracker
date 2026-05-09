// Wireframe primitives — shared across landing + app screens.
// Mid-fidelity: clean structural boxes + readable labels + dashed image
// placeholders + handwritten annotations. Gray base, orange + navy accents.

const WIRE = {
  paper: '#fafaf7',
  paperDark: '#181c22',
  ink: '#1f2937',
  inkDim: '#6b7280',
  inkFaint: '#9ca3af',
  rule: '#cbd0d6',
  ruleSoft: '#e3e6ea',
  fill: '#ecedf0',
  fillSoft: '#f3f4f6',
  fillDark: '#222933',
  fillDarker: '#0f141b',
  ruleDark: '#2a313c',
  accent: '#ff6b1a',
  accentSoft: '#ffe2cf',
  navy: '#0d1b2a',
  notePaper: '#fff6c2',
  noteInk: '#5a4a1f',
};

// Stripe-pattern image placeholder. Caption explains what should go here.
function WireImg({ label = 'image', height = 120, dark = false, ratio, style = {} }) {
  const stroke = dark ? '#3a4250' : WIRE.rule;
  const bg = dark ? '#1c222b' : '#f1f3f6';
  const txt = dark ? '#7e8794' : WIRE.inkDim;
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      ...(ratio ? { aspectRatio: ratio } : { height }),
      background: bg,
      border: `1px dashed ${stroke}`,
      borderRadius: 6,
      overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
        <defs>
          <pattern id={`stripes-${dark ? 'd' : 'l'}-${label.replace(/\W/g, '')}`} patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke={stroke} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripes-${dark ? 'd' : 'l'}-${label.replace(/\W/g, '')})`} />
      </svg>
      <span style={{
        position: 'relative', zIndex: 1,
        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 10.5, color: txt, letterSpacing: 0.3,
        background: bg, padding: '2px 6px', borderRadius: 3,
      }}>{label}</span>
    </div>
  );
}

// Filled solid block — for grayscale UI areas (header, sidebar, etc).
function WireBlock({ label, children, height, dark = false, accent = false, navy = false, style = {} }) {
  let bg = dark ? WIRE.fillDark : WIRE.fill;
  let color = dark ? '#9ba4b1' : WIRE.inkDim;
  let border = dark ? WIRE.ruleDark : WIRE.ruleSoft;
  if (accent) { bg = WIRE.accent; color = '#fff'; border = WIRE.accent; }
  if (navy) { bg = WIRE.navy; color = '#fff'; border = WIRE.navy; }
  return (
    <div style={{
      width: '100%', height,
      background: bg, border: `1px solid ${border}`,
      borderRadius: 6,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 11, fontWeight: 500, color,
      letterSpacing: 0.2,
      ...style,
    }}>
      {children ?? label}
    </div>
  );
}

// Text line (skeleton bar) — for paragraph copy.
function WireText({ w = '100%', h = 8, dark = false, style = {} }) {
  return (
    <div style={{
      width: w, height: h,
      background: dark ? WIRE.ruleDark : WIRE.ruleSoft,
      borderRadius: 99,
      ...style,
    }} />
  );
}

// Multi-line paragraph
function WireLines({ lines = 3, dark = false, gap = 8, lastShort = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <WireText key={i} w={lastShort && i === lines - 1 ? '60%' : '100%'} dark={dark} />
      ))}
    </div>
  );
}

function WireHeading({ children, size = 22, dark = false, color, style = {} }) {
  return (
    <div style={{
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: size, fontWeight: 700, lineHeight: 1.15,
      color: color ?? (dark ? '#f3f4f6' : WIRE.ink),
      letterSpacing: -0.2,
      ...style,
    }}>{children}</div>
  );
}

function WireLabel({ children, dark = false, style = {} }) {
  return (
    <div style={{
      fontFamily: '"Inter", system-ui, sans-serif',
      fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1,
      color: dark ? '#7e8794' : WIRE.inkDim,
      ...style,
    }}>{children}</div>
  );
}

function WireBtn({ children = 'Button', primary = false, dark = false, size = 'md', style = {} }) {
  const heights = { sm: 28, md: 36, lg: 44 };
  const fontSize = { sm: 11, md: 12.5, lg: 14 };
  const bg = primary ? WIRE.accent : (dark ? '#2a313c' : '#fff');
  const color = primary ? '#fff' : (dark ? '#e5e7eb' : WIRE.ink);
  const border = primary ? WIRE.accent : (dark ? '#3a4250' : WIRE.rule);
  return (
    <div style={{
      height: heights[size], padding: '0 14px',
      background: bg, color, border: `1px solid ${border}`,
      borderRadius: 6, fontWeight: 600, fontSize: fontSize[size],
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      whiteSpace: 'nowrap',
      ...style,
    }}>{children}</div>
  );
}

// Handwritten annotation note with leader line.
// `pos` controls where the note hangs relative to its parent. Parent must be position:relative.
function Annotation({ children, pos = 'right', offset = 16, top = 0, left = 0, hidden = false, width = 140, leader = true }) {
  if (hidden) return null;
  const isRight = pos === 'right';
  const isLeft = pos === 'left';
  const isTop = pos === 'top';
  const isBottom = pos === 'bottom';
  const noteStyle = {
    position: 'absolute',
    fontFamily: '"Caveat", "Comic Sans MS", cursive',
    fontSize: 15, lineHeight: 1.15, color: WIRE.noteInk,
    background: WIRE.notePaper,
    padding: '4px 10px',
    borderRadius: 4,
    border: '1px solid #efe2a2',
    boxShadow: '1px 2px 0 rgba(60,50,20,0.08)',
    width, maxWidth: width,
    transform: 'rotate(-1deg)',
    zIndex: 30,
    pointerEvents: 'none',
  };
  if (isRight) Object.assign(noteStyle, { left: `calc(100% + ${offset}px)`, top });
  if (isLeft) Object.assign(noteStyle, { right: `calc(100% + ${offset}px)`, top });
  if (isTop) Object.assign(noteStyle, { bottom: `calc(100% + ${offset}px)`, left });
  if (isBottom) Object.assign(noteStyle, { top: `calc(100% + ${offset}px)`, left });
  return (
    <>
      <div data-annotation="" style={noteStyle}>{children}</div>
      {leader && (
        <div data-annotation="" className="annotation-leader" style={{
          position: 'absolute',
          background: '#c9b76a',
          height: 1,
          zIndex: 29,
          pointerEvents: 'none',
          ...(isRight ? { left: '100%', top: top + 12, width: offset } : {}),
          ...(isLeft ? { right: '100%', top: top + 12, width: offset } : {}),
          ...(isTop ? { left: left + 16, bottom: '100%', height: offset, width: 1 } : {}),
          ...(isBottom ? { left: left + 16, top: '100%', height: offset, width: 1 } : {}),
        }} />
      )}
    </>
  );
}

// Pin marker on a map.
function MapPin({ x, y, color = WIRE.accent, label, status = 'active' }) {
  const colors = {
    active: WIRE.accent,
    waiting: '#3b82f6',
    delayed: '#dc2626',
  };
  const c = colors[status] || color;
  return (
    <div style={{
      position: 'absolute', left: `${x}%`, top: `${y}%`,
      transform: 'translate(-50%, -100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      <div style={{
        width: 22, height: 22, borderRadius: '50% 50% 50% 0',
        background: c, transform: 'rotate(-45deg)',
        border: '2px solid #fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff', transform: 'rotate(45deg)' }} />
      </div>
      {label && (
        <div style={{
          marginTop: 2, fontSize: 9, fontWeight: 700, color: '#fff',
          background: 'rgba(0,0,0,0.7)', padding: '1px 5px', borderRadius: 3,
          fontFamily: 'system-ui',
        }}>{label}</div>
      )}
    </div>
  );
}

// Schematic map background (for app screens). Shows roads + blocks.
function MapBackdrop({ dark = true, children }) {
  const bg = dark ? '#0a1218' : '#e8ecef';
  const road = dark ? '#1c2630' : '#fff';
  const block = dark ? '#0f1822' : '#dde2e7';
  const water = dark ? '#0d1f2e' : '#cfdbe5';
  return (
    <div style={{
      position: 'absolute', inset: 0, background: bg, overflow: 'hidden',
    }}>
      {/* Water blob */}
      <div style={{
        position: 'absolute', right: -60, bottom: -40, width: 240, height: 200,
        background: water, borderRadius: '60% 40% 50% 70%',
      }} />
      {/* Blocks */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(to right, ${road} 0, ${road} 2px, transparent 2px, transparent 60px),
          linear-gradient(to bottom, ${road} 0, ${road} 2px, transparent 2px, transparent 80px)
        `,
        backgroundSize: '60px 80px',
        opacity: 0.7,
      }} />
      {/* Diagonal main road */}
      <div style={{
        position: 'absolute', top: '40%', left: '-10%', width: '130%', height: 4,
        background: road, transform: 'rotate(-12deg)', transformOrigin: '0 0',
      }} />
      {/* Highlighted block (destination) */}
      <div style={{
        position: 'absolute', top: '20%', left: '15%', width: 30, height: 30,
        background: block, opacity: 0.6,
      }} />
      {children}
    </div>
  );
}

// Compact stat / KPI block
function WireStat({ label, value, hint, dark = false, accent = false }) {
  return (
    <div style={{
      flex: 1, padding: '10px 12px',
      background: dark ? WIRE.fillDark : WIRE.fillSoft,
      border: `1px solid ${dark ? WIRE.ruleDark : WIRE.ruleSoft}`,
      borderRadius: 6,
    }}>
      <div style={{
        fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8,
        color: dark ? '#7e8794' : WIRE.inkDim, marginBottom: 4,
      }}>{label}</div>
      <div style={{
        fontSize: 18, fontWeight: 700,
        color: accent ? WIRE.accent : (dark ? '#f3f4f6' : WIRE.ink),
        fontFamily: 'system-ui',
      }}>{value}</div>
      {hint && (
        <div style={{ fontSize: 10, color: dark ? '#6b7280' : WIRE.inkFaint, marginTop: 2 }}>{hint}</div>
      )}
    </div>
  );
}

// Status chip
function WireChip({ children, dark = false, status }) {
  const colors = {
    active: { bg: WIRE.accentSoft, fg: '#a4421a' },
    waiting: { bg: '#dbe9fb', fg: '#1e40af' },
    delayed: { bg: '#fde0e0', fg: '#991b1b' },
    done: { bg: '#dcefe0', fg: '#15724a' },
  };
  const c = status ? colors[status] : { bg: dark ? '#2a313c' : '#eef0f3', fg: dark ? '#cbd0d6' : WIRE.inkDim };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '2px 8px', borderRadius: 99,
      background: c.bg, color: c.fg,
      fontSize: 10, fontWeight: 600, letterSpacing: 0.2,
    }}>{children}</span>
  );
}

// Sketch border modifier — sometimes we want extra-rough corners.
const sketchBorder = (color = WIRE.rule) => ({
  border: `1px solid ${color}`,
  borderRadius: 6,
});

Object.assign(window, {
  WIRE, WireImg, WireBlock, WireText, WireLines, WireHeading, WireLabel,
  WireBtn, Annotation, MapPin, MapBackdrop, WireStat, WireChip, sketchBorder,
});
