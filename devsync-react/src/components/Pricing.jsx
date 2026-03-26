const plans = [
  {
    name: 'Gratuito',
    price: '0',
    period: 'para siempre',
    featured: false,
    badge: null,
    features: [
      { ok: true,  text: '3 workspaces activos' },
      { ok: true,  text: 'Hasta 3 colaboradores' },
      { ok: true,  text: '512MB RAM por contenedor' },
      { ok: true,  text: '1GB de almacenamiento' },
      { ok: false, text: 'Ejecución prolongada' },
      { ok: false, text: 'Dominios personalizados' },
    ],
    btnClass: 'btn-outline',
    btnText: 'Empezar gratis',
  },
  {
    name: 'Pro',
    price: '12',
    period: 'por usuario / mes',
    featured: true,
    badge: 'Más popular',
    features: [
      { ok: true,  text: 'Workspaces ilimitados' },
      { ok: true,  text: 'Hasta 10 colaboradores' },
      { ok: true,  text: '2GB RAM por contenedor' },
      { ok: true,  text: '10GB de almacenamiento' },
      { ok: true,  text: 'Ejecución prolongada' },
      { ok: false, text: 'Dominios personalizados' },
    ],
    btnClass: 'btn-primary',
    btnText: 'Empezar prueba gratis',
  },
  {
    name: 'Equipo',
    price: '29',
    period: 'por usuario / mes',
    featured: false,
    badge: null,
    features: [
      { ok: true, text: 'Todo lo de Pro' },
      { ok: true, text: 'Colaboradores ilimitados' },
      { ok: true, text: '8GB RAM por contenedor' },
      { ok: true, text: '100GB de almacenamiento' },
      { ok: true, text: 'Ejecución prolongada' },
      { ok: true, text: 'Dominios personalizados' },
    ],
    btnClass: 'btn-outline',
    btnText: 'Contactar ventas',
  },
]

function Pricing({ openModal }) {
  return (
    <section id="pricing">
      <div className="reveal">
        <div className="section-label">// planes y precios</div>
        <h2 className="section-title">Empezá gratis.<br />Escalá cuando crezcas.</h2>
        <p className="section-sub">Sin sorpresas. Cancelá cuando quieras.</p>
      </div>
      <div className="plans reveal">
        {plans.map((p) => (
          <div className={`plan${p.featured ? ' featured' : ''}`} key={p.name}>
            {p.badge && <div className="plan-badge">{p.badge}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-price"><sup>$</sup>{p.price}</div>
            <div className="plan-period">{p.period}</div>
            <div className="plan-divider"></div>
            <ul className="plan-features">
              {p.features.map((f) => (
                <li key={f.text}>
                  <span className={f.ok ? 'check' : 'cross'}>{f.ok ? '✓' : '✗'}</span>
                  {f.text}
                </li>
              ))}
            </ul>
            <button className={`btn ${p.btnClass}`} onClick={() => openModal('register')}>
              {p.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
