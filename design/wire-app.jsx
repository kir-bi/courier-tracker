// App screen wireframes — Manager dashboard, Courier app, Customer tracking
// 3 variants each. All in iOS device frames (mostly), dark theme.

const D = {
  bg: '#0f1923', card: '#1c2a38', border: '#2a3848',
  textHi: '#f3f4f6', textMd: '#cbd0d6', textLo: '#7e8794',
  accent: '#ff6b1a', accentSoft: 'rgba(255,107,26,0.18)',
  surface2: '#243345',
};

// ─────────────────────────────────────────────────────────────
// MANAGER DASHBOARD — 3 variants
// ─────────────────────────────────────────────────────────────

// A) Map-first with bottom sheet (default brief spec)
function ManagerA() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: D.bg, color: D.textHi, fontFamily: 'system-ui' }}>
      <MapBackdrop>
        <MapPin x={20} y={30} status="active" label="Алишер" />
        <MapPin x={50} y={20} status="active" label="Тимур" />
        <MapPin x={70} y={45} status="waiting" label="Нурбек" />
        <MapPin x={35} y={55} status="delayed" label="Дамир" />
      </MapBackdrop>
      {/* Top bar */}
      <div style={{ position: 'absolute', top: 50, left: 12, right: 12, display: 'flex', gap: 8, zIndex: 5 }}>
        <div style={{ flex: 1, height: 38, background: 'rgba(28,42,56,0.9)', backdropFilter: 'blur(8px)', borderRadius: 8, border: `1px solid ${D.border}`, padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: D.textMd }}>
          <span style={{ color: D.textLo }}>⌕</span>Все курьеры (4)
        </div>
        <div style={{ width: 38, height: 38, background: 'rgba(28,42,56,0.9)', borderRadius: 8, border: `1px solid ${D.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>≡</div>
      </div>
      {/* Filter chips */}
      <div style={{ position: 'absolute', top: 100, left: 12, right: 12, display: 'flex', gap: 6, overflow: 'hidden', zIndex: 5 }}>
        {[{ l: 'Все · 4', a: true }, { l: 'В пути · 2' }, { l: 'Ждут · 1' }, { l: 'Задержка · 1' }].map(c => (
          <div key={c.l} style={{ padding: '5px 10px', borderRadius: 99, fontSize: 11, fontWeight: 600, background: c.a ? D.accent : 'rgba(28,42,56,0.9)', color: c.a ? '#fff' : D.textMd, border: c.a ? 'none' : `1px solid ${D.border}` }}>{c.l}</div>
        ))}
      </div>
      {/* Mini-card popup on tapped pin */}
      <div style={{ position: 'absolute', top: 170, left: 80, width: 180, background: D.card, borderRadius: 10, padding: 10, border: `1px solid ${D.border}`, boxShadow: '0 6px 20px rgba(0,0,0,0.3)', zIndex: 6 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <div style={{ fontSize: 12, fontWeight: 700 }}>Тимур К.</div>
          <WireChip status="active">в пути</WireChip>
        </div>
        <div style={{ fontSize: 10, color: D.textLo, marginBottom: 6 }}>Заказ #4821 · ул. Абая 150</div>
        <div style={{ fontSize: 11, color: D.accent, fontWeight: 700 }}>ETA 8 мин</div>
      </div>
      {/* Bottom sheet (peeked) */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: D.card, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '12px 16px 30px', zIndex: 7, borderTop: `1px solid ${D.border}` }}>
        <div style={{ width: 40, height: 4, background: D.border, borderRadius: 99, margin: '0 auto 10px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Активные заказы · 4</div>
          <span style={{ fontSize: 11, color: D.textLo }}>Сортировать ↓</span>
        </div>
        {[
          { o: '#4821', a: 'ул. Абая 150, кв. 32', c: 'Тимур К.', e: '8 мин', s: 'active' },
          { o: '#4822', a: 'мкр. Самал-2, д. 18', c: 'Алишер Б.', e: '14 мин', s: 'active' },
          { o: '#4820', a: 'пр. Достык 91', c: 'Дамир А.', e: '+5 мин', s: 'delayed' },
        ].map(r => (
          <div key={r.o} style={{ padding: '10px 0', borderBottom: `1px solid ${D.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>{r.o} · {r.a}</div>
              <div style={{ fontSize: 10, color: D.textLo }}>{r.c}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <WireChip status={r.s}>{r.e}</WireChip>
            </div>
          </div>
        ))}
      </div>
      <Annotation pos="right" top={150} offset={20} width={140}>
        тап на пин → мини-карточка курьера
      </Annotation>
      <Annotation pos="right" top={400} offset={20} width={140}>
        выезжающая снизу панель со списком
      </Annotation>
    </div>
  );
}

