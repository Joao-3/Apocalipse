import './styles/base'
import './styles/layout'
import './styles/components'
import './styles/generated'
import Notice from './Notice'
import PageRouter from './PageRouter'
import { useNotice } from './useNotice'

export default function App() {
  const { message, showNotice } = useNotice()

  return (
    <main className="project-shell">
      <PageRouter onNotice={showNotice} />
      <Notice message={message} />
    </main>
  )
}
