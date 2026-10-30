import { useEffect, useRef, useState, type ComponentType } from 'react'
import './app.css'
import { pages } from './pages'
import type { PageProps } from '../shared/types/design'
import LoginPage from '../pages/LoginPage'
import CadastroPage from '../pages/CadastroPage'
import AdicionarProcurarPage from '../pages/AdicionarProcurarPage'
import EvasaoEscolarPage from '../pages/EvasaoEscolarPage'
import TurmasPage from '../pages/TurmasPage'

const pageComponents: Record<string, ComponentType<PageProps>> = {
  "page-home": LoginPage,
  "page-6gn1n9z": CadastroPage,
  "page-xk7f8dp": AdicionarProcurarPage,
  "page-jia92pq": EvasaoEscolarPage,
  "page-u89s9oe": TurmasPage,
}

export default function App() {
  const [notice, setNotice] = useState('')
  const noticeTimer = useRef<number | undefined>(undefined)
  const showNotice = (message: string, duration = 2.4) => {
    if (noticeTimer.current !== undefined) window.clearTimeout(noticeTimer.current)
    setNotice(message)
    if (!message) { noticeTimer.current = undefined; return }
    noticeTimer.current = window.setTimeout(() => { setNotice(''); noticeTimer.current = undefined }, Math.max(1, duration) * 1000)
  }
  useEffect(() => () => { if (noticeTimer.current !== undefined) window.clearTimeout(noticeTimer.current) }, [])
  const [activePageId, setActivePageId] = useState("page-u89s9oe")
  const ActivePage = pageComponents[activePageId] ?? pageComponents["page-u89s9oe"]

  return (
    <main className="project-shell">
      <ActivePage pages={pages} onNavigate={setActivePageId} onNotice={showNotice} />
      <p className={'notice ' + (notice ? 'visible' : '')} role="status">{notice}</p>
    </main>
  )
}
