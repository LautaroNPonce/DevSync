function Navbar({ openModal }) {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <div className="logo-icon"><i className="bi bi-code-slash"></i></div>
        Dev<span>Sync</span>
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">Cómo funciona</a></li>
        <li><a href="#pricing">Precios</a></li>
      </ul>
      <div className="nav-actions">
        <button className="btn btn-ghost" onClick={() => openModal('login')}>Iniciar sesión</button>
        <button className="btn btn-primary" onClick={() => openModal('register')}>Empezar gratis</button>
      </div>
    </nav>
  )
}

export default Navbar
