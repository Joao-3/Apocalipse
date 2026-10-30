import type { DesignDocument, DesignNode, PageProps } from '../shared/types/design'
import ActionButton from '../components/buttons/ActionButton'
import ContentCard from '../components/cards/ContentCard'
import TextBlock from '../components/text/TextBlock'
import FormField from '../components/forms/FormField'
import TableElement from '../components/tables/TableElement'
import ImageElement from '../components/images/ImageElement'
import VideoElement from '../components/videos/VideoElement'
import AudioElement from '../components/audio/AudioElement'
import IconElement from '../components/icons/IconElement'
import ShapeElement from '../components/shapes/ShapeElement'
import DividerElement from '../components/dividers/DividerElement'

type Props = PageProps & { page: DesignDocument; node: DesignNode; hasForm: boolean; inputLabel?: DesignNode; labelInput?: DesignNode }

export default function NodeRenderer({ page, pages, node, hasForm, inputLabel, labelInput, onNavigate, onNotice }: Props) {
  if (['eyebrow', 'heading', 'paragraph'].includes(node.type)) return <TextBlock node={node} pageId={page.id} inputFor={labelInput} />
  if (node.type === 'button') return <ActionButton node={node} pageId={page.id} pages={pages} hasForm={hasForm} onNavigate={onNavigate} onNotice={onNotice} />
  if (node.type === 'input' || node.type === 'dropdown' || node.type === 'checkbox') return <FormField node={node} page={page} associatedLabel={inputLabel} />
  if (node.type === 'card') return <ContentCard node={node} pageId={page.id} />
  if (node.type === 'table') return <TableElement node={node} pageId={page.id} />
  if (node.type === 'image') return <ImageElement node={node} pageId={page.id} />
  if (node.type === 'video') return <VideoElement node={node} pageId={page.id} />
  if (node.type === 'audio') return <AudioElement node={node} pageId={page.id} />
  if (node.type === 'icon') return <IconElement node={node} pageId={page.id} />
  if (node.type === 'divider') return <DividerElement node={node} pageId={page.id} />
  return <ShapeElement node={node} pageId={page.id} />
}
