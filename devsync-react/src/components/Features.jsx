const features = [
  {
    icon: 'bi-lightning-charge-fill',
    iconClass: 'fi1',
    title: 'Edición en tiempo real',
    desc: 'Ves los cambios de tus compañeros al instante, con cursores identificados por color y sincronización sin conflictos.',
  },
  {
    icon: 'bi-box-seam',
    iconClass: 'fi2',
    title: 'Ejecución en contenedores',
    desc: 'Cada workspace corre en un contenedor aislado. Sin "funciona en mi máquina": el entorno es siempre el mismo para todos.',
  },
  {
    icon: 'bi-clock-history',
    iconClass: 'fi3',
    title: 'Historial visual de cambios',
    desc: 'Timeline interactivo que muestra quién modificó qué y cuándo. Revertí cualquier cambio con un clic.',
  },
  {
    icon: 'bi-cloud-check',
    iconClass: 'fi4',
    title: 'Almacenamiento seguro',
    desc: 'Tu código se guarda automáticamente en la nube con cifrado en reposo. Accedé desde cualquier dispositivo.',
  },
  {
    icon: 'bi-plug',
    iconClass: 'fi5',
    title: 'Extensiones y plugins',
    desc: 'Integraciones con GitHub, GitLab, Slack y tus herramientas favoritas. Ecosistema abierto y extensible.',
  },
  {
    icon: 'bi-mortarboard',
    iconClass: 'fi6',
    title: 'Ideal para equipos académicos',
    desc: 'Perfecto para trabajos prácticos universitarios. Sin costos iniciales ni configuraciones complejas para los estudiantes.',
  },
]

function Features() {
  return (
    <section id="features">
      <div className="reveal">
        <div className="section-label">// características</div>
        <h2 className="section-title">Todo lo que necesitás<br />para programar en equipo.</h2>
        <p className="section-sub">Sin instalaciones, sin conflictos de entorno. Solo abrís el navegador y empezás.</p>
      </div>
      <div className="features-grid reveal">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className={`feat-icon ${f.iconClass}`}><i className={`bi ${f.icon}`}></i></div>
            <div className="feat-title">{f.title}</div>
            <div className="feat-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
