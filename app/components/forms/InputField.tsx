import type { DesignDocument, DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'
import { getInputLabel, inferInputType } from '../../shared/utils/formSemantics'

type Props = { node: DesignNode; page: DesignDocument; associatedLabel?: DesignNode }

export default function InputField({ node, page, associatedLabel }: Props) {
  const className = ['email-field', nodeClassName(page.id, node)].join(' ')
  const type = node.inputType ?? inferInputType({ ...node, text: associatedLabel?.text ?? node.text })
  const label = associatedLabel?.text.trim() || getInputLabel({ ...node, inputType: type })
  const isRegistration = /register|registration|sign\s?up|create account/i.test(page.name) || page.nodes.some((item) => /confirm.{0,24}password|password.{0,24}confirm/i.test(item.text))
  const autoComplete = type === 'email' ? 'email' : type === 'password' ? (/confirm|repeat|again/i.test(label) || isRegistration ? 'new-password' : 'current-password') : type === 'tel' ? 'tel' : undefined
  const inputId = nodeClassName(page.id, node)
  const input = <input id={inputId} type={type} name={inputId} placeholder={node.placeholder ?? 'Enter a value'} aria-label={associatedLabel ? undefined : label} aria-labelledby={associatedLabel ? nodeClassName(page.id, associatedLabel) : undefined} autoComplete={autoComplete} required={node.required ?? true} />
  return associatedLabel ? <div className={className}>{input}</div> : <label className={className}><span className="sr-only">{label}</span>{input}</label>
}
