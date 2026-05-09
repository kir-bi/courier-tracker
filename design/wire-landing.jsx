// Landing page wireframes — 3 distinct structural approaches.
// Each is a "browser preview" sized to ~960×1400 (full-page scroll-snap inside artboard).

const LandingShell = ({ children, dark = false, label }) => (
  <div style={{
    width: '100%', height: '100%', overflow: 'auto',
    background: dark ? WIRE.paperDark : WIRE.paper,
    fontFamily: '"Inter", system-ui, sans-serif',
    color: dark ? '#e5e7eb' : WIRE.ink,
    position: 'relative',
  }}>
    {children}
  </div>
);

const NavBar = ({ dark }) => (
  <div style={{
    position: 'sticky', top: 0, zIndex: 5,
    height: 56, padding: '0 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: dark ? 'rgba(13,27,42,0.95)' : 'rgba(250,250,247,0.95)',
    borderBottom: `1px solid ${dark ? WIRE.ruleDark : WIRE.ruleSoft}`,
    backdropFilter: 'blur(8px)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 24, height: 24, borderRadius: 6,
        background: WIRE.accent,
      }} />
      <div style={{ fontWeight: 700, fontSize: 13, color: dark ? '#fff' : WIRE.ink }}>Courier Tracker</div>
    </div>
    <div style={{ display: 'flex', gap: 24, fontSize: 12, color: dark ? '#cbd0d6' : WIRE.inkDim }}>
      <span>Возможности</span><span>Тарифы</span><span>Кейсы</span><span>Контакты</span>
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <WireBtn size="sm" dark={dark}>Войти</WireBtn>
      <WireBtn size="sm" primary>Попробовать</WireBtn>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// LANDING A — "PAJ-style" tall dark hero with phone mockup right
// ─────────────────────────────────────────────────────────────
function LandingA() {
  return (
    <LandingShell>
      <div style={{ background: WIRE.navy, color: '#fff' }}>
        <NavBar dark />
        <div style={{ padding: '64px 56px 80px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', background: 'rgba(255,107,26,0.15)', color: WIRE.accent, borderRadius: 99, fontSize: 11, fontWeight: 600, marginBottom: 20 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: WIRE.accent }} />
              для ресторанов с собственной доставкой
            </div>
            <WireHeading size={52} color="#fff" style={{ marginBottom: 20 }}>
              Знай где твой курьер.<br/>
              <span style={{ color: WIRE.accent }}>Всегда.</span>
            </WireHeading>
            <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, maxWidth: 460, marginBottom: 28 }}>
              Реальный ETA вместо «примерно через 40 минут». Карта, статусы, история — в одном экране.
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
              <WireBtn primary size="lg">Попробовать бесплатно →</WireBtn>
              <WireBtn dark size="lg" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Демо 15 минут</WireBtn>
            </div>
            <div style={{ display: 'flex', gap: 24, fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>
              <span>✓ 14 дней бесплатно</span>
              <span>✓ Без карты</span>
              <span>✓ Запуск за день</span>
            </div>
            <Annotation pos="left" top={30} offset={20} width={130}>
              акцент на «всегда» — оранжевым
            </Annotation>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 14 }}>
            {/* Phone mock 1 */}
            <div style={{ width: 170, height: 340, background: '#0a1218', borderRadius: 26, border: '6px solid #222', position: 'relative', overflow: 'hidden', transform: 'translateY(-20px) rotate(-4deg)' }}>
              <MapBackdrop>
                <MapPin x={30} y={45} status="active" label="К1" />
                <MapPin x={60} y={30} status="waiting" label="К2" />
                <MapPin x={70} y={65} status="delayed" label="К3" />
              </MapBackdrop>
              <div style={{ position: 'absolute', bottom: 6, left: 6, right: 6, padding: 6, background: 'rgba(15,20,27,0.95)', borderRadius: 6, color: '#fff', fontSize: 9 }}>
                <div style={{ fontWeight: 600 }}>3 курьера в пути</div>
                <div style={{ color: '#7e8794' }}>средн. ETA 12 мин</div>
              </div>
            </div>
            {/* Phone mock 2 */}
            <div style={{ width: 170, height: 340, background: '#0a1218', borderRadius: 26, border: '6px solid #222', position: 'relative', overflow: 'hidden', transform: 'translateY(20px) rotate(3deg)' }}>
              <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ height: 10, background: '#1c2630', borderRadius: 99, width: '60%' }} />
                <div style={{ flex: 1, background: '#1c2630', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 9, color: '#7e8794', fontFamily: 'monospace' }}>смена не начата</div>
                </div>
                <div style={{ height: 40, background: WIRE.accent, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 11 }}>Начать смену</div>
              </div>
            </div>
            <Annotation pos="right" top={40} offset={20} width={150}>
              два устройства: менеджер и курьер
            </Annotation>
          </div>
        </div>
      </div>

      {/* Pain → Solution */}
      <div style={{ padding: '64px 56px', background: WIRE.paper }}>
        <WireLabel>Боль → Решение</WireLabel>
        <WireHeading size={32} style={{ marginTop: 8, marginBottom: 32, maxWidth: 520 }}>
          Если у вас своя доставка — знакомо?
        </WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {[
            { p: 'Нет видимости', s: 'Карта реального времени', tag: '01' },
            { p: 'Клиенты звонят', s: 'Точный ETA для клиента', tag: '02' },
            { p: 'Excel и звонки', s: 'Всё в одном экране', tag: '03' },
          ].map(c => (
            <div key={c.tag} style={{ padding: 20, background: '#fff', border: `1px solid ${WIRE.ruleSoft}`, borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: WIRE.accent, fontWeight: 700, marginBottom: 12 }}>{c.tag}</div>
              <div style={{ fontSize: 13, color: WIRE.inkDim, textDecoration: 'line-through', marginBottom: 6 }}>{c.p}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{c.s}</div>
              <WireLines lines={2} />
            </div>
          ))}
        </div>
      </div>

      {/* How it works — 3 steps */}
      <div style={{ padding: '64px 56px', background: '#f4f5f7' }}>
        <WireLabel>Как это работает</WireLabel>
        <WireHeading size={32} style={{ marginTop: 8, marginBottom: 32 }}>3 шага до запуска</WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {[
            { n: '1', t: 'Курьер открывает приложение', d: 'логин, разрешение на геолокацию' },
            { n: '2', t: 'Менеджер видит карту', d: 'все курьеры в одном окне' },
            { n: '3', t: 'Клиент получает ссылку', d: 'live-трекинг без приложения' },
          ].map(s => (
            <div key={s.n} style={{ padding: 24, background: WIRE.paper, borderRadius: 10, position: 'relative' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: WIRE.navy, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginBottom: 12 }}>{s.n}</div>
              <WireImg label={`step-${s.n} icon`} height={64} style={{ marginBottom: 12 }} />
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 11, color: WIRE.inkDim }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Product screenshots */}
      <div style={{ padding: '64px 56px', background: WIRE.paper, position: 'relative' }}>
        <WireLabel>Скриншоты продукта</WireLabel>
        <WireHeading size={32} style={{ marginTop: 8, marginBottom: 32 }}>Три поверхности</WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16 }}>
          <WireImg label="manager dashboard · web" height={260} />
          <WireImg label="courier app · mobile" height={260} />
          <WireImg label="customer tracking · mobile web" height={260} />
        </div>
        <Annotation pos="bottom" top={0} left={20} offset={12} width={170}>
          реальные скрины — НЕ device shots
        </Annotation>
      </div>

      {/* Pricing */}
      <div style={{ padding: '64px 56px', background: '#f4f5f7' }}>
        <WireLabel style={{ textAlign: 'center' }}>Тарифы</WireLabel>
        <WireHeading size={32} style={{ textAlign: 'center', marginTop: 8, marginBottom: 32 }}>Цена за курьера, в месяц</WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, maxWidth: 720, margin: '0 auto' }}>
          {[
            { n: 'Старт', p: '490₽', sub: 'до 5 курьеров', features: ['Карта', 'ETA', 'Email'] },
            { n: 'Бизнес', p: '390₽', sub: '6–20 курьеров', features: ['Всё из «Старт»', 'API', 'White-label трекинг', 'Приоритет'], pop: true },
            { n: 'Сеть', p: 'договор', sub: '20+ точек', features: ['Всё из «Бизнес»', 'SLA', 'Менеджер'] },
          ].map(t => (
            <div key={t.n} style={{
              padding: 20, background: t.pop ? WIRE.navy : '#fff',
              color: t.pop ? '#fff' : WIRE.ink,
              border: `1px solid ${t.pop ? WIRE.navy : WIRE.ruleSoft}`,
              borderRadius: 10, position: 'relative',
              transform: t.pop ? 'scale(1.04)' : 'none',
            }}>
              {t.pop && (
                <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: WIRE.accent, color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 10px', borderRadius: 99 }}>Популярный</div>
              )}
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{t.n}</div>
              <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 2 }}>{t.p}</div>
              <div style={{ fontSize: 11, opacity: 0.6, marginBottom: 14 }}>{t.sub}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {t.features.map(f => (
                  <div key={f} style={{ fontSize: 12, display: 'flex', gap: 6 }}>
                    <span style={{ color: WIRE.accent }}>✓</span>{f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ padding: '72px 56px', background: WIRE.navy, color: '#fff', textAlign: 'center' }}>
        <WireHeading size={36} color="#fff" style={{ marginBottom: 16 }}>Подключить ресторан</WireHeading>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 24, maxWidth: 420, margin: '0 auto 24px' }}>
          14 дней бесплатно. Запустим вашу команду курьеров за один день.
        </div>
        <WireBtn primary size="lg">Оставить заявку →</WireBtn>
      </div>
    </LandingShell>
  );
}

