import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function IconElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  return <span className={['content-icon', nodeClassName(pageId, node)].join(' ')} role="img" aria-label={node.text}>{node.iconName === 'check' ? '✓' : node.iconName === 'arrow' ? '↗' : '✳'}</span>
}
