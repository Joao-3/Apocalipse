import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function ImageElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  return <img className={['content-image', nodeClassName(pageId, node)].join(' ')} src={node.src ?? ''} alt={node.alt ?? node.text} draggable={false} />
}
