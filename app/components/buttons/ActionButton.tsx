import type { DesignDocument, DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'
import { shouldSubmitButton } from '../../shared/utils/formSemantics'

type Props = { node: DesignNode; pageId: string; pages: DesignDocument[]; hasForm: boolean; onNavigate: (pageId: string) => void; onNotice: (message: string, duration?: number) => void }

export default function ActionButton({ node, pageId, pages, hasForm, onNavigate, onNotice }: Props) {
  const destination = node.buttonAction === 'navigate' ? pages.find((page) => page.id === node.targetPageId) ?? pages.find((page) => page.id !== pageId) : undefined
  const submitsForm = shouldSubmitButton(node, hasForm)
  const type = submitsForm ? 'submit' : 'button'
  const className = ['primary-button', nodeClassName(pageId, node)].join(' ')
  const handleClick = () => {
    if (destination) { onNotice(''); onNavigate(destination.id); return }
    if (node.buttonAction === 'submit') { onNotice('Add an input field to submit this form.'); return }
    onNotice(node.buttonMessageEnabled === false ? '' : node.buttonMessage ?? 'You’re on your way!', node.buttonMessageDuration ?? 2.4)
  }
  return <button className={className} type={type} onClick={submitsForm ? undefined : handleClick}>{node.text}</button>
}
