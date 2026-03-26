function CTA({ openModal }) {
  return (
    <section id="cta">
      <div className="reveal">
        <h2 className="cta-title">Empezá a programar<br />en equipo hoy.</h2>
        <p className="cta-sub">Gratis. Sin tarjeta. Sin instalaciones.</p>
        <button className="btn btn-primary btn-lg" onClick={() => openModal('register')}>
          <i className="bi bi-lightning-charge-fill"></i> Crear cuenta gratis
        </button>
      </div>
    </section>
  )
}

export default CTA
