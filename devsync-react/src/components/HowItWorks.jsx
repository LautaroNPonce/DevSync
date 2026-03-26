const steps = [
  {
    num: '01',
    title: 'Creá tu workspace',
    desc: 'Registrate, elegí un nombre para tu proyecto y seleccioná el entorno de ejecución (Python, Node, Go, etc.).',
  },
  {
    num: '02',
    title: 'Invitá a tu equipo',
    desc: 'Compartí el link con tus colaboradores. En segundos estarán dentro del mismo workspace, sin instalar nada.',
  },
  {
    num: '03',
    title: 'Programá en tiempo real',
    desc: 'Editá simultáneamente, ejecutá código y usá el chat integrado. El historial se guarda automáticamente.',
  },
  {
    num: '04',
    title: 'Publicá y entregá',
    desc: 'Exportá tu proyecto, conectá con GitHub o compartí el entorno completo con un solo clic.',
  },
]

function HowItWorks() {
  return (
    <section id="how">
      <div className="how-inner">
        <div className="reveal">
          <div className="section-label">// cómo funciona</div>
          <h2 className="section-title">De cero a colaborar<br />en tres pasos.</h2>
          <p className="section-sub">Empezar con DevSync lleva menos de dos minutos.</p>
        </div>
        <div className="steps reveal">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
