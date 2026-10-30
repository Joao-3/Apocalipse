import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function ContentCard({ node, pageId }: { node: DesignNode; pageId: string }) {
  return <section className={['feature-card', nodeClassName(pageId, node)].join(' ')}><span className="card-mark" aria-hidden="true">✳</span><p>{node.text}</p><span className="card-arrow" aria-hidden="true">↗</span></section>
}
