import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function AudioElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  const className = nodeClassName(pageId, node)
  return node.src ? <audio className={['content-audio', className].join(' ')} src={node.src} controls={node.mediaControls !== false} autoPlay={node.autoPlay ?? false} loop={node.loop ?? false} muted={node.muted ?? false} preload="metadata" /> : <div className={['content-audio', 'content-media-placeholder', className].join(' ')}>Add an audio URL or upload a file</div>
}
