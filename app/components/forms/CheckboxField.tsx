import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function CheckboxField({ node, pageId }: { node: DesignNode; pageId: string }) {
  const name = node.text.toLowerCase().replace(/[^a-z0-9]+/g, '-') || node.id
  return <label className={['check-field', nodeClassName(pageId, node)].join(' ')}><input type="checkbox" name={name} defaultChecked={node.checked ?? false} /><span>{node.text}</span></label>
}
