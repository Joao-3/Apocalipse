import type { DesignDocument, DesignNode, PageProps } from '../shared/types/design'
import ActionButton from '../components/buttons/ActionButton'
import ContentCard from '../components/cards/ContentCard'
import TextBlock from '../components/text/TextBlock'
import InputField from '../components/forms/InputField'
import SelectField from '../components/forms/SelectField'
import CheckboxField from '../components/forms/CheckboxField'
import TableElement from '../components/tables/TableElement'
import ImageElement from '../components/images/ImageElement'
import VideoElement from '../components/videos/VideoElement'
import AudioElement from '../components/audio/AudioElement'
import IconElement from '../components/icons/IconElement'
import ShapeElement from '../components/shapes/ShapeElement'
import DividerElement from '../components/dividers/DividerElement'

type Props = PageProps & { page: DesignDocument; node: DesignNode; hasForm: boolean; inputLabel?: DesignNode; labelInput?: DesignNode }

export default function NodeRenderer({ page, pages, node, hasForm, inputLabel, labelInput, onNavigate, onNotice }: Props) {
  switch (node.type) {
    case 'eyebrow':
    case 'heading':
    case 'paragraph':
      return <TextBlock node={node} pageId={page.id} inputFor={labelInput} />
    case 'button':
      return <ActionButton node={node} pageId={page.id} pages={pages} hasForm={hasForm} onNavigate={onNavigate} onNotice={onNotice} />
    case 'input':
      return <InputField node={node} page={page} associatedLabel={inputLabel} />
    case 'dropdown':
      return <SelectField node={node} pageId={page.id} />
    case 'checkbox':
      return <CheckboxField node={node} pageId={page.id} />
    case 'card':
      return <ContentCard node={node} pageId={page.id} />
    case 'table':
      return <TableElement node={node} pageId={page.id} />
    case 'image':
      return <ImageElement node={node} pageId={page.id} />
    case 'video':
      return <VideoElement node={node} pageId={page.id} />
    case 'audio':
      return <AudioElement node={node} pageId={page.id} />
    case 'icon':
      return <IconElement node={node} pageId={page.id} />
    case 'divider':
      return <DividerElement node={node} pageId={page.id} />
    case 'shape':
      return <ShapeElement node={node} pageId={page.id} />
    default:
      return null
  }
}
