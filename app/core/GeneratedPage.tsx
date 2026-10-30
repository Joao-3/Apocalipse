import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { DesignDocument, PageProps } from '../shared/types/design'
import NodeRenderer from './NodeRenderer'
import SiteFooter from '../components/layout/SiteFooter'
import SiteNavigation from '../components/layout/SiteNavigation'
import { findInputLabels } from '../shared/utils/inputAssociations'

export default function GeneratedPage({ page, pages, onNavigate, onNotice }: PageProps & { page: DesignDocument }) {
  const navigation = page.navigation ?? { visible: true, brand: 'notionary', links: [], showLogin: false, loginLabel: 'Log in' }
  const hasForm = page.nodes.some((node) => node.type === 'input')
  const freeform = page.nodes.every((node) => node.positioned === true)
  const canvasWidth = Math.max(1, page.canvasWidth ?? 1024)
  const canvasHeight = Math.max(1, page.canvasHeight ?? 768)
  const designWidth = Math.max(1, page.designWidth ?? canvasWidth)
  const designHeight = Math.max(1, page.designHeight ?? canvasHeight)
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight, pixelRatio: window.devicePixelRatio || 1 }))
  const initialPixelRatio = useRef(viewport.pixelRatio)
  useEffect(() => {
    const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight, pixelRatio: window.devicePixelRatio || 1 })
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])
  const browserZoom = viewport.pixelRatio / initialPixelRatio.current
  const designScale = Math.min(canvasWidth / designWidth, canvasHeight / designHeight)
  const pageScale = Math.min(viewport.width / canvasWidth, viewport.height / canvasHeight)
  const canvasScale = designScale * pageScale * browserZoom
  const canvasTop = Math.max(0, (viewport.height - designHeight * canvasScale) / 2) - (navigation.visible ? 69 : 0)
  const { inputLabels, labelInputs } = findInputLabels(page)
  const pageStyle: CSSProperties = {
    width: '100%',
    minHeight: '100vh',
    maxWidth: 'none',
    backgroundColor: page.backgroundColor ?? '#ffffff',
    backgroundImage: page.backgroundImage ? 'url(' + JSON.stringify(page.backgroundImage) + ')' : undefined,
    backgroundSize: page.backgroundImage ? 'cover' : undefined,
    backgroundPosition: 'center',
  }
  const content = page.nodes.map((node) => <NodeRenderer key={node.id} page={page} pages={pages} node={node} hasForm={hasForm} inputLabel={inputLabels.get(node.id)} labelInput={labelInputs.get(node.id)} onNavigate={onNavigate} onNotice={onNotice} />)
  return <section className={['page-shell', freeform ? 'freeform-page' : ''].filter(Boolean).join(' ')} style={pageStyle}>
    {navigation.visible && <SiteNavigation navigation={navigation} onNotice={onNotice} />}
    <section className={['hero', freeform ? 'freeform-hero' : ''].filter(Boolean).join(' ')} id="home">
      <div className={['hero-content', freeform ? 'freeform-content' : '', freeform ? navigation.visible ? 'with-nav' : 'without-nav' : ''].filter(Boolean).join(' ')} style={freeform ? { width: designWidth, height: designHeight, left: '50%', top: canvasTop, transform: `translateX(-50%) scale(${canvasScale})`, transformOrigin: 'top center' } : undefined}>
        {hasForm ? <form className={['canvas-form', freeform ? 'freeform-form' : 'flow-form'].join(' ')} onSubmit={(event) => { event.preventDefault(); onNotice('Form submitted successfully.') }}>{content}</form> : content}
      </div>
    </section>
    {page.footerVisible !== false && <SiteFooter />}
  </section>
}
