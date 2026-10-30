import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function DividerElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  return <hr className={['divider', nodeClassName(pageId, node)].join(' ')} />
}
