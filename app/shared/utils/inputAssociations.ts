import type { DesignDocument, DesignNode } from '../types/design'

export function findInputLabels(page: DesignDocument) {
  const labels = page.nodes.filter((node) => ['eyebrow', 'paragraph'].includes(node.type) && node.text.trim())
  const inputs = page.nodes.filter((node) => node.type === 'input' && node.positioned).sort((a, b) => (a.y ?? 0) - (b.y ?? 0))
  const usedLabelIds = new Set<string>()
  const inputLabels = new Map<string, DesignNode>()
  const labelInputs = new Map<string, DesignNode>()
  for (const input of inputs) {
    const nearby = labels.filter((label) => {
      if (!label.positioned || usedLabelIds.has(label.id)) return false
      const verticalGap = (input.y ?? 0) - (label.y ?? 0)
      const horizontalGap = Math.abs((input.x ?? 0) - (label.x ?? 0))
      return verticalGap >= -4 && verticalGap <= 72 && horizontalGap <= 220
    }).sort((a, b) => {
      const score = (label: DesignNode) => Math.max(0, (input.y ?? 0) - (label.y ?? 0)) + Math.abs((input.x ?? 0) - (label.x ?? 0)) * 0.15
      return score(a) - score(b)
    })
    const label = nearby[0]
    if (!label) continue
    usedLabelIds.add(label.id)
    inputLabels.set(input.id, label)
    labelInputs.set(label.id, input)
  }
  return { inputLabels, labelInputs }
}
