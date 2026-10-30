import type { DesignNode } from '../../shared/types/design'
import { nodeClassName } from '../../shared/utils/classNames'

export default function VideoElement({ node, pageId }: { node: DesignNode; pageId: string }) {
  const className = nodeClassName(pageId, node)
  return node.src ? <video className={['content-video', className].join(' ')} src={node.src} poster={node.poster} controls={node.mediaControls !== false} autoPlay={node.autoPlay ?? false} loop={node.loop ?? false} muted={node.muted ?? false} playsInline preload="metadata" /> : <div className={['content-video', 'content-media-placeholder', className].join(' ')}>Add a video URL or upload a file</div>
}