// B) Split list-left / map-right (tablet-leaning)
function ManagerB() {
  return (
    <div style={{ width: '100%', height: '100%', background: D.bg, color: D.textHi, fontFamily: 'system-ui', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      {/* Header */}
      <div style={{ padding: '8px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${D.border}` }}>
        <div>
          <div style={{ fontSize: 11, color: D.textLo }}>Воскресенье, 9 мая</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Доставки</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: D.card, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>⌕</div>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: D.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>+</div>
        </div>
      </div>
      {/* Stats */}
      <div style={{ padding: '10px 14px', display: 'flex', gap: 8 }}>
        <WireStat dark label="В пути" value="4" hint="средн. 12 мин" />
        <WireStat dark label="Готово" value="18" />
        <WireStat dark label="Задержка" value="1" accent />
      </div>
      {/* Map block */}
      <div style={{ margin: '8px 14px', height: 180, borderRadius: 10, overflow: 'hidden', position: 'relative', border: `1px solid ${D.border}` }}>
        <MapBackdrop>
          <MapPin x={20} y={40} status="active" label="К1" />
          <MapPin x={55} y={25} status="waiting" label="К2" />
          <MapPin x={75} y={60} status="delayed" label="К3" />
          <MapPin x={40} y={70} status="active" label="К4" />
        </MapBackdrop>
        <div style={{ position: 'absolute', top: 8, right: 8, padding: '4px 8px', background: 'rgba(15,25,35,0.9)', borderRadius: 6, fontSize: 10, color: D.textMd }}>4 активны</div>
      </div>
      {/* Filter row */}
      <div style={{ padding: '8px 14px', display: 'flex', gap: 6, overflow: 'hidden' }}>
        {[{ l: 'Все', a: true }, { l: 'Алишер' }, { l: 'Тимур' }, { l: 'Дамир' }, { l: 'Нурбек' }].map(c => (
          <div key={c.l} style={{ padding: '4px 10px', borderRadius: 99, fontSize: 11, background: c.a ? D.accent : D.card, color: c.a ? '#fff' : D.textMd, border: `1px solid ${c.a ? D.accent : D.border}` }}>{c.l}</div>
        ))}
      </div>
      {/* List */}
      <div style={{ flex: 1, overflow: 'auto', padding: '4px 14px 80px' }}>
        {[
          { o: '#4821', a: 'ул. Абая 150', c: 'Тимур К.', e: '8 мин', s: 'active' },
          { o: '#4822', a: 'мкр. Самал-2, 18', c: 'Алишер Б.', e: '14 мин', s: 'active' },
          { o: '#4820', a: 'пр. Достык 91', c: 'Дамир А.', e: '+5 мин', s: 'delayed' },
          { o: '#4823', a: 'ул. Сатпаева 22', c: 'Нурбек М.', e: 'ждёт', s: 'waiting' },
        ].map(r => (
          <div key={r.o} style={{ padding: 12, background: D.card, borderRadius: 10, marginBottom: 8, border: `1px solid ${D.border}`, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{r.o}</div>
              <div style={{ fontSize: 11, color: D.textMd, marginBottom: 2 }}>{r.a}</div>
              <div style={{ fontSize: 10, color: D.textLo }}>{r.c}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <WireChip status={r.s}>{r.s === 'active' ? 'в пути' : r.s === 'delayed' ? 'задержка' : 'ждёт'}</WireChip>
              <div style={{ fontSize: 14, fontWeight: 700, color: r.s === 'delayed' ? '#dc2626' : D.accent }}>{r.e}</div>
            </div>
          </div>
        ))}
      </div>
      <Annotation pos="left" top={120} offset={20} width={130}>
        карта компактная сверху, список под ней
      </Annotation>
    </div>
  );
}

// C) Tablet-style with sidebar nav (landscape iPad simulation in vertical frame)
function ManagerC() {
  return (
    <div style={{ width: '100%', height: '100%', background: D.bg, color: D.textHi, fontFamily: 'system-ui', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      {/* Inner: card-stacked, no map header */}
      <div style={{ padding: '12px 14px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 800 }}>Дашборд</div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: D.surface2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>М</div>
      </div>
      {/* Quick stats grid 2x2 */}
      <div style={{ padding: '8px 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <WireStat dark label="Активны" value="4" />
        <WireStat dark label="Сегодня" value="22" />
        <WireStat dark label="Ср. ETA" value="12 м" accent />
        <WireStat dark label="Задержки" value="1" />
      </div>
      {/* Курьеры (горизонт. лента) */}
      <div style={{ padding: '12px 14px 8px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: D.textLo, marginBottom: 8 }}>Курьеры онлайн</div>
        <div style={{ display: 'flex', gap: 8, overflow: 'hidden' }}>
          {['Алишер', 'Тимур', 'Дамир', 'Нурбек'].map((n, i) => (
            <div key={n} style={{ minWidth: 84, padding: 8, background: D.card, borderRadius: 10, border: `1px solid ${D.border}`, textAlign: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: i === 2 ? '#dc2626' : i === 3 ? '#3b82f6' : D.accent, margin: '0 auto 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>{n[0]}</div>
              <div style={{ fontSize: 10, fontWeight: 600 }}>{n}</div>
              <div style={{ fontSize: 9, color: D.textLo, marginTop: 2 }}>{i === 3 ? 'ждёт' : i === 2 ? 'задержка' : 'в пути'}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Map preview button */}
      <div style={{ padding: '4px 14px 8px' }}>
        <div style={{ height: 110, borderRadius: 10, overflow: 'hidden', position: 'relative', border: `1px solid ${D.border}` }}>
          <MapBackdrop>
            <MapPin x={25} y={40} status="active" />
            <MapPin x={55} y={30} status="active" />
            <MapPin x={70} y={60} status="delayed" />
            <MapPin x={40} y={70} status="waiting" />
          </MapBackdrop>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,25,35,0.9), transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 10, right: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700 }}>Открыть карту</div>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: D.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff' }}>→</div>
          </div>
        </div>
      </div>
      {/* List of orders */}
      <div style={{ padding: '8px 14px', flex: 1, overflow: 'auto' }}>
        <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: D.textLo, marginBottom: 8 }}>Последние заказы</div>
        {[
          { o: '#4821', a: 'ул. Абая 150', e: '8 мин', s: 'active' },
          { o: '#4820', a: 'пр. Достык 91', e: '+5', s: 'delayed' },
          { o: '#4823', a: 'ул. Сатпаева 22', e: '—', s: 'waiting' },
        ].map(r => (
          <div key={r.o} style={{ padding: '10px 0', borderBottom: `1px solid ${D.border}`, display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{r.o}</div>
              <div style={{ fontSize: 10, color: D.textLo }}>{r.a}</div>
            </div>
            <WireChip status={r.s}>{r.e}</WireChip>
          </div>
        ))}
      </div>
      {/* Bottom tabs */}
      <div style={{ padding: '8px 14px 28px', display: 'flex', gap: 4, borderTop: `1px solid ${D.border}`, background: D.bg }}>
        {[{ l: 'Главная', a: true }, { l: 'Карта' }, { l: 'Заказы' }, { l: 'Курьеры' }, { l: 'Меню' }].map(t => (
          <div key={t.l} style={{ flex: 1, padding: '6px 0', textAlign: 'center', fontSize: 9, color: t.a ? D.accent : D.textLo, fontWeight: t.a ? 700 : 500 }}>
            <div style={{ width: 6, height: 6, borderRadius: 99, background: t.a ? D.accent : D.border, margin: '0 auto 4px' }} />
            {t.l}
          </div>
        ))}
      </div>
      <Annotation pos="right" top={100} offset={20} width={140}>
        КПИ-плитки + лента курьеров + превью карты
      </Annotation>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// COURIER APP — 3 variants
// ─────────────────────────────────────────────────────────────

// A) Big "start shift" button (idle state)
function CourierA() {
  return (
    <div style={{ width: '100%', height: '100%', background: D.bg, color: D.textHi, fontFamily: 'system-ui', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: D.textLo }}>Привет,</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Тимур</div>
        </div>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: D.surface2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>≡</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24, gap: 28 }}>
        <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,107,26,0.08)', border: `2px dashed rgba(255,107,26,0.3)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 130, height: 130, borderRadius: '50%', background: D.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 30px rgba(255,107,26,0.4)' }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1 }}>▶</div>
              <div style={{ fontSize: 12, fontWeight: 700, marginTop: 6 }}>НАЧАТЬ<br/>СМЕНУ</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 14, color: D.textMd, marginBottom: 4 }}>Сегодня, воскресенье</div>
          <div style={{ fontSize: 24, fontWeight: 800 }}>6 заказов на смену</div>
          <div style={{ fontSize: 12, color: D.textLo, marginTop: 4 }}>с 11:00 до 16:00</div>
        </div>
        <div style={{ width: '100%', padding: 12, background: D.card, borderRadius: 10, border: `1px solid ${D.border}`, display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: D.accentSoft, color: D.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>📍</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Первая точка</div>
            <div style={{ fontSize: 11, color: D.textLo }}>ул. Абая 150 · 11:15</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 16px 28px', textAlign: 'center', fontSize: 11, color: D.textLo }}>Нажми, чтобы включить геолокацию</div>
      <Annotation pos="right" top={250} offset={20} width={140}>
        огромная кнопка-цель — нельзя промахнуться за рулём
      </Annotation>
    </div>
  );
}

// B) Active shift — list of route stops
function CourierB() {
  return (
    <div style={{ width: '100%', height: '100%', background: D.bg, color: D.textHi, fontFamily: 'system-ui', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      {/* Status bar — shift active */}
      <div style={{ padding: '10px 16px', background: D.accent, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fff' }} />
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Смена активна · 1ч 23м</div>
        </div>
        <div style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>Завершить</div>
      </div>
      {/* Current order pinned */}
      <div style={{ padding: 16, background: D.card, borderBottom: `1px solid ${D.border}` }}>
        <div style={{ fontSize: 10, color: D.textLo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Сейчас</div>
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>ул. Абая 150, кв. 32</div>
        <div style={{ fontSize: 13, color: D.textMd, marginBottom: 12 }}>Айгуль К. · +7 707 ...</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, height: 40, background: D.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: '#fff' }}>Я приехал</div>
          <div style={{ width: 40, height: 40, background: D.surface2, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>📞</div>
          <div style={{ width: 40, height: 40, background: D.surface2, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🗺</div>
        </div>
      </div>
      {/* Upcoming list */}
      <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
        <div style={{ fontSize: 10, color: D.textLo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Дальше · 4 точки</div>
        {[
          { n: 2, a: 'мкр. Самал-2, д. 18', c: 'Дамир Е.', t: '12:30' },
          { n: 3, a: 'пр. Достык 91, оф. 4', c: 'Виктория П.', t: '13:00' },
          { n: 4, a: 'ул. Сатпаева 22', c: 'Ермек Б.', t: '13:45' },
          { n: 5, a: 'ул. Толе би 188', c: 'Сауле М.', t: '14:20' },
        ].map(s => (
          <div key={s.n} style={{ padding: '12px 0', borderBottom: `1px solid ${D.border}`, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: D.surface2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12 }}>{s.n}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{s.a}</div>
              <div style={{ fontSize: 11, color: D.textLo }}>{s.c}</div>
            </div>
            <div style={{ fontSize: 11, color: D.textMd, fontWeight: 600 }}>{s.t}</div>
          </div>
        ))}
      </div>
      <Annotation pos="right" top={130} offset={20} width={140}>
        активный заказ — закреплён сверху, большие кнопки
      </Annotation>
    </div>
  );
}

// C) Map-with-route style courier nav
function CourierC() {
  return (
    <div style={{ width: '100%', height: '100%', background: D.bg, position: 'relative', fontFamily: 'system-ui', color: D.textHi }}>
      <MapBackdrop>
        <MapPin x={50} y={70} status="active" label="вы" />
        <MapPin x={70} y={30} status="waiting" label="цель" />
      </MapBackdrop>
      {/* Route line */}
      <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <path d="M 50% 70% Q 60% 50%, 70% 30%" stroke={D.accent} strokeWidth="3" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
      </svg>
      <div style={{ height: 50 }} />
      {/* Top status pill */}
      <div style={{ position: 'absolute', top: 56, left: 12, right: 12, padding: 12, background: 'rgba(28,42,56,0.95)', borderRadius: 12, border: `1px solid ${D.border}`, backdropFilter: 'blur(8px)', zIndex: 5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
          <div style={{ fontSize: 10, color: D.textLo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Заказ 2 из 6</div>
          <WireChip status="active">в пути</WireChip>
        </div>
        <div style={{ fontSize: 16, fontWeight: 800 }}>ул. Абая 150, кв. 32</div>
      </div>
      {/* ETA card center */}
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', background: D.accent, padding: '12px 18px', borderRadius: 12, color: '#fff', textAlign: 'center', boxShadow: '0 6px 20px rgba(255,107,26,0.4)', zIndex: 5 }}>
        <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.9, letterSpacing: 1 }}>ETA</div>
        <div style={{ fontSize: 22, fontWeight: 800 }}>8 мин</div>
        <div style={{ fontSize: 10, opacity: 0.9 }}>3.2 км</div>
      </div>
      {/* Bottom action sheet */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: D.card, borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '14px 16px 32px', borderTop: `1px solid ${D.border}`, zIndex: 6 }}>
        <div style={{ width: 40, height: 4, background: D.border, borderRadius: 99, margin: '0 auto 12px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 12, color: D.textLo }}>Айгуль К.</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Заказ #4821</div>
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: D.accent }}>3 200₽</div>
        </div>
        <div style={{ height: 44, background: D.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff' }}>Я приехал на адрес</div>
      </div>
      <Annotation pos="left" top={200} offset={20} width={140}>
        ETA крупно по центру карты — читается сходу
      </Annotation>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// CUSTOMER LIVE TRACKING — 3 variants
// ─────────────────────────────────────────────────────────────

// A) Map-first with ETA prominent (default brief)
function CustomerA() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fafaf7', position: 'relative', fontFamily: 'system-ui' }}>
      <div style={{ height: 50 }} />
      {/* Header — restaurant brand */}
      <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${WIRE.ruleSoft}`, background: '#fff' }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: WIRE.fill, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: WIRE.inkDim, border: `1px dashed ${WIRE.rule}` }}>лого</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Pizzaman</div>
          <div style={{ fontSize: 10, color: WIRE.inkDim }}>Заказ #4821</div>
        </div>
      </div>
      {/* Status banner */}
      <div style={{ padding: '20px 16px', textAlign: 'center', background: '#fff' }}>
        <div style={{ fontSize: 11, color: WIRE.inkDim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Курьер уже в пути</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: WIRE.accent, lineHeight: 1 }}>12 минут</div>
        <div style={{ fontSize: 12, color: WIRE.inkDim, marginTop: 4 }}>прибудет к 12:42</div>
      </div>
      {/* Map */}
      <div style={{ height: 280, position: 'relative', overflow: 'hidden', borderTop: `1px solid ${WIRE.ruleSoft}`, borderBottom: `1px solid ${WIRE.ruleSoft}` }}>
        <MapBackdrop dark={false}>
          <MapPin x={30} y={70} status="active" label="курьер" />
          <MapPin x={70} y={25} status="waiting" label="вы" />
        </MapBackdrop>
        <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <path d="M 30% 70% Q 50% 40%, 70% 25%" stroke={WIRE.accent} strokeWidth="2.5" fill="none" strokeDasharray="6 4" strokeLinecap="round" />
        </svg>
      </div>
      {/* Driver info */}
      <div style={{ padding: 16, background: '#fff' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: 12, background: WIRE.fillSoft, borderRadius: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: WIRE.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>Т</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Тимур · ваш курьер</div>
            <div style={{ fontSize: 11, color: WIRE.inkDim }}>★ 4.9 · скутер</div>
          </div>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: WIRE.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📞</div>
        </div>
      </div>
      <Annotation pos="right" top={130} offset={20} width={130}>
        ETA крупно сверху, карта по центру
      </Annotation>
    </div>
  );
}

// B) Stepper / order timeline
function CustomerB() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fafaf7', fontFamily: 'system-ui', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, background: '#fff', borderBottom: `1px solid ${WIRE.ruleSoft}` }}>
        <div style={{ width: 28, height: 28, borderRadius: 6, background: WIRE.fill, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: WIRE.inkDim, border: `1px dashed ${WIRE.rule}` }}>лого</div>
        <div style={{ flex: 1, fontSize: 12, fontWeight: 700 }}>Pizzaman · Заказ #4821</div>
      </div>
      {/* Compact map */}
      <div style={{ height: 160, position: 'relative', overflow: 'hidden' }}>
        <MapBackdrop dark={false}>
          <MapPin x={30} y={60} status="active" label="курьер" />
          <MapPin x={70} y={30} status="waiting" label="вы" />
        </MapBackdrop>
        <div style={{ position: 'absolute', top: 12, right: 12, padding: '6px 10px', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: 9, color: WIRE.inkDim }}>прибудет через</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: WIRE.accent }}>12 мин</div>
        </div>
      </div>
      {/* Steps */}
      <div style={{ flex: 1, padding: '20px 16px', background: '#fff' }}>
        <div style={{ fontSize: 11, color: WIRE.inkDim, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>Статус заказа</div>
        {[
          { t: 'Заказ принят', s: '12:18', done: true },
          { t: 'Готовится', s: '12:24', done: true },
          { t: 'Курьер забрал', s: '12:30', done: true },
          { t: 'В пути', s: 'сейчас', active: true },
          { t: 'Доставлен', s: '~ 12:42' },
        ].map((step, i, arr) => (
          <div key={step.t} style={{ display: 'flex', gap: 12, position: 'relative', paddingBottom: i < arr.length - 1 ? 14 : 0 }}>
            {i < arr.length - 1 && (
              <div style={{ position: 'absolute', left: 11, top: 22, bottom: 0, width: 2, background: step.done ? WIRE.accent : WIRE.rule }} />
            )}
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: step.done ? WIRE.accent : (step.active ? '#fff' : WIRE.fill),
              border: step.active ? `2px solid ${WIRE.accent}` : 'none',
              color: step.done ? '#fff' : WIRE.inkDim,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700, flexShrink: 0, zIndex: 1,
              boxShadow: step.active ? `0 0 0 4px rgba(255,107,26,0.15)` : 'none',
            }}>{step.done ? '✓' : ''}</div>
            <div style={{ flex: 1, paddingTop: 1 }}>
              <div style={{ fontSize: 13, fontWeight: step.active ? 700 : 600, color: step.active ? WIRE.accent : WIRE.ink }}>{step.t}</div>
              <div style={{ fontSize: 11, color: WIRE.inkDim }}>{step.s}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '12px 16px 24px', background: '#fff', borderTop: `1px solid ${WIRE.ruleSoft}` }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, height: 40, background: '#fff', borderRadius: 8, border: `1px solid ${WIRE.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 12 }}>Позвонить курьеру</div>
          <div style={{ width: 40, height: 40, borderRadius: 8, border: `1px solid ${WIRE.rule}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↗</div>
        </div>
      </div>
      <Annotation pos="left" top={250} offset={20} width={130}>
        timeline — для клиентов кому важен прогресс
      </Annotation>
    </div>
  );
}

// C) Single-screen card minimal
function CustomerC() {
  return (
    <div style={{ width: '100%', height: '100%', background: WIRE.navy, fontFamily: 'system-ui', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 50 }} />
      {/* Restaurant brand top */}
      <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'rgba(255,255,255,0.5)', border: `1px dashed rgba(255,255,255,0.2)` }}>лого</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Pizzaman</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>#4821</div>
        </div>
      </div>
      {/* Big illustration / map */}
      <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
        <div style={{ width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,107,26,0.1)', border: '2px dashed rgba(255,107,26,0.3)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 20, borderRadius: '50%', background: '#0a1218', overflow: 'hidden' }}>
            <MapBackdrop>
              <MapPin x={35} y={60} status="active" />
              <MapPin x={70} y={35} status="waiting" />
            </MapBackdrop>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Ваш заказ</div>
          <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 18 }}>уже в пути</div>
          <div style={{ fontSize: 56, fontWeight: 900, color: WIRE.accent, lineHeight: 1, letterSpacing: -2 }}>12</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>минут до доставки</div>
        </div>
      </div>
      {/* Bottom courier card */}
      <div style={{ padding: 16 }}>
        <div style={{ padding: 12, background: 'rgba(255,255,255,0.05)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: WIRE.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13 }}>Т</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>Тимур · курьер</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>★ 4.9</div>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: WIRE.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>📞</div>
        </div>
      </div>
      <div style={{ height: 30 }} />
      <Annotation pos="right" top={250} offset={20} width={130}>
        минимализм: одна большая цифра — всё
      </Annotation>
    </div>
  );
}

Object.assign(window, {
  ManagerA, ManagerB, ManagerC,
  CourierA, CourierB, CourierC,
  CustomerA, CustomerB, CustomerC,
});
