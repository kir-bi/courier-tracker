// Light-theme variants of the selected screens. Unified palette: warm off-white
// paper, white cards, ink text, single orange accent. Matches LandingB tone.

const L = {
  bg: '#fafaf7', card: '#fff', subtle: '#f4f5f7',
  border: '#e3e6ea', borderStrong: '#cbd0d6',
  ink: '#1f2937', textMd: '#4b5563', textLo: '#6b7280', textFaint: '#9ca3af',
  accent: '#ff6b1a', accentSoft: '#fff5ee', accentBorder: '#ffd6b5',
  sidebar: '#0f1923',  // sidebar stays dark for chrome contrast — common pattern in light SaaS
  delayed: '#dc2626',
};

const LWebShell = ({ children }) => (
  <div style={{
    width: '100%', height: '100%', background: L.bg, color: L.ink,
    fontFamily: '"Inter", system-ui, sans-serif', fontSize: 13,
    display: 'flex', flexDirection: 'column', overflow: 'hidden',
  }}>{children}</div>
);

// Light sidebar (subtle gray on white) — different from dark version.
const LSidebar = ({ active = 'map' }) => (
  <div style={{ width: 200, background: L.card, borderRight: `1px solid ${L.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
    <div style={{ padding: '18px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${L.border}` }}>
      <div style={{ width: 22, height: 22, borderRadius: 5, background: L.accent }} />
      <div style={{ fontWeight: 700, fontSize: 13, color: L.ink }}>Courier Tracker</div>
    </div>
    <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
      {[
        { id: 'overview', l: 'Обзор', i: '◇' },
        { id: 'orders', l: 'Заказы', i: '◧', badge: '4' },
        { id: 'map', l: 'Карта', i: '◉' },
        { id: 'couriers', l: 'Курьеры', i: '◐' },
        { id: 'reports', l: 'Отчёты', i: '◫' },
        { id: 'settings', l: 'Настройки', i: '◌' },
      ].map(it => (
        <div key={it.id} style={{
          padding: '8px 10px', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10,
          background: it.id === active ? L.accentSoft : 'transparent',
          color: it.id === active ? L.accent : L.textMd, fontWeight: it.id === active ? 600 : 500, fontSize: 12,
        }}>
          <span style={{ width: 14, textAlign: 'center', opacity: 0.9 }}>{it.i}</span>
          <span style={{ flex: 1 }}>{it.l}</span>
          {it.badge && <span style={{ background: L.accent, color: '#fff', fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 99 }}>{it.badge}</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 'auto', padding: 12, borderTop: `1px solid ${L.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: L.subtle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11, color: L.ink }}>P</div>
      <div style={{ flex: 1, fontSize: 11 }}>
        <div style={{ fontWeight: 600, color: L.ink }}>Pizzaman</div>
        <div style={{ color: L.textLo, fontSize: 10 }}>Алматы, ул. Абая</div>
      </div>
    </div>
  </div>
);

const LTopBar = ({ title, subtitle }) => (
  <div style={{ height: 56, padding: '0 24px', borderBottom: `1px solid ${L.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: L.card, flexShrink: 0 }}>
    <div>
      <div style={{ fontSize: 10, color: L.textLo, textTransform: 'uppercase', letterSpacing: 0.8 }}>{subtitle}</div>
      <div style={{ fontSize: 16, fontWeight: 700, color: L.ink }}>{title}</div>
    </div>
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ height: 32, width: 220, padding: '0 12px', background: L.subtle, borderRadius: 6, border: `1px solid ${L.border}`, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: L.textLo }}>
        <span>⌕</span>Поиск заказа, курьера…
      </div>
      <div style={{ width: 32, height: 32, borderRadius: 6, background: L.subtle, border: `1px solid ${L.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>🔔</div>
      <div style={{ height: 32, padding: '0 14px', background: L.accent, borderRadius: 6, display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 600, fontSize: 12 }}>+ Новый заказ</div>
    </div>
  </div>
);

const LStat = ({ label, value, hint, accent }) => (
  <div style={{ flex: 1, padding: '10px 12px', background: L.card, border: `1px solid ${L.border}`, borderRadius: 6 }}>
    <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, color: L.textLo, marginBottom: 4 }}>{label}</div>
    <div style={{ fontSize: 18, fontWeight: 700, color: accent ? L.accent : L.ink }}>{value}</div>
    {hint && <div style={{ fontSize: 10, color: L.textFaint, marginTop: 2 }}>{hint}</div>}
  </div>
);

const LOrderRow = ({ o, a, c, e, s, sel }) => (
  <div style={{
    padding: '10px 14px', borderBottom: `1px solid ${L.border}`,
    background: sel ? L.accentSoft : 'transparent',
    borderLeft: sel ? `3px solid ${L.accent}` : '3px solid transparent',
    display: 'grid', gridTemplateColumns: '60px 1fr 110px 80px', gap: 8, alignItems: 'center', fontSize: 12,
  }}>
    <div style={{ fontWeight: 700, color: L.ink }}>{o}</div>
    <div>
      <div style={{ color: L.ink, fontWeight: 500 }}>{a}</div>
      <div style={{ color: L.textLo, fontSize: 10, marginTop: 2 }}>{c}</div>
    </div>
    <WireChip status={s}>{s === 'active' ? 'в пути' : s === 'delayed' ? 'задержка' : s === 'waiting' ? 'ждёт' : 'готово'}</WireChip>
    <div style={{ fontWeight: 700, color: s === 'delayed' ? L.delayed : L.accent, textAlign: 'right' }}>{e}</div>
  </div>
);

const SAMPLE = [
  { o: '#4821', a: 'ул. Абая 150, кв. 32', c: 'Тимур К. · Айгуль К.', e: '8 мин', s: 'active' },
  { o: '#4822', a: 'мкр. Самал-2, д. 18, оф. 5', c: 'Алишер Б. · Дамир Е.', e: '14 мин', s: 'active' },
  { o: '#4820', a: 'пр. Достык 91, кв. 12', c: 'Дамир А. · Виктория П.', e: '+5 мин', s: 'delayed' },
  { o: '#4823', a: 'ул. Сатпаева 22', c: 'Нурбек М. · Ермек Б.', e: 'ждёт', s: 'waiting' },
  { o: '#4819', a: 'ул. Толе би 188, кв. 4', c: 'Тимур К. · Сауле М.', e: '21 мин', s: 'active' },
  { o: '#4818', a: 'мкр. Мамыр-3, д. 7', c: 'Алишер Б. · Жанна Т.', e: '✓', s: 'done' },
  { o: '#4817', a: 'пр. Сейфуллина 506', c: 'Нурбек М. · Бауржан К.', e: '✓', s: 'done' },
];

// MANAGER WEB A — light
function ManagerWebALight() {
  return (
    <LWebShell>
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <LSidebar active="map" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <LTopBar title="Карта · 4 курьера в работе" subtitle="Live · обновлено 2 секунды назад" />
          <div style={{ padding: '12px 24px', display: 'flex', gap: 10, borderBottom: `1px solid ${L.border}`, background: L.subtle }}>
            <LStat label="В пути" value="4" hint="средн. ETA 12 мин" />
            <LStat label="Ждут забора" value="2" />
            <LStat label="Задержки" value="1" accent />
            <LStat label="Готово сегодня" value="18" />
            <LStat label="Курьеров онлайн" value="4 / 6" />
          </div>
          <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
            <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
              <MapBackdrop dark={false}>
                <MapPin x={20} y={30} status="active" label="Тимур" />
                <MapPin x={45} y={20} status="active" label="Алишер" />
                <MapPin x={70} y={45} status="waiting" label="Нурбек" />
                <MapPin x={35} y={60} status="delayed" label="Дамир" />
                <MapPin x={75} y={70} status="active" label="Тимур" />
              </MapBackdrop>
              <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6 }}>
                {[{ l: 'Все · 5', a: true }, { l: 'В пути · 3' }, { l: 'Ждут · 1' }, { l: 'Задержка · 1' }].map(c => (
                  <div key={c.l} style={{ padding: '6px 12px', borderRadius: 99, fontSize: 11, fontWeight: 600,
                    background: c.a ? L.accent : L.card, color: c.a ? '#fff' : L.textMd,
                    border: `1px solid ${c.a ? L.accent : L.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>{c.l}</div>
                ))}
              </div>
              <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['+', '−', '⌖'].map(c => (
                  <div key={c} style={{ width: 32, height: 32, background: L.card, border: `1px solid ${L.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: L.ink, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>{c}</div>
                ))}
              </div>
              <div style={{ position: 'absolute', top: 110, left: '38%', width: 220, background: L.card, borderRadius: 10, padding: 12, border: `1px solid ${L.border}`, boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: L.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 }}>А</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: L.ink }}>Алишер Б.</div>
                      <div style={{ fontSize: 10, color: L.textLo }}>+7 707 ...</div>
                    </div>
                  </div>
                  <WireChip status="active">в пути</WireChip>
                </div>
                <div style={{ fontSize: 11, color: L.textMd, marginBottom: 4 }}>Заказ #4822</div>
                <div style={{ fontSize: 12, color: L.ink, marginBottom: 8 }}>мкр. Самал-2, д. 18</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: L.accent }}>ETA 14 мин</div>
                  <div style={{ fontSize: 11, color: L.textLo }}>3.4 км</div>
                </div>
              </div>
              <Annotation pos="bottom" left={40} top={0} offset={12} width={140}>
                карта с пинами + всплывающая мини-карточка
              </Annotation>
            </div>
            <div style={{ width: 360, borderLeft: `1px solid ${L.border}`, background: L.card, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '14px 14px 10px', borderBottom: `1px solid ${L.border}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: L.ink }}>Активные заказы · 4</div>
                <div style={{ display: 'flex', gap: 4, fontSize: 10 }}>
                  {['Сегодня', 'Все', 'По адресу'].map((t, i) => (
                    <div key={t} style={{ padding: '4px 8px', borderRadius: 4, background: i === 0 ? L.subtle : 'transparent', color: i === 0 ? L.ink : L.textLo, fontWeight: 600 }}>{t}</div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, overflow: 'auto' }}>
                {SAMPLE.map((r, i) => <LOrderRow key={r.o} {...r} sel={i === 1} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LWebShell>
  );
}

// COURIER C — light, map with route
function CourierCLight() {
  return (
    <div style={{ width: '100%', height: '100%', background: L.bg, position: 'relative', fontFamily: 'system-ui', color: L.ink }}>
      <MapBackdrop dark={false}>
        <MapPin x={50} y={70} status="active" label="вы" />
        <MapPin x={70} y={30} status="waiting" label="цель" />
      </MapBackdrop>
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <path d="M 50% 70% Q 60% 50%, 70% 30%" stroke={L.accent} strokeWidth="3" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
      </svg>
      <div style={{ height: 50 }} />
      <div style={{ position: 'absolute', top: 56, left: 12, right: 12, padding: 12, background: L.card, borderRadius: 12, border: `1px solid ${L.border}`, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', zIndex: 5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <div style={{ fontSize: 10, color: L.textLo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Заказ 2 из 6</div>
          <WireChip status="active">в пути</WireChip>
        </div>
        <div style={{ fontSize: 16, fontWeight: 800, color: L.ink }}>ул. Абая 150, кв. 32</div>
      </div>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: L.accent, padding: '12px 18px', borderRadius: 12, color: '#fff', textAlign: 'center', boxShadow: '0 6px 20px rgba(255,107,26,0.4)', zIndex: 5 }}>
        <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.9, letterSpacing: 1 }}>ETA</div>
        <div style={{ fontSize: 22, fontWeight: 800 }}>8 мин</div>
        <div style={{ fontSize: 10, opacity: 0.9 }}>3.2 км</div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: L.card, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '14px 16px 32px', borderTop: `1px solid ${L.border}`, boxShadow: '0 -4px 16px rgba(0,0,0,0.05)', zIndex: 6 }}>
        <div style={{ width: 40, height: 4, background: L.borderStrong, borderRadius: 99, margin: '0 auto 12px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 12, color: L.textLo }}>Айгуль К.</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: L.ink }}>Заказ #4821</div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: L.accent }}>3 200₽</div>
        </div>
        <div style={{ height: 44, background: L.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>Я приехал на адрес</div>
      </div>
      <Annotation pos="left" top={200} offset={20} width={140}>
        ETA крупно по центру карты — читается сходу
      </Annotation>
    </div>
  );
}

// CUSTOMER C — light, minimalist single-number
function CustomerCLight() {
  return (
    <div style={{ width: '100%', height: '100%', background: L.bg, fontFamily: 'system-ui', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${L.border}`, background: L.card }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: L.subtle, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: L.textLo, border: `1px dashed ${L.borderStrong}` }}>лого</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: L.ink }}>Pizzaman</div>
          <div style={{ fontSize: 10, color: L.textLo }}>#4821</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
        <div style={{ width: 220, height: 220, borderRadius: '50%', background: L.accentSoft, border: `2px dashed ${L.accentBorder}`, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 20, borderRadius: '50%', background: '#e8ecef', overflow: 'hidden' }}>
            <MapBackdrop dark={false}>
              <MapPin x={35} y={60} status="active" />
              <MapPin x={70} y={35} status="waiting" />
            </MapBackdrop>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: L.textLo, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Ваш заказ</div>
          <div style={{ fontSize: 16, color: L.textMd, marginBottom: 18 }}>уже в пути</div>
          <div style={{ fontSize: 56, fontWeight: 900, color: L.accent, lineHeight: 1, letterSpacing: -2 }}>12</div>
          <div style={{ fontSize: 13, color: L.textLo, marginTop: 4 }}>минут до доставки</div>
        </div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ padding: 12, background: L.card, borderRadius: 12, border: `1px solid ${L.border}`, display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: L.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>Т</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: L.ink }}>Тимур · курьер</div>
            <div style={{ fontSize: 10, color: L.textLo }}>★ 4.9</div>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: L.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>📞</div>
        </div>
      </div>
      <div style={{ height: 30 }} />
      <Annotation pos="right" top={250} offset={20} width={130}>
        минимализм: одна большая цифра — всё
      </Annotation>
    </div>
  );
}

Object.assign(window, { ManagerWebALight, CourierCLight, CustomerCLight });
