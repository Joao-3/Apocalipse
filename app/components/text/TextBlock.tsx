import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

type Props = { node: DesignNode; pageId: string; inputFor?: DesignNode }

export default function TextBlock({ node, pageId, inputFor }: Props) {
  const className = [node.type === 'eyebrow' ? 'eyebrow' : node.type === 'heading' ? 'hero-title' : 'hero-copy', nodeClassName(pageId, node)].join(' ')
  const inputId = inputFor ? nodeClassName(pageId, inputFor) : undefined
  if (node.type === 'eyebrow') return inputFor ? <label id={nodeClassName(pageId, node)} htmlFor={inputId} className={className}>{node.text}</label> : <p className={className}>{node.text}</p>
  if (node.type === 'heading') return <h1 className={className}>{node.text}</h1>
  return inputFor ? <label id={nodeClassName(pageId, node)} htmlFor={inputId} className={className}>{node.text}</label> : <p className={className}>{node.text}</p>
}
