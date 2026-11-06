import { useState, type ComponentType } from 'react'
import type { PageProps } from '../shared/types/design'
import { pages } from '../pagesdata/index'
import LoginPage from '../pages/LoginPage'
import CadastroPage from '../pages/CadastroPage'
import AdicionarProcurarPage from '../pages/AdicionarProcurarPage'
import EvasaoEscolarPage from '../pages/EvasaoEscolarPage'
import TurmasPage from '../pages/TurmasPage'

type Props = Pick<PageProps, 'onNotice'>

const pageComponents: Record<string, ComponentType<PageProps>> = {
  "page-home": LoginPage,
  "page-6gn1n9z": CadastroPage,
  "page-xk7f8dp": AdicionarProcurarPage,
  "page-jia92pq": EvasaoEscolarPage,
  "page-u89s9oe": TurmasPage,
}

const initialPageId = "page-u89s9oe"

export default function PageRouter({ onNotice }: Props) {
  const [activePageId, setActivePageId] = useState(initialPageId)
  const ActivePage = pageComponents[activePageId] ?? pageComponents[initialPageId]

  return <ActivePage key={activePageId} pages={pages} onNavigate={setActivePageId} onNotice={onNotice} />
}
