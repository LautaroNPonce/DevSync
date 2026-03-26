function Modal({ isOpen, activeTab, setActiveTab, closeModal }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal()
  }

  return (
    <div
      className={`modal-overlay${isOpen ? ' open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal">
        <button className="modal-close" onClick={closeModal}>×</button>
        <div className="modal-title">Bienvenido a DevSync</div>
        <div className="modal-sub">Empezá a programar en equipo hoy.</div>
        <div className="modal-tabs">
          <button
            className={`modal-tab${activeTab === 'login' ? ' active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Iniciar sesión
          </button>
          <button
            className={`modal-tab${activeTab === 'register' ? ' active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Registrarse
          </button>
        </div>

        {activeTab === 'login' ? (
          <div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input type="email" className="input-field" placeholder="tu@email.com" />
            </div>
            <div className="input-group">
              <label className="input-label">Contraseña</label>
              <input type="password" className="input-field" placeholder="••••••••" />
            </div>
            <button className="modal-btn">Iniciar sesión →</button>
          </div>
        ) : (
          <div>
            <div className="input-group">
              <label className="input-label">Nombre</label>
              <input type="text" className="input-field" placeholder="Tu nombre" />
            </div>
            <div className="input-group">
              <label className="input-label">Email</label>
              <input type="email" className="input-field" placeholder="tu@email.com" />
            </div>
            <div className="input-group">
              <label className="input-label">Contraseña</label>
              <input type="password" className="input-field" placeholder="Mínimo 8 caracteres" />
            </div>
            <button className="modal-btn">Crear cuenta gratis →</button>
          </div>
        )}

        <div className="modal-divider">o continuá con</div>
        <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '12px', marginBottom: '8px' }}>
          <i className="bi bi-github"></i> GitHub
        </button>
        <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '12px' }}>
          <i className="bi bi-google"></i> Google
        </button>
      </div>
    </div>
  )
}

export default Modal
