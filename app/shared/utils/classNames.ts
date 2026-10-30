import type { DesignNode } from '../types/design'

function safePart(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'element'
}

export function nodeClassName(pageId: string, node: DesignNode) {
  return ['node', safePart(pageId), safePart(node.id)].join('-')
}
