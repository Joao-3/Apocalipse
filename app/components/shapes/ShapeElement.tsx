import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function ShapeElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  return <div className={['content-shape', nodeClassName(pageId, node)].join(' ')} aria-hidden="true" />
}
