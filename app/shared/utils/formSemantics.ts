import type { DesignNode, InputType } from '../types/design'

export function inferInputType(node: Pick<DesignNode, 'inputType' | 'text' | 'placeholder'>): InputType {
  if (node.inputType) return node.inputType
  const hint = (node.text + ' ' + (node.placeholder ?? '')).toLowerCase()
  if (/\b(password|passcode|pin)\b/.test(hint)) return 'password'
  if (/\b(phone|telephone|mobile)\b/.test(hint)) return 'tel'
  if (/\b(e-?mail|mail)\b|@/.test(hint)) return 'email'
  if (/\b(url|website|web address)\b/.test(hint)) return 'url'
  if (/\b(number|age|quantity|count)\b/.test(hint)) return 'number'
  return 'text'
}

export function getInputLabel(node: Pick<DesignNode, 'inputType' | 'text' | 'placeholder'>) {
  const label = node.text.trim()
  const type = inferInputType(node)
  if (!label) return node.placeholder?.trim() || 'Input'
  if (type === 'password' && /e-?mail/i.test(label)) return 'Password'
  if (type === 'email' && /password/i.test(label)) return 'Email address'
  return label
}

export function shouldSubmitButton(node: Pick<DesignNode, 'buttonAction' | 'buttonActionExplicit' | 'text'>, hasForm: boolean) {
  if (!hasForm || node.buttonAction === 'navigate' || node.buttonAction === 'notice') return false
  if (node.buttonAction === 'submit') return true
  if (node.buttonActionExplicit) return false
  return /^(log[\s-]?in|sign[\s-]?in|sign[\s-]?up|register(?: now)?|create (?:an? )?account|submit(?: form)?|continue)$/i.test(node.text.trim())
}
