import { useEffect, useRef } from 'react'

const users = [
  { name: 'Ana',   ci: 'ci1', cl: 'cl1' },
  { name: 'Luis',  ci: 'ci2', cl: 'cl2' },
  { name: 'Carla', ci: 'ci3', cl: 'cl3' },
]

const baseLines = [
  `<span class="cm"># DevSync — colaboración en tiempo real</span>`,
  ``,
  `<span class="kw">from</span> <span class="fn">devsync</span> <span class="kw">import</span> <span class="fn">Session</span>, <span class="fn">Realtime</span>`,
  ``,
  `<span class="kw">async def</span> <span class="fn">main</span>():`,
  `&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">session</span> <span class="op">=</span> <span class="kw">await</span> <span class="fn">Session</span>.<span class="fn">create</span>(<span class="str">"mi-proyecto"</span>)`,
  `&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">collab</span> <span class="op">=</span> <span class="fn">Realtime</span>.<span class="fn">join</span>(session, users<span class="op">=</span>[<span class="str">"Ana"</span>, <span class="str">"Luis"</span>, <span class="str">"Carla"</span>])`,
  `&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">await</span> <span class="fn">collab</span>.<span class="fn">sync</span>()`,
  `&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="str">"🚀 Workspace listo para todos"</span>)`,
  ``,
  `<span class="cm"># ── cada usuario escribe en tiempo real ──</span>`,
]

const sequences = [
  { user: 0, line: 7,  type: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">resultado</span> <span class="op">=</span> <span class="str">""</span>`,                        delay: 800  },
  { user: 1, line: 9,  type: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="fn">resultado</span>`,                         delay: 1200 },
  { user: 2, line: 10, type: ``,                                                                    delay: 600  },
  { user: 0, line: 7,  type: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">resultado</span> <span class="op">=</span> <span class="kw">await</span> <span class="fn">collab</span>.<span class="fn">run</span>()`, delay: 900  },
  { user: 2, line: 10, type: `<span class="fn">asyncio</span>.<span class="fn">run</span>(<span class="fn">main</span>())`,                           delay: 700  },
  { user: 1, line: 9,  type: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">return</span> <span class="fn">resultado</span>.<span class="fn">output</span>`,                  delay: 1100 },
]

function buildCursorHTML(userIdx) {
  const u = users[userIdx]
  return `<span class="cursor-wrap"><span class="cursor-label ${u.cl}">${u.name}</span><span class="cursor-inline ${u.ci}"></span></span>`
}

function Hero({ openModal }) {
  const codeBodyRef = useRef(null)
  const lineContentRef = useRef([...baseLines])
  const cursorPosRef = useRef([{ line: 7 }, { line: 8 }, { line: 9 }])
  const seqIndexRef = useRef(0)
  const timerRef = useRef(null)

  function renderLines() {
    const body = codeBodyRef.current
    if (!body) return

    const cursorMap = {}
    cursorPosRef.current.forEach((cp, i) => {
      const l = cp.line
      if (!cursorMap[l]) cursorMap[l] = []
      cursorMap[l].push(i)
    })

    let html = ''
    lineContentRef.current.forEach((content, i) => {
      const lineNum = i + 1
      const hasCursors = cursorMap[i]
      const isActive = !!hasCursors
      const borderColor = hasCursors
        ? (hasCursors.length > 1 ? 'var(--accent3)' : (hasCursors[0] === 0 ? 'var(--accent)' : hasCursors[0] === 1 ? 'var(--accent2)' : 'var(--accent3)'))
        : 'transparent'
      const rowStyle = isActive
        ? `background:rgba(255,255,255,0.02);border-left:2px solid ${borderColor};padding-left:6px;`
        : `border-left:2px solid transparent;padding-left:6px;`

      let cursorsHTML = ''
      if (hasCursors) cursorsHTML = hasCursors.map(ui => buildCursorHTML(ui)).join('')

      html += `<div style="${rowStyle}transition:all 0.4s;"><span class="ln">${lineNum}</span>${content}${cursorsHTML}</div>`
    })

    body.innerHTML = html
  }

  function animateTypeStep() {
    const step = sequences[seqIndexRef.current % sequences.length]
    const { user, line, type, delay } = step

    cursorPosRef.current[user].line = line
    renderLines()

    timerRef.current = setTimeout(() => {
      lineContentRef.current[line] = type
      renderLines()
      seqIndexRef.current++
      timerRef.current = setTimeout(animateTypeStep, delay + Math.random() * 400)
    }, 600)
  }

  useEffect(() => {
    renderLines()
    timerRef.current = setTimeout(animateTypeStep, 1500)
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <section id="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '900px', width: '100%' }}>
        <div className="hero-badge">
          <div className="badge-dot"></div>
          Beta disponible · Sin tarjeta requerida
        </div>
        <h1 className="hero-title">
          <span className="line1">Codificá junto</span>
          <span className="line2">a tu equipo.</span>
        </h1>
        <p className="hero-sub">
          DevSync es el IDE en la nube que elimina las barreras de configuración.
          Editá, ejecutá y colaborá en tiempo real desde cualquier dispositivo.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg" onClick={() => openModal('register')}>
            <i className="bi bi-lightning-charge-fill"></i> Empezar gratis
          </button>
          <a href="#how" className="btn btn-outline btn-lg">Ver cómo funciona</a>
        </div>

        {/* Code preview */}
        <div className="hero-code">
          <div className="code-titlebar">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
            <span className="code-filename">main.py · DevSync Workspace</span>
            <div className="code-users">
              <span className="user-cursor uc1">● Ana</span>
              <span className="user-cursor uc2">● Luis</span>
              <span className="user-cursor uc3">● Carla</span>
            </div>
          </div>
          <div className="code-body" ref={codeBodyRef}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
