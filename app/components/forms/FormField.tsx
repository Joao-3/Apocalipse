import type { DesignDocument, DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'
import { getInputLabel, inferInputType } from '../../shared/utils/formSemantics'

type Props = { node: DesignNode; page: DesignDocument; associatedLabel?: DesignNode }

export default function FormField({ node, page, associatedLabel }: Props) {
  const className = [node.type === 'input' ? 'email-field' : node.type === 'dropdown' ? 'select-field' : 'check-field', nodeClassName(page.id, node)].join(' ')
  if (node.type === 'input') {
    const type = node.inputType ?? inferInputType({ ...node, text: associatedLabel?.text ?? node.text })
    const label = associatedLabel?.text.trim() || getInputLabel({ ...node, inputType: type })
    const isRegistration = /register|registration|sign\s?up|create account/i.test(page.name) || page.nodes.some((item) => /confirm.{0,24}password|password.{0,24}confirm/i.test(item.text))
    const autoComplete = type === 'email' ? 'email' : type === 'password' ? (/confirm|repeat|again/i.test(label) || isRegistration ? 'new-password' : 'current-password') : type === 'tel' ? 'tel' : undefined
    const inputId = nodeClassName(page.id, node)
    const input = <input id={inputId} type={type} name={inputId} placeholder={node.placeholder ?? 'Enter a value'} aria-label={associatedLabel ? undefined : label} aria-labelledby={associatedLabel ? nodeClassName(page.id, associatedLabel) : undefined} autoComplete={autoComplete} required={node.required ?? true} />
    return associatedLabel ? <div className={className}>{input}</div> : <label className={className}><span className="sr-only">{label}</span>{input}</label>
  }
  if (node.type === 'dropdown') return <label className={className}><span className="sr-only">{node.text}</span><select aria-label={node.text} defaultValue=""><option value="" disabled>{node.placeholder ?? 'Select an option'}</option>{(node.options ?? ['Option 1', 'Option 2']).map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
  return <label className={className}><input type="checkbox" name={node.text.toLowerCase().replace(/[^a-z0-9]+/g, '-') || node.id} defaultChecked={node.checked ?? false} /><span>{node.text}</span></label>
}
