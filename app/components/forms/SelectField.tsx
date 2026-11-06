import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function SelectField({ node, pageId }: { node: DesignNode; pageId: string }) {
  return <label className={['select-field', nodeClassName(pageId, node)].join(' ')}><span className="sr-only">{node.text}</span><select aria-label={node.text} defaultValue=""><option value="" disabled>{node.placeholder ?? 'Select an option'}</option>{(node.options ?? ['Option 1', 'Option 2']).map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
}