// ─────────────────────────────────────────────────────────────
// LANDING B — Light editorial; horizontal hero with map+phone overlay
// ─────────────────────────────────────────────────────────────
function LandingB() {
  return (
    <LandingShell>
      <NavBar />
      {/* Hero with embedded map */}
      <div style={{ padding: '48px 56px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <WireLabel style={{ marginBottom: 12 }}>B2B SaaS · для ресторанов</WireLabel>
            <WireHeading size={56} style={{ marginBottom: 18 }}>
              Знай где твой курьер. <span style={{ color: WIRE.accent }}>Всегда.</span>
            </WireHeading>
            <div style={{ fontSize: 15, color: WIRE.inkDim, lineHeight: 1.5, maxWidth: 440, marginBottom: 24 }}>
              Реальный ETA вместо «примерно через 40 минут» для ресторанов с собственной доставкой.
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
              <WireBtn primary size="lg">Попробовать бесплатно</WireBtn>
              <span style={{ fontSize: 12, color: WIRE.inkFaint }}>14 дней · без карты</span>
            </div>
            {/* Logos strip */}
            <div style={{ marginTop: 32 }}>
              <div style={{ fontSize: 10, color: WIRE.inkFaint, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Уже используют</div>
              <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                {[1,2,3,4,5].map(i => <div key={i} style={{ height: 22, width: 70, background: WIRE.fill, borderRadius: 4 }} />)}
              </div>
            </div>
          </div>
          {/* Big map illustration with phone overlay */}
          <div style={{ position: 'relative', height: 420 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 16, overflow: 'hidden', border: `1px solid ${WIRE.ruleSoft}` }}>
              <MapBackdrop dark={false}>
                <MapPin x={20} y={30} status="active" />
                <MapPin x={45} y={20} status="active" />
                <MapPin x={70} y={50} status="waiting" />
                <MapPin x={30} y={70} status="delayed" />
                <MapPin x={75} y={75} status="active" />
              </MapBackdrop>
            </div>
            {/* phone overlay */}
            <div style={{ position: 'absolute', right: 20, bottom: 20, width: 160, height: 320, background: '#0a1218', borderRadius: 24, border: '5px solid #222', overflow: 'hidden' }}>
              <MapBackdrop>
                <MapPin x={40} y={50} status="active" label="К1" />
                <MapPin x={65} y={40} status="waiting" label="К2" />
              </MapBackdrop>
            </div>
            <Annotation pos="top" left={0} offset={12} width={150}>
              карта во всю ширину + плавающий телефон
            </Annotation>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ padding: '24px 56px', borderTop: `1px solid ${WIRE.ruleSoft}`, borderBottom: `1px solid ${WIRE.ruleSoft}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16 }}>
          {[
            { v: '−40%', l: 'звонков клиентам' },
            { v: '12 мин', l: 'точность ETA' },
            { v: '< 1 дня', l: 'на запуск' },
            { v: '2-20', l: 'курьеров' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 28, fontWeight: 800, color: WIRE.accent }}>{s.v}</div>
              <div style={{ fontSize: 11, color: WIRE.inkDim, textTransform: 'uppercase', letterSpacing: 0.6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pain/Solution as split table */}
      <div style={{ padding: '64px 56px' }}>
        <WireHeading size={28} style={{ marginBottom: 24 }}>Без Courier Tracker → С нами</WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: `1px solid ${WIRE.ruleSoft}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ padding: 24, background: '#f4f5f7' }}>
            <WireLabel style={{ marginBottom: 16, color: '#991b1b' }}>сейчас</WireLabel>
            {['Нет видимости — где курьер?', 'Клиенты звонят: «когда?»', 'Excel + звонки + WhatsApp'].map(s => (
              <div key={s} style={{ fontSize: 13, padding: '10px 0', borderBottom: `1px dashed ${WIRE.rule}`, display: 'flex', gap: 8, color: WIRE.ink }}>
                <span style={{ color: '#991b1b' }}>✗</span>{s}
              </div>
            ))}
          </div>
          <div style={{ padding: 24, background: '#fff' }}>
            <WireLabel style={{ marginBottom: 16, color: WIRE.accent }}>с нами</WireLabel>
            {['Карта реального времени', 'Точный ETA + ссылка клиенту', 'Всё в одном экране'].map(s => (
              <div key={s} style={{ fontSize: 13, padding: '10px 0', borderBottom: `1px dashed ${WIRE.rule}`, display: 'flex', gap: 8, color: WIRE.ink, fontWeight: 600 }}>
                <span style={{ color: WIRE.accent }}>✓</span>{s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works — vertical timeline */}
      <div style={{ padding: '48px 56px', background: '#f4f5f7' }}>
        <WireHeading size={28} style={{ marginBottom: 32 }}>Как это работает</WireHeading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative', maxWidth: 720 }}>
          <div style={{ position: 'absolute', left: 19, top: 20, bottom: 20, width: 2, background: WIRE.rule }} />
          {[
            { n: '1', t: 'Курьер открывает приложение', d: 'устанавливает на свой телефон, логинится по коду от менеджера' },
            { n: '2', t: 'Менеджер видит карту', d: 'все активные курьеры с их статусом и заказами в одном окне' },
            { n: '3', t: 'Клиент получает ссылку', d: 'отдельная live-страница без необходимости устанавливать приложение' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: 20, padding: '18px 0', position: 'relative' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: WIRE.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0, zIndex: 1 }}>{s.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{s.t}</div>
                <div style={{ fontSize: 13, color: WIRE.inkDim }}>{s.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* For whom */}
      <div style={{ padding: '64px 56px' }}>
        <WireHeading size={28} style={{ marginBottom: 24 }}>Для кого</WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ padding: 24, border: `2px solid ${WIRE.accent}`, borderRadius: 10, background: '#fff' }}>
            <div style={{ fontSize: 11, color: WIRE.accent, fontWeight: 700, marginBottom: 8, letterSpacing: 0.5 }}>✓ ВЫ</div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Своя курьерская служба</div>
            <WireLines lines={2} />
            <div style={{ marginTop: 12, fontSize: 12, color: WIRE.inkDim }}>2–20 курьеров · фудкорты · сети ресторанов</div>
          </div>
          <div style={{ padding: 24, border: `1px dashed ${WIRE.rule}`, borderRadius: 10, opacity: 0.6 }}>
            <div style={{ fontSize: 11, color: WIRE.inkDim, fontWeight: 700, marginBottom: 8, letterSpacing: 0.5 }}>✗ НЕ ДЛЯ</div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>Яндекс.Еда / Glovo</div>
            <WireLines lines={2} />
            <div style={{ marginTop: 12, fontSize: 12, color: WIRE.inkDim }}>агрегаторы со своей логистикой</div>
          </div>
        </div>
      </div>

      {/* Pricing — horizontal */}
      <div style={{ padding: '64px 56px', background: '#f4f5f7' }}>
        <WireHeading size={28} style={{ marginBottom: 24 }}>Тарифы</WireHeading>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, border: `1px solid ${WIRE.ruleSoft}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
          {[
            { n: 'Старт', p: '490₽', sub: 'до 5 курьеров' },
            { n: 'Бизнес', p: '390₽', sub: '6–20 курьеров', pop: true },
            { n: 'Сеть', p: 'договор', sub: '20+' },
          ].map((t, i) => (
            <div key={t.n} style={{
              padding: 28, position: 'relative',
              borderRight: i < 2 ? `1px solid ${WIRE.ruleSoft}` : 'none',
              background: t.pop ? '#fff8f3' : '#fff',
            }}>
              {t.pop && <div style={{ position: 'absolute', top: 12, right: 12, background: WIRE.accent, color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 99 }}>POPULAR</div>}
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{t.n}</div>
              <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 2 }}>{t.p}<span style={{ fontSize: 12, color: WIRE.inkDim, fontWeight: 500 }}>/курьер/мес</span></div>
              <div style={{ fontSize: 11, color: WIRE.inkDim, marginBottom: 14 }}>{t.sub}</div>
              <WireBtn primary={t.pop} dark={false} size="md" style={{ width: '100%' }}>Выбрать</WireBtn>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ padding: '64px 56px', background: WIRE.navy, color: '#fff', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'center' }}>
        <div>
          <WireHeading size={32} color="#fff" style={{ marginBottom: 12 }}>Подключить ресторан</WireHeading>
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>Расскажем, покажем, настроим за 1 день. Без обязательств.</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ flex: 1, height: 44, background: 'rgba(255,255,255,0.1)', border: `1px solid rgba(255,255,255,0.2)`, borderRadius: 6, padding: '0 14px', display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>email@restoran.ru</div>
          <WireBtn primary size="lg">Заявка</WireBtn>
        </div>
      </div>
    </LandingShell>
  );
}

// ─────────────────────────────────────────────────────────────
// LANDING C — Bold sticker / poster style; oversized type, single column
// ─────────────────────────────────────────────────────────────
function LandingC() {
  return (
    <LandingShell>
      <NavBar />
      {/* Hero: oversize headline + tablet mock below */}
      <div style={{ padding: '64px 56px 32px', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'inline-block', padding: '4px 12px', background: WIRE.accentSoft, color: WIRE.accent, borderRadius: 99, fontSize: 11, fontWeight: 700, marginBottom: 18 }}>
          GPS-трекинг для ресторанной доставки
        </div>
        <WireHeading size={88} style={{ maxWidth: 880, margin: '0 auto 20px', letterSpacing: -2 }}>
          Знай где твой<br/>
          <span style={{ background: `linear-gradient(transparent 60%, ${WIRE.accentSoft} 60%)`, padding: '0 4px' }}>курьер.</span> Всегда.
        </WireHeading>
        <div style={{ fontSize: 17, color: WIRE.inkDim, maxWidth: 540, margin: '0 auto 24px' }}>
          Реальный ETA вместо «примерно через 40 минут» — для ресторанов с собственной доставкой.
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 40 }}>
          <WireBtn primary size="lg">Попробовать бесплатно</WireBtn>
          <WireBtn size="lg">Демо ↗</WireBtn>
        </div>
        <Annotation pos="left" top={120} offset={20} width={140}>
          огромный заголовок 80–90px, маркер на «курьер»
        </Annotation>

        {/* Tablet + 2 phones below */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 0, marginTop: 24, position: 'relative' }}>
          <div style={{ width: 160, height: 320, background: '#0a1218', borderRadius: 24, border: '5px solid #222', overflow: 'hidden', transform: 'translateX(40px) translateY(20px) rotate(-6deg)', zIndex: 1 }}>
            <div style={{ padding: 14, height: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ height: 8, background: '#1c2630', borderRadius: 99, width: '40%' }} />
              <div style={{ height: 50, background: WIRE.accent, borderRadius: 8 }} />
              <div style={{ flex: 1, background: '#1c2630', borderRadius: 6 }} />
              <div style={{ flex: 1, background: '#1c2630', borderRadius: 6 }} />
            </div>
          </div>
          {/* Tablet center */}
          <div style={{ width: 480, height: 360, background: '#0a1218', borderRadius: 16, border: '8px solid #222', overflow: 'hidden', position: 'relative', zIndex: 2 }}>
            <MapBackdrop>
              <MapPin x={20} y={35} status="active" label="К1" />
              <MapPin x={45} y={25} status="active" label="К2" />
              <MapPin x={70} y={50} status="waiting" label="К3" />
              <MapPin x={35} y={70} status="delayed" label="К4" />
              <MapPin x={75} y={75} status="active" label="К5" />
            </MapBackdrop>
            <div style={{ position: 'absolute', top: 12, left: 12, padding: '6px 10px', background: 'rgba(15,20,27,0.9)', color: '#fff', fontSize: 11, borderRadius: 6 }}>
              <div style={{ fontWeight: 700 }}>5 курьеров активны</div>
              <div style={{ color: '#7e8794', fontSize: 10 }}>средн. ETA 14 мин</div>
            </div>
            <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, height: 70, background: 'rgba(15,20,27,0.9)', borderRadius: 8, padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ height: 8, background: '#2a313c', borderRadius: 99, width: '70%' }} />
              <div style={{ height: 8, background: '#2a313c', borderRadius: 99, width: '50%' }} />
              <div style={{ height: 8, background: '#2a313c', borderRadius: 99, width: '60%' }} />
            </div>
          </div>
          <div style={{ width: 160, height: 320, background: '#0a1218', borderRadius: 24, border: '5px solid #222', overflow: 'hidden', transform: 'translateX(-40px) translateY(20px) rotate(6deg)', zIndex: 1 }}>
            <MapBackdrop>
              <MapPin x={50} y={45} status="active" label="вы" />
            </MapBackdrop>
            <div style={{ position: 'absolute', top: 8, left: 8, right: 8, padding: 8, background: 'rgba(15,20,27,0.95)', borderRadius: 6, fontSize: 9, color: '#fff' }}>
              <div style={{ fontSize: 8, color: '#7e8794' }}>Прибудет через</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>12 минут</div>
            </div>
          </div>
        </div>
      </div>

      {/* Three cards row — pain/solution combined w/ how it works */}
      <div style={{ padding: '80px 56px 56px', background: WIRE.navy, color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
          {[
            { ic: '👁', t: 'Видишь', d: 'Карта в реальном времени со всеми курьерами' },
            { ic: '⏱', t: 'Считаешь', d: 'Точный ETA по маршруту, не «примерно»' },
            { ic: '✉', t: 'Делишься', d: 'Клиент получает ссылку на отслеживание' },
          ].map((c, i) => (
            <div key={c.t} style={{ padding: '28px 24px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{c.ic}</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>{c.t}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{c.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Big screenshot showcase — alternating */}
      {[
        { side: 'left', t: 'Дашборд менеджера', d: 'Все курьеры — на одной карте. Фильтры, статусы, список заказов.' },
        { side: 'right', t: 'Приложение курьера', d: 'Минимум кнопок. Список адресов на смену. Геолокация в фоне.' },
        { side: 'left', t: 'Live-трекинг для клиента', d: 'Без приложения. White-label под ресторан.' },
      ].map((row, i) => (
        <div key={i} style={{ padding: '56px 56px', background: i % 2 === 0 ? WIRE.paper : '#f4f5f7', display: 'grid', gridTemplateColumns: row.side === 'left' ? '1fr 1fr' : '1fr 1fr', gap: 32, alignItems: 'center' }}>
          {row.side === 'left' ? (
            <>
              <WireImg label={`screenshot · ${row.t.toLowerCase()}`} height={260} />
              <div>
                <WireLabel style={{ marginBottom: 10 }}>0{i + 1}</WireLabel>
                <WireHeading size={28} style={{ marginBottom: 12 }}>{row.t}</WireHeading>
                <div style={{ fontSize: 14, color: WIRE.inkDim, marginBottom: 16 }}>{row.d}</div>
                <WireLines lines={3} />
              </div>
            </>
          ) : (
            <>
              <div>
                <WireLabel style={{ marginBottom: 10 }}>0{i + 1}</WireLabel>
                <WireHeading size={28} style={{ marginBottom: 12 }}>{row.t}</WireHeading>
                <div style={{ fontSize: 14, color: WIRE.inkDim, marginBottom: 16 }}>{row.d}</div>
                <WireLines lines={3} />
              </div>
              <WireImg label={`screenshot · ${row.t.toLowerCase()}`} height={260} />
            </>
          )}
        </div>
      ))}

      {/* Pricing minimal */}
      <div style={{ padding: '64px 56px', background: WIRE.paper, textAlign: 'center' }}>
        <WireHeading size={32} style={{ marginBottom: 8 }}>Один тариф. Цена за курьера.</WireHeading>
        <div style={{ fontSize: 13, color: WIRE.inkDim, marginBottom: 32 }}>Скидка 20% при оплате за год</div>
        <div style={{ display: 'inline-flex', gap: 14, padding: 24, background: '#fff', border: `1px solid ${WIRE.ruleSoft}`, borderRadius: 16, alignItems: 'center' }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: WIRE.accent }}>390₽</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>за курьера / месяц</div>
            <div style={{ fontSize: 11, color: WIRE.inkDim }}>от 2 курьеров. Всё включено.</div>
          </div>
          <WireBtn primary size="lg">Подключить</WireBtn>
        </div>
      </div>

      {/* Final CTA — full bleed orange */}
      <div style={{ padding: '80px 56px', background: WIRE.accent, color: '#fff', textAlign: 'center' }}>
        <WireHeading size={48} color="#fff" style={{ marginBottom: 14 }}>Подключить ресторан</WireHeading>
        <div style={{ fontSize: 16, marginBottom: 24, opacity: 0.9 }}>14 дней бесплатно. Запуск за 1 день.</div>
        <WireBtn size="lg" style={{ background: WIRE.navy, color: '#fff', borderColor: WIRE.navy }}>Оставить заявку →</WireBtn>
      </div>
    </LandingShell>
  );
}

Object.assign(window, { LandingA, LandingB, LandingC });
