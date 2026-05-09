// Manager dashboard — WEB / desktop wireframes. 3 variants.
// Sized for ~1280×800 viewport. Dark theme.

const WD = {
  bg: '#0f1923', card: '#1c2a38', border: '#2a3848',
  textHi: '#f3f4f6', textMd: '#cbd0d6', textLo: '#7e8794',
  accent: '#ff6b1a', accentSoft: 'rgba(255,107,26,0.18)',
  surface2: '#243345', sidebar: '#0a1218',
};

const WebShell = ({ children }) => (
  <div style={{
    width: '100%', height: '100%',
    background: WD.bg, color: WD.textHi,
    fontFamily: '"Inter", system-ui, sans-serif', fontSize: 13,
    display: 'flex', flexDirection: 'column', overflow: 'hidden',
  }}>{children}</div>
);

const WDSidebar = ({ active = 'orders' }) => (
  <div style={{ width: 200, background: WD.sidebar, borderRight: `1px solid ${WD.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
    <div style={{ padding: '18px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: `1px solid ${WD.border}` }}>
      <div style={{ width: 22, height: 22, borderRadius: 5, background: WD.accent }} />
      <div style={{ fontWeight: 700, fontSize: 13 }}>Courier Tracker</div>
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
          background: it.id === active ? WD.accentSoft : 'transparent',
          color: it.id === active ? WD.accent : WD.textMd, fontWeight: it.id === active ? 600 : 500, fontSize: 12,
        }}>
          <span style={{ width: 14, textAlign: 'center', opacity: 0.9 }}>{it.i}</span>
          <span style={{ flex: 1 }}>{it.l}</span>
          {it.badge && <span style={{ background: WD.accent, color: '#fff', fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 99 }}>{it.badge}</span>}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 'auto', padding: 12, borderTop: `1px solid ${WD.border}`, display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: WD.surface2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 }}>P</div>
      <div style={{ flex: 1, fontSize: 11 }}>
        <div style={{ fontWeight: 600 }}>Pizzaman</div>
        <div style={{ color: WD.textLo, fontSize: 10 }}>Алматы, ул. Абая</div>
      </div>
    </div>
  </div>
);

const WDTopBar = ({ title = 'Заказы', subtitle = 'Воскресенье, 9 мая' }) => (
  <div style={{ height: 56, padding: '0 24px', borderBottom: `1px solid ${WD.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: WD.bg, flexShrink: 0 }}>
    <div>
      <div style={{ fontSize: 10, color: WD.textLo, textTransform: 'uppercase', letterSpacing: 0.8 }}>{subtitle}</div>
      <div style={{ fontSize: 16, fontWeight: 700 }}>{title}</div>
    </div>
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <div style={{ height: 32, width: 220, padding: '0 12px', background: WD.card, borderRadius: 6, border: `1px solid ${WD.border}`, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: WD.textLo }}>
        <span>⌕</span>Поиск заказа, курьера…
      </div>
      <div style={{ width: 32, height: 32, borderRadius: 6, background: WD.card, border: `1px solid ${WD.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>🔔</div>
      <div style={{ height: 32, padding: '0 14px', background: WD.accent, borderRadius: 6, display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 600, fontSize: 12 }}>+ Новый заказ</div>
    </div>
  </div>
);

// Compact order row
const WDOrderRow = ({ o, a, c, e, s, sel }) => (
  <div style={{
    padding: '10px 14px', borderBottom: `1px solid ${WD.border}`,
    background: sel ? WD.accentSoft : 'transparent',
    borderLeft: sel ? `3px solid ${WD.accent}` : '3px solid transparent',
    display: 'grid', gridTemplateColumns: '60px 1fr 110px 80px', gap: 8, alignItems: 'center', fontSize: 12,
  }}>
    <div style={{ fontWeight: 700 }}>{o}</div>
    <div>
      <div style={{ color: WD.textHi, fontWeight: 500 }}>{a}</div>
      <div style={{ color: WD.textLo, fontSize: 10, marginTop: 2 }}>{c}</div>
    </div>
    <WireChip status={s}>{s === 'active' ? 'в пути' : s === 'delayed' ? 'задержка' : s === 'waiting' ? 'ждёт' : 'готово'}</WireChip>
    <div style={{ fontWeight: 700, color: s === 'delayed' ? '#dc2626' : WD.accent, textAlign: 'right' }}>{e}</div>
  </div>
);

const SAMPLE_ORDERS = [
  { o: '#4821', a: 'ул. Абая 150, кв. 32', c: 'Тимур К. · Айгуль К.', e: '8 мин', s: 'active' },
  { o: '#4822', a: 'мкр. Самал-2, д. 18, оф. 5', c: 'Алишер Б. · Дамир Е.', e: '14 мин', s: 'active' },
  { o: '#4820', a: 'пр. Достык 91, кв. 12', c: 'Дамир А. · Виктория П.', e: '+5 мин', s: 'delayed' },
  { o: '#4823', a: 'ул. Сатпаева 22', c: 'Нурбек М. · Ермек Б.', e: 'ждёт', s: 'waiting' },
  { o: '#4819', a: 'ул. Толе би 188, кв. 4', c: 'Тимур К. · Сауле М.', e: '21 мин', s: 'active' },
  { o: '#4818', a: 'мкр. Мамыр-3, д. 7', c: 'Алишер Б. · Жанна Т.', e: '✓', s: 'done' },
  { o: '#4817', a: 'пр. Сейфуллина 506', c: 'Нурбек М. · Бауржан К.', e: '✓', s: 'done' },
];

// ─────────────────────────────────────────────────────────────
// MANAGER WEB A — Sidebar + map left + order list right
// ─────────────────────────────────────────────────────────────
function ManagerWebA() {
  return (
    <WebShell>
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <WDSidebar active="map" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <WDTopBar title="Карта · 4 курьера в работе" subtitle="Live · обновлено 2 секунды назад" />
          {/* KPI strip */}
          <div style={{ padding: '12px 24px', display: 'flex', gap: 10, borderBottom: `1px solid ${WD.border}` }}>
            <WireStat dark label="В пути" value="4" hint="средн. ETA 12 мин" />
            <WireStat dark label="Ждут забора" value="2" />
            <WireStat dark label="Задержки" value="1" accent />
            <WireStat dark label="Готово сегодня" value="18" />
            <WireStat dark label="Курьеров онлайн" value="4 / 6" />
          </div>
          {/* Main: map + right panel */}
          <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
            <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
              <MapBackdrop>
                <MapPin x={20} y={30} status="active" label="Тимур" />
                <MapPin x={45} y={20} status="active" label="Алишер" />
                <MapPin x={70} y={45} status="waiting" label="Нурбек" />
                <MapPin x={35} y={60} status="delayed" label="Дамир" />
                <MapPin x={75} y={70} status="active" label="Тимур" />
              </MapBackdrop>
              {/* Filter chips floating */}
              <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6 }}>
                {[{ l: 'Все · 5', a: true }, { l: 'В пути · 3' }, { l: 'Ждут · 1' }, { l: 'Задержка · 1' }].map(c => (
                  <div key={c.l} style={{ padding: '6px 12px', borderRadius: 99, fontSize: 11, fontWeight: 600,
                    background: c.a ? WD.accent : 'rgba(28,42,56,0.95)', color: c.a ? '#fff' : WD.textMd,
                    border: c.a ? 'none' : `1px solid ${WD.border}`, backdropFilter: 'blur(8px)' }}>{c.l}</div>
                ))}
              </div>
              {/* Map controls */}
              <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['+', '−', '⌖'].map(c => (
                  <div key={c} style={{ width: 32, height: 32, background: 'rgba(28,42,56,0.95)', border: `1px solid ${WD.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{c}</div>
                ))}
              </div>
              {/* Selected courier popup */}
              <div style={{ position: 'absolute', top: 110, left: '38%', width: 220, background: WD.card, borderRadius: 10, padding: 12, border: `1px solid ${WD.border}`, boxShadow: '0 6px 20px rgba(0,0,0,0.4)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: WD.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 }}>А</div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700 }}>Алишер Б.</div>
                      <div style={{ fontSize: 10, color: WD.textLo }}>+7 707 ...</div>
                    </div>
                  </div>
                  <WireChip status="active">в пути</WireChip>
                </div>
                <div style={{ fontSize: 11, color: WD.textMd, marginBottom: 4 }}>Заказ #4822</div>
                <div style={{ fontSize: 12, marginBottom: 8 }}>мкр. Самал-2, д. 18</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: WD.accent }}>ETA 14 мин</div>
                  <div style={{ fontSize: 11, color: WD.textLo }}>3.4 км</div>
                </div>
              </div>
              <Annotation pos="bottom" left={40} top={0} offset={12} width={140}>
                карта с пинами + всплывающая мини-карточка
              </Annotation>
            </div>
            {/* Right panel: order list */}
            <div style={{ width: 360, borderLeft: `1px solid ${WD.border}`, background: WD.bg, display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '14px 14px 10px', borderBottom: `1px solid ${WD.border}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Активные заказы · 4</div>
                <div style={{ display: 'flex', gap: 4, fontSize: 10 }}>
                  {['Сегодня', 'Все', 'По адресу'].map((t, i) => (
                    <div key={t} style={{ padding: '4px 8px', borderRadius: 4, background: i === 0 ? WD.surface2 : 'transparent', color: i === 0 ? WD.textHi : WD.textLo, fontWeight: 600 }}>{t}</div>
                  ))}
                </div>
              </div>
              <div style={{ flex: 1, overflow: 'auto' }}>
                {SAMPLE_ORDERS.map((r, i) => (
                  <WDOrderRow key={r.o} {...r} sel={i === 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebShell>
  );
}

// ─────────────────────────────────────────────────────────────
// MANAGER WEB B — Map fullbleed with floating list panel + top stats
// ─────────────────────────────────────────────────────────────
function ManagerWebB() {
  return (
    <WebShell>
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <WDSidebar active="map" />
        <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
          {/* Map fullbleed */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <MapBackdrop>
              <MapPin x={15} y={25} status="active" label="Т" />
              <MapPin x={30} y={45} status="active" label="А" />
              <MapPin x={55} y={20} status="active" label="Т" />
              <MapPin x={68} y={55} status="waiting" label="Н" />
              <MapPin x={42} y={65} status="delayed" label="Д" />
              <MapPin x={80} y={75} status="active" label="А" />
            </MapBackdrop>
          </div>
          {/* Floating top bar */}
          <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <div style={{ padding: '8px 14px', background: 'rgba(15,25,35,0.95)', backdropFilter: 'blur(10px)', borderRadius: 10, border: `1px solid ${WD.border}` }}>
              <div style={{ fontSize: 9, color: WD.textLo, textTransform: 'uppercase', letterSpacing: 0.8 }}>Live · обновлено 1 сек назад</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>Карта курьеров</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[{ l: 'Все · 6', a: true }, { l: 'В пути · 4' }, { l: 'Ждут · 1' }, { l: 'Задержка · 1' }].map(c => (
                <div key={c.l} style={{ padding: '8px 14px', borderRadius: 99, fontSize: 11, fontWeight: 600,
                  background: c.a ? WD.accent : 'rgba(15,25,35,0.95)', color: c.a ? '#fff' : WD.textMd,
                  border: c.a ? 'none' : `1px solid ${WD.border}`, backdropFilter: 'blur(8px)' }}>{c.l}</div>
              ))}
            </div>
            <div style={{ height: 38, padding: '0 14px', background: WD.accent, borderRadius: 10, display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 600, fontSize: 12 }}>+ Новый заказ</div>
          </div>
          {/* Floating KPI tiles top-right under header */}
          <div style={{ position: 'absolute', top: 76, right: 16, display: 'flex', flexDirection: 'column', gap: 8, width: 200 }}>
            {[
              { l: 'В пути', v: '4', h: 'средн. 12 мин' },
              { l: 'Готово сегодня', v: '18' },
              { l: 'Задержки', v: '1', a: true },
            ].map(s => (
              <div key={s.l} style={{ padding: 12, background: 'rgba(15,25,35,0.95)', backdropFilter: 'blur(10px)', border: `1px solid ${WD.border}`, borderRadius: 8 }}>
                <div style={{ fontSize: 9, color: WD.textLo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6, marginBottom: 4 }}>{s.l}</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: s.a ? WD.accent : WD.textHi }}>{s.v}</div>
                {s.h && <div style={{ fontSize: 10, color: WD.textLo, marginTop: 2 }}>{s.h}</div>}
              </div>
            ))}
          </div>
          {/* Floating left panel — order list */}
          <div style={{ position: 'absolute', top: 76, bottom: 16, left: 16, width: 320, background: 'rgba(15,25,35,0.95)', backdropFilter: 'blur(10px)', borderRadius: 12, border: `1px solid ${WD.border}`, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '12px 14px', borderBottom: `1px solid ${WD.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 700 }}>Активные заказы</div>
              <div style={{ fontSize: 10, color: WD.textLo, marginTop: 2 }}>сортировка: ETA ↑</div>
            </div>
            <div style={{ flex: 1, overflow: 'auto' }}>
              {SAMPLE_ORDERS.slice(0, 5).map((r, i) => (
                <WDOrderRow key={r.o} {...r} sel={i === 0} />
              ))}
            </div>
          </div>
          <Annotation pos="bottom" left={400} top={0} offset={12} width={140}>
            карта во весь экран, плавающие панели поверх
          </Annotation>
        </div>
      </div>
    </WebShell>
  );
}

// ─────────────────────────────────────────────────────────────
// MANAGER WEB C — Table-first analytics view (orders table + map preview)
// ─────────────────────────────────────────────────────────────
function ManagerWebC() {
  return (
    <WebShell>
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <WDSidebar active="orders" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <WDTopBar title="Все заказы" subtitle="Сегодня · 22 заказа" />
          {/* KPI tiles row */}
          <div style={{ padding: '14px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr) 280px', gap: 10 }}>
            <WireStat dark label="В пути" value="4" hint="ETA средн. 12 мин" accent />
            <WireStat dark label="Ждут забора" value="2" />
            <WireStat dark label="Задержки" value="1" />
            <WireStat dark label="Готово" value="18 / 22" hint="82%" />
            {/* Mini-map */}
            <div style={{ gridRow: '1 / 2', position: 'relative', borderRadius: 6, overflow: 'hidden', border: `1px solid ${WD.border}`, height: 80 }}>
              <MapBackdrop>
                <MapPin x={20} y={40} status="active" />
                <MapPin x={50} y={30} status="active" />
                <MapPin x={75} y={60} status="delayed" />
                <MapPin x={40} y={70} status="waiting" />
              </MapBackdrop>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(15,25,35,0.7))' }} />
              <div style={{ position: 'absolute', right: 8, top: 8, bottom: 8, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ fontSize: 9, color: WD.textLo, fontWeight: 700, textTransform: 'uppercase' }}>Карта</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: WD.accent }}>Открыть →</div>
              </div>
            </div>
          </div>
          {/* Filter row */}
          <div style={{ padding: '8px 24px 12px', display: 'flex', gap: 8, alignItems: 'center', borderBottom: `1px solid ${WD.border}` }}>
            <div style={{ display: 'flex', gap: 4 }}>
              {[{ l: 'Все · 22', a: true }, { l: 'В пути · 4' }, { l: 'Ждут · 2' }, { l: 'Задержка · 1' }, { l: 'Готово · 18' }].map(c => (
                <div key={c.l} style={{ padding: '6px 12px', borderRadius: 6, fontSize: 11, fontWeight: 600,
                  background: c.a ? WD.accentSoft : 'transparent', color: c.a ? WD.accent : WD.textMd,
                  border: `1px solid ${c.a ? WD.accent : WD.border}` }}>{c.l}</div>
              ))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
              <div style={{ height: 30, padding: '0 10px', background: WD.card, border: `1px solid ${WD.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: WD.textMd }}>
                <span style={{ color: WD.textLo }}>Курьер:</span>Все ▾
              </div>
              <div style={{ height: 30, padding: '0 10px', background: WD.card, border: `1px solid ${WD.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: WD.textMd }}>
                <span style={{ color: WD.textLo }}>Период:</span>Сегодня ▾
              </div>
              <div style={{ height: 30, width: 30, background: WD.card, border: `1px solid ${WD.border}`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>↓</div>
            </div>
          </div>
          {/* Table */}
          <div style={{ flex: 1, overflow: 'auto' }}>
            {/* Header */}
            <div style={{
              padding: '10px 24px', display: 'grid',
              gridTemplateColumns: '70px 1fr 140px 140px 100px 110px 80px 60px',
              gap: 12, fontSize: 10, color: WD.textLo, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6,
              borderBottom: `1px solid ${WD.border}`, background: WD.bg, position: 'sticky', top: 0, zIndex: 1,
            }}>
              <div>№</div><div>Адрес</div><div>Клиент</div><div>Курьер</div><div>Создан</div><div>Статус</div><div style={{ textAlign: 'right' }}>ETA</div><div></div>
            </div>
            {[
              { n: '#4821', a: 'ул. Абая 150, кв. 32', cl: 'Айгуль К.', cr: 'Тимур К.', t: '12:18', s: 'active', e: '8 мин' },
              { n: '#4822', a: 'мкр. Самал-2, д. 18, оф. 5', cl: 'Дамир Е.', cr: 'Алишер Б.', t: '12:24', s: 'active', e: '14 мин' },
              { n: '#4820', a: 'пр. Достык 91, кв. 12', cl: 'Виктория П.', cr: 'Дамир А.', t: '12:08', s: 'delayed', e: '+5 мин' },
              { n: '#4823', a: 'ул. Сатпаева 22', cl: 'Ермек Б.', cr: 'Нурбек М.', t: '12:30', s: 'waiting', e: '—' },
              { n: '#4819', a: 'ул. Толе би 188, кв. 4', cl: 'Сауле М.', cr: 'Тимур К.', t: '12:02', s: 'active', e: '21 мин' },
              { n: '#4818', a: 'мкр. Мамыр-3, д. 7', cl: 'Жанна Т.', cr: 'Алишер Б.', t: '11:42', s: 'done', e: '✓ 12:04' },
              { n: '#4817', a: 'пр. Сейфуллина 506', cl: 'Бауржан К.', cr: 'Нурбек М.', t: '11:38', s: 'done', e: '✓ 12:01' },
              { n: '#4816', a: 'ул. Жибек жолы 50', cl: 'Аружан Е.', cr: 'Дамир А.', t: '11:30', s: 'done', e: '✓ 11:55' },
            ].map((r, i) => (
              <div key={r.n} style={{
                padding: '12px 24px', display: 'grid',
                gridTemplateColumns: '70px 1fr 140px 140px 100px 110px 80px 60px',
                gap: 12, fontSize: 12, alignItems: 'center',
                borderBottom: `1px solid ${WD.border}`,
                background: i === 0 ? WD.accentSoft : 'transparent',
                borderLeft: i === 0 ? `3px solid ${WD.accent}` : '3px solid transparent',
              }}>
                <div style={{ fontWeight: 700 }}>{r.n}</div>
                <div>{r.a}</div>
                <div style={{ color: WD.textMd }}>{r.cl}</div>
                <div style={{ color: WD.textMd }}>{r.cr}</div>
                <div style={{ color: WD.textLo }}>{r.t}</div>
                <div><WireChip status={r.s}>{r.s === 'active' ? 'в пути' : r.s === 'delayed' ? 'задержка' : r.s === 'waiting' ? 'ждёт' : 'готово'}</WireChip></div>
                <div style={{ textAlign: 'right', fontWeight: 700, color: r.s === 'delayed' ? '#dc2626' : (r.s === 'done' ? WD.textLo : WD.accent) }}>{r.e}</div>
                <div style={{ textAlign: 'right', color: WD.textLo }}>⋯</div>
              </div>
            ))}
          </div>
          <Annotation pos="left" top={150} offset={20} width={140}>
            таблица заказов · фильтры · мини-превью карты
          </Annotation>
        </div>
      </div>
    </WebShell>
  );
}

Object.assign(window, { ManagerWebA, ManagerWebB, ManagerWebC });
