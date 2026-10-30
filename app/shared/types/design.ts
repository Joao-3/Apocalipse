export type NodeKind = 'eyebrow' | 'heading' | 'paragraph' | 'button' | 'input' | 'card' | 'divider' | 'image' | 'video' | 'audio' | 'icon' | 'shape' | 'dropdown' | 'checkbox' | 'table'
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'

export type DesignNode = {
  id: string
  type: NodeKind
  text: string
  placeholder?: string
  inputType?: InputType
  required?: boolean
  fontSize?: number
  fontFamily?: 'DM Sans' | 'Manrope' | 'Arial' | 'Verdana' | 'Georgia' | 'Times New Roman' | 'Trebuchet MS' | 'Courier New' | 'system-ui'
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  color?: string
  background?: string
  radius?: number
  padding?: number
  width?: number
  height?: number
  edgeResize?: { left?: number; right?: number; top?: number; bottom?: number }
  x?: number
  y?: number
  positioned?: boolean
  rotation?: number
  scale?: number
  src?: string
  alt?: string
  imageFit?: 'contain' | 'cover'
  poster?: string
  mediaControls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  iconName?: 'sparkle' | 'check' | 'arrow'
  shape?: 'rectangle' | 'circle' | 'line'
  options?: string[]
  tableColumns?: string[]
  tableRows?: string[][]
  tableHeaderVisible?: boolean
  checked?: boolean
  buttonAction?: 'notice' | 'navigate' | 'submit'
  buttonActionExplicit?: boolean
  buttonMessageEnabled?: boolean
  buttonMessage?: string
  buttonMessageDuration?: number
  targetPageId?: string
  align?: 'left' | 'center' | 'right'
}

export type PageNavigation = {
  visible: boolean
  brand: string
  links: string[]
  showLogin: boolean
  loginLabel: string
}

export type DesignDocument = {
  id: string
  name: string
  nodes: DesignNode[]
  backgroundColor?: string
  backgroundImage?: string
  canvasWidth?: number
  canvasHeight?: number
  designWidth?: number
  designHeight?: number
  navigation?: PageNavigation
  footerVisible?: boolean
}

export type PageProps = {
  pages: DesignDocument[]
  onNavigate: (pageId: string) => void
  onNotice: (message: string, duration?: number) => void
}
