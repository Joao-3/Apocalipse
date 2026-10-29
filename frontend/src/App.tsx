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

import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import './App.css'

const pages: DesignDocument[] = [
  {
    "id": "page-home",
    "name": "Login",
    "backgroundColor": "#d4d4d4",
    "navigation": {
      "visible": false,
      "brand": "noctionary",
      "links": [
        "Features",
        "Stories",
        "Pricing"
      ],
      "showLogin": true,
      "loginLabel": "Log in"
    },
    "footerVisible": false,
    "nodes": [
      {
        "id": "node-ixajxtn",
        "type": "paragraph",
        "text": "email",
        "fontSize": 16,
        "color": "#747387",
        "x": 273,
        "y": 49.599998474121094,
        "positioned": true,
        "strikethrough": false,
        "underline": false,
        "italic": false,
        "bold": false
      },
      {
        "id": "node-ll9jdq6",
        "type": "input",
        "text": "email",
        "placeholder": "coloque seu email aqui",
        "color": "#76758a",
        "background": "#ffffff",
        "radius": 12,
        "x": 273,
        "y": 74.28750991821289,
        "positioned": true,
        "inputType": "email"
      },
      {
        "id": "node-e9i4bbc",
        "type": "paragraph",
        "text": "senha",
        "fontSize": 16,
        "color": "#747387",
        "x": 273,
        "y": 125.28750610351562,
        "positioned": true
      },
      {
        "id": "node-pc1jnz7",
        "type": "input",
        "text": "email",
        "placeholder": "coloque sua senha aqui",
        "color": "#76758a",
        "background": "#ffffff",
        "radius": 12,
        "x": 273,
        "y": 160,
        "scale": 1,
        "positioned": true,
        "inputType": "password"
      },
      {
        "id": "node-qut5x1h",
        "type": "button",
        "text": "Entrar",
        "background": "#707070",
        "color": "#ffffff",
        "radius": 12,
        "x": 324.0999984741211,
        "y": 235,
        "buttonAction": "notice",
        "positioned": true,
        "buttonMessageEnabled": true,
        "buttonMessage": "Redirecionando...",
        "buttonMessageDuration": 2.5
      },
      {
        "id": "node-65og63r",
        "type": "button",
        "text": "Cadastra-se já",
        "background": "#5949dd",
        "color": "#ffffff",
        "radius": 12,
        "buttonAction": "navigate",
        "x": 324.10003662109375,
        "y": 310,
        "positioned": true,
        "buttonActionExplicit": true,
        "targetPageId": "page-6gn1n9z"
      }
    ],
    "canvasWidth": 800,
    "canvasHeight": 400,
    "designWidth": 800,
    "designHeight": 400
  },
  {
    "id": "page-6gn1n9z",
    "name": "Cadastro",
    "backgroundColor": "#d4d4d4",
    "navigation": {
      "visible": false,
      "brand": "noctionary",
      "links": [
        "Features",
        "Stories",
        "Pricing"
      ],
      "showLogin": true,
      "loginLabel": "Log in"
    },
    "footerVisible": false,
    "nodes": [
      {
        "id": "node-82ahvom",
        "type": "paragraph",
        "text": "email",
        "fontSize": 16,
        "color": "#747387",
        "x": 269.77972936630266,
        "y": 46.78751730918884,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-49zm35c",
        "type": "input",
        "text": "email",
        "placeholder": "coloque seu email aqui",
        "color": "#76758a",
        "background": "#ffffff",
        "radius": 12,
        "x": 319.212507247925,
        "y": 96.8899941444397,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-ihnwt6r",
        "type": "input",
        "text": "email",
        "placeholder": "coloque sua senha aqui",
        "color": "#76758a",
        "background": "#ffffff",
        "radius": 12,
        "x": 319.21254158020037,
        "y": 197.28503847122192,
        "scale": 1.45,
        "positioned": true,
        "inputType": "password"
      },
      {
        "id": "node-ddeoawg",
        "type": "button",
        "text": "Cadastrar",
        "background": "#707070",
        "color": "#ffffff",
        "radius": 12,
        "x": 372.7150583267212,
        "y": 470.3249716758728,
        "positioned": true,
        "scale": 1.45,
        "buttonMessage": "Cadastrado"
      },
      {
        "id": "node-n43rxjh",
        "type": "paragraph",
        "text": "confirme sua senha",
        "fontSize": 16,
        "color": "#747387",
        "x": 378.8392066955568,
        "y": 337.5,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-j4lux96",
        "type": "paragraph",
        "text": "Cadastro",
        "fontSize": 25,
        "color": "#747387",
        "x": 408.9013009071352,
        "y": 0.4500007629394531,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-ulk008f",
        "type": "paragraph",
        "text": "senha",
        "fontSize": 16,
        "color": "#747387",
        "x": 263.95621800422686,
        "y": 156.15997743606567,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-ejilkih",
        "type": "input",
        "text": "email",
        "placeholder": "coloque sua senha aqui",
        "color": "#76758a",
        "background": "#ffffff",
        "radius": 12,
        "x": 319.212507247925,
        "y": 394,
        "positioned": true,
        "inputType": "password",
        "scale": 1.45
      },
      {
        "id": "node-by32vcy",
        "type": "paragraph",
        "text": "coloque o que você é",
        "fontSize": 16,
        "color": "#747387",
        "x": 382.1946172714235,
        "y": 265,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-8on3sdo",
        "type": "checkbox",
        "text": "pai/mãe",
        "checked": false,
        "color": "#4d4c5e",
        "x": 581.2918968200686,
        "y": 304.88750076293945,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-sy6blrg",
        "type": "checkbox",
        "text": "professor",
        "checked": false,
        "color": "#4d4c5e",
        "x": 427.5877180099489,
        "y": 304.8999557495117,
        "positioned": true,
        "scale": 1.45
      },
      {
        "id": "node-349jskc",
        "type": "checkbox",
        "text": "diretor",
        "checked": false,
        "color": "#4d4c5e",
        "x": 288.06621122360247,
        "y": 304.9000052213669,
        "positioned": true,
        "scale": 1.45,
        "align": "center"
      },
      {
        "id": "node-scj7xx4",
        "type": "button",
        "text": "volte",
        "background": "#5949dd",
        "color": "#ffffff",
        "radius": 12,
        "buttonAction": "navigate",
        "x": -47.90377998352055,
        "y": 491.50000739097595,
        "positioned": true,
        "scale": 1.3,
        "width": 183,
        "edgeResize": {
          "left": -86.53846153846155
        }
      }
    ],
    "canvasWidth": 800,
    "canvasHeight": 533,
    "designWidth": 900,
    "designHeight": 533
  },
  {
    "id": "page-xk7f8dp",
    "name": "Adicionar-Procurar",
    "nodes": [
      {
        "id": "node-wqkae9t",
        "type": "paragraph",
        "text": "Adicione aluno",
        "fontSize": 16,
        "color": "#000000",
        "x": 115,
        "y": 130,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-ei5ajpq",
        "type": "paragraph",
        "text": "Procure um aluno:",
        "fontSize": 16,
        "color": "#000000",
        "x": 91.48750305175781,
        "y": 292,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-2wdzs74",
        "type": "paragraph",
        "text": "ano letivo",
        "fontSize": 16,
        "color": "#000000",
        "x": 299.34997367858887,
        "y": 97.29999923706055,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-t1p8qz1",
        "type": "paragraph",
        "text": "turma",
        "fontSize": 16,
        "color": "#000000",
        "x": 313.0125370025635,
        "y": 150,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-rjyee0e",
        "type": "paragraph",
        "text": "nome do aluno",
        "fontSize": 16,
        "color": "#000000",
        "x": 450.5,
        "y": 117.29999923706055,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-v85fpz9",
        "type": "paragraph",
        "text": "ano letivo",
        "fontSize": 16,
        "color": "#000000",
        "x": 299.3500118255615,
        "y": 259.29999923706055,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-yhfk0mx",
        "type": "paragraph",
        "text": "turma",
        "fontSize": 16,
        "color": "#000000",
        "x": 313.0125370025635,
        "y": 315,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-qrn5p8s",
        "type": "paragraph",
        "text": "nome do aluno",
        "fontSize": 16,
        "color": "#000000",
        "x": 450.5,
        "y": 282.29999923706055,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-o988zl5",
        "type": "button",
        "text": "volte",
        "background": "#5949dd",
        "color": "#ffffff",
        "radius": 12,
        "buttonAction": "navigate",
        "x": -68,
        "y": 449.9000015258789,
        "positioned": true,
        "width": 183,
        "edgeResize": {
          "left": -100
        }
      },
      {
        "id": "node-zn65i7v",
        "type": "button",
        "text": "veja todas as chances\nde evasão escolar",
        "background": "#707070",
        "color": "#ffffff",
        "radius": 12,
        "buttonAction": "navigate",
        "buttonMessageEnabled": true,
        "buttonMessage": "Redirecionando...",
        "buttonMessageDuration": 2.5,
        "x": 267.4999885559082,
        "y": 390.8999938964844,
        "positioned": true,
        "buttonActionExplicit": true,
        "targetPageId": "page-jia92pq",
        "bold": true,
        "fontSize": 13
      }
    ],
    "backgroundColor": "#d4d4d4",
    "canvasWidth": 720,
    "canvasHeight": 514,
    "navigation": {
      "visible": false,
      "brand": "notionary",
      "links": [],
      "showLogin": true,
      "loginLabel": "Log in"
    },
    "footerVisible": false,
    "designWidth": 720,
    "designHeight": 514
  },
  {
    "id": "page-jia92pq",
    "name": "EvasaoEscolar",
    "nodes": [
      {
        "id": "node-6qll3lp",
        "type": "paragraph",
        "text": "Histórico/Faltas do Aluno",
        "fontSize": 16,
        "color": "#000000",
        "x": 60.12504577636719,
        "y": 157.38749313354492,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-4al2w20",
        "type": "paragraph",
        "text": "Turma do aluno",
        "fontSize": 16,
        "color": "#000000",
        "x": 296.8312530517578,
        "y": 60,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-3ryxkzh",
        "type": "paragraph",
        "text": "Nome do aluno",
        "fontSize": 16,
        "color": "#000000",
        "x": 297.99378967285156,
        "y": 125.39999389648438,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-mkzfepr",
        "type": "paragraph",
        "text": "denunciar pro\nconselho tutelar",
        "fontSize": 16,
        "color": "#000000",
        "x": 583.7750091552734,
        "y": 1.5999870300292969,
        "align": "center",
        "background": "#ff0000",
        "padding": 8,
        "radius": 8,
        "positioned": true
      },
      {
        "id": "node-da84p4z",
        "type": "paragraph",
        "text": "Denúncias/Observações\ndos professores",
        "fontSize": 16,
        "color": "#000000",
        "x": 423.48734283447266,
        "y": 192.71245193481445,
        "align": "center",
        "background": "#999999",
        "padding": 8,
        "radius": 8,
        "scale": 1,
        "positioned": true
      },
      {
        "id": "node-0jdxg8f",
        "type": "button",
        "text": "volte",
        "background": "#5949dd",
        "color": "#ffffff",
        "radius": 12,
        "buttonAction": "navigate",
        "x": -75.00624084472656,
        "y": 450.90001678466797,
        "positioned": true,
        "width": 183,
        "edgeResize": {
          "left": -100
        }
      },
      {
        "id": "node-92gl99r",
        "type": "image",
        "text": "Workspace preview",
        "alt": "",
        "src": "https://media.discordapp.net/attachments/1168662119185657888/1564572033734410291/image.png?ex=6ae1c0c1&is=6ae06f41&hm=5e41b10a382244260359f789015ed80511f6c77e8005b916aee806768deb36e3&=&format=webp&quality=lossless&width=374&height=194",
        "width": 420,
        "height": 220,
        "radius": 16,
        "x": -48.51251220703125,
        "y": 175.50000762939453,
        "positioned": true,
        "scale": 0.65
      },
      {
        "id": "node-wekp8k2",
        "type": "image",
        "text": "Workspace preview",
        "alt": "",
        "src": "https://media.discordapp.net/attachments/1168662119185657888/1564572327222452276/image.png?ex=6ae1c107&is=6ae06f87&hm=994f793a587543c0f1d786da05ce4ad693fdd96826c49cdc246fd5fe2ad6a000&=&format=webp&quality=lossless&width=223&height=168",
        "width": 482,
        "height": 316,
        "radius": 16,
        "x": 281.02759552001964,
        "y": 182.61244583129883,
        "positioned": true,
        "scale": 0.45
      }
    ],
    "backgroundColor": "#d4d4d4",
    "canvasWidth": 720,
    "canvasHeight": 514,
    "navigation": {
      "visible": false,
      "brand": "notionary",
      "links": [],
      "showLogin": true,
      "loginLabel": "Log in"
    },
    "footerVisible": false,
    "designWidth": 720,
    "designHeight": 514
  },
  {
    "id": "page-u89s9oe",
    "name": "Turmas",
    "nodes": [
      {
        "id": "node-nl87mhb",
        "type": "paragraph",
        "text": "turma 1",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.88607015126642,
        "y": 95,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-s6hosmc",
        "type": "paragraph",
        "text": "turma 2",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.14886257035648,
        "y": 158,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-ht7wtv1",
        "type": "paragraph",
        "text": "turma 3",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.11081144465292,
        "y": 220.67262345362332,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-af5yxln",
        "type": "paragraph",
        "text": "turma 4",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.0580587476548,
        "y": 282.77642123739446,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-i15mukz",
        "type": "paragraph",
        "text": "turma 5",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.05832441662757,
        "y": 344,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-hytu8ic",
        "type": "paragraph",
        "text": "turma 6",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.007581642823645,
        "y": 406,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-75f5t6h",
        "type": "paragraph",
        "text": "turma 7",
        "fontSize": 19.71758664955071,
        "color": "#000000",
        "x": -52.27330558161352,
        "y": 468,
        "positioned": true,
        "background": "#AAAAAA",
        "padding": 8,
        "radius": 8,
        "scale": 1.28
      },
      {
        "id": "node-ng6kg2x",
        "type": "button",
        "text": "volte",
        "background": "#5949dd",
        "color": "#ffffff",
        "radius": 12,
        "buttonAction": "navigate",
        "x": -134.289212368219,
        "y": 678.8624933325104,
        "positioned": true,
        "scale": 1.35,
        "width": 183,
        "edgeResize": {
          "left": -106.73337502605796
        }
      },
      {
        "id": "node-x1q3iyo",
        "type": "table",
        "text": "Data table",
        "width": 560,
        "height": 220,
        "background": "#ffffff",
        "color": "#343347",
        "radius": 8,
        "tableHeaderVisible": false,
        "tableColumns": [
          "",
          "Column 2",
          "Column 3",
          "Column 4",
          "Column 5",
          "Column 6"
        ],
        "tableRows": [
          [
            "baixa",
            "nenhum",
            "media",
            "media",
            "media",
            "baixa"
          ],
          [
            "media",
            "media",
            "media",
            "media",
            "media",
            "baixa"
          ],
          [
            "media",
            "media",
            "media",
            "alta",
            "media",
            "alta"
          ],
          [
            "baixa",
            "baixa",
            "alta",
            "alta",
            "alta",
            "baixa"
          ],
          [
            "grave",
            "media",
            "alta",
            "alta",
            "alta",
            "alta"
          ]
        ],
        "x": 183.63977485928706,
        "y": 197.0499622566839,
        "positioned": true,
        "scale": 2,
        "edgeResize": {
          "left": -144.09005628517824
        }
      }
    ],
    "backgroundColor": "#D9D9D9",
    "canvasWidth": 800,
    "canvasHeight": 533,
    "navigation": {
      "visible": false,
      "brand": "notionary",
      "links": [],
      "showLogin": true,
      "loginLabel": "Log in"
    },
    "footerVisible": false,
    "designWidth": 1024,
    "designHeight": 768
  }
]

export default function App() {
  const [activePageId, setActivePageId] = useState("page-u89s9oe")
  const [notice, setNotice] = useState('')
  const noticeTimer = useRef<number | undefined>(undefined)
  const showNotice = (message: string, duration = 2.4) => {
    if (noticeTimer.current !== undefined) window.clearTimeout(noticeTimer.current)
    setNotice(message)
    if (!message) { noticeTimer.current = undefined; return }
    noticeTimer.current = window.setTimeout(() => { setNotice(''); noticeTimer.current = undefined }, Math.max(1, duration) * 1000)
  }
  useEffect(() => () => { if (noticeTimer.current !== undefined) window.clearTimeout(noticeTimer.current) }, [])
  const page = pages.find((item) => item.id === activePageId) ?? pages[0]
  const navigation = page.navigation ?? { visible: true, brand: 'notionary', links: [], showLogin: false, loginLabel: 'Log in' }
  const hasForm = page.nodes.some((node) => node.type === 'input')
  const freeform = page.nodes.every((node) => node.positioned === true)
  const canvasWidth = Math.max(1, page.canvasWidth ?? 1024)
  const canvasHeight = Math.max(1, page.canvasHeight ?? 768)
  const designWidth = Math.max(1, page.designWidth ?? canvasWidth)
  const designHeight = Math.max(1, page.designHeight ?? canvasHeight)
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight, pixelRatio: window.devicePixelRatio || 1 }))
  const initialPixelRatio = useRef(viewport.pixelRatio)
  useEffect(() => {
    const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight, pixelRatio: window.devicePixelRatio || 1 })
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])
  const browserZoom = viewport.pixelRatio / initialPixelRatio.current
  const designScale = Math.min(canvasWidth / designWidth, canvasHeight / designHeight)
  const pageScale = Math.min(viewport.width / canvasWidth, viewport.height / canvasHeight)
  const canvasScale = designScale * pageScale * browserZoom
  const canvasTop = Math.max(0, (viewport.height - designHeight * canvasScale) / 2) - (navigation.visible ? 69 : 0)

  function safePart(value: string) {
    return value.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'element'
  }

  function nodeClassName(pageId: string, node: DesignNode) {
    return 'node-' + safePart(pageId) + '-' + safePart(node.id)
  }

  function inferInputType(node: Pick<DesignNode, 'inputType' | 'text' | 'placeholder'>): InputType {
    if (node.inputType) return node.inputType
    const hint = (node.text + ' ' + (node.placeholder ?? '')).toLowerCase()
    if (/\b(password|passcode|pin)\b/.test(hint)) return 'password'
    if (/\b(phone|telephone|mobile)\b/.test(hint)) return 'tel'
    if (/\b(e-?mail|mail)\b|@/.test(hint)) return 'email'
    if (/\b(url|website|web address)\b/.test(hint)) return 'url'
    if (/\b(number|age|quantity|count)\b/.test(hint)) return 'number'
    return 'text'
  }

  function inputLabel(node: Pick<DesignNode, 'inputType' | 'text' | 'placeholder'>) {
    const label = node.text.trim()
    const type = inferInputType(node)
    if (!label) return node.placeholder?.trim() || 'Input'
    if (type === 'password' && /e-?mail/i.test(label)) return 'Password'
    if (type === 'email' && /password/i.test(label)) return 'Email address'
    return label
  }

  function shouldSubmit(node: DesignNode) {
    if (!hasForm || node.buttonAction === 'navigate' || node.buttonAction === 'notice') return false
    if (node.buttonAction === 'submit') return true
    if (node.buttonActionExplicit) return false
    return /^(log[\s-]?in|sign[\s-]?in|sign[\s-]?up|register(?: now)?|create (?:an? )?account|submit(?: form)?|continue)$/i.test(node.text.trim())
  }

  function findInputLabels() {
    const labels = page.nodes.filter((node) => ['eyebrow', 'paragraph'].includes(node.type) && node.text.trim())
    const inputs = page.nodes.filter((node) => node.type === 'input' && node.positioned).sort((a, b) => (a.y ?? 0) - (b.y ?? 0))
    const used = new Set<string>()
    const inputLabels = new Map<string, DesignNode>()
    const labelInputs = new Map<string, DesignNode>()
    for (const input of inputs) {
      const nearby = labels.filter((label) => {
        if (!label.positioned || used.has(label.id)) return false
        const verticalGap = (input.y ?? 0) - (label.y ?? 0)
        const horizontalGap = Math.abs((input.x ?? 0) - (label.x ?? 0))
        return verticalGap >= -4 && verticalGap <= 72 && horizontalGap <= 220
      }).sort((a, b) => {
        const score = (label: DesignNode) => Math.max(0, (input.y ?? 0) - (label.y ?? 0)) + Math.abs((input.x ?? 0) - (label.x ?? 0)) * 0.15
        return score(a) - score(b)
      })
      const label = nearby[0]
      if (!label) continue
      used.add(label.id)
      inputLabels.set(input.id, label)
      labelInputs.set(label.id, input)
    }
    return { inputLabels, labelInputs }
  }

  const { inputLabels, labelInputs } = findInputLabels()

  function renderNode(node: DesignNode): ReactNode {
    const className = nodeClassName(page.id, node)
    if (node.type === 'eyebrow' || node.type === 'heading' || node.type === 'paragraph') {
      const textClass = node.type === 'eyebrow' ? 'eyebrow' : node.type === 'heading' ? 'hero-title' : 'hero-copy'
      const inputFor = labelInputs.get(node.id)
      const inputId = inputFor ? nodeClassName(page.id, inputFor) : undefined
      if (node.type === 'heading') return <h1 className={textClass + ' ' + className}>{node.text}</h1>
      if (inputFor) return <label id={className} htmlFor={inputId} className={textClass + ' ' + className}>{node.text}</label>
      return <p className={textClass + ' ' + className}>{node.text}</p>
    }

    if (node.type === 'button') {
      const destination = node.buttonAction === 'navigate' ? pages.find((item) => item.id === node.targetPageId) ?? pages.find((item) => item.id !== page.id) : undefined
      const submitsForm = shouldSubmit(node)
      const handleClick = () => {
        if (destination) { showNotice(''); setActivePageId(destination.id); return }
        if (node.buttonAction === 'submit') { showNotice('Add an input field to submit this form.'); return }
        showNotice(node.buttonMessageEnabled === false ? '' : node.buttonMessage ?? 'You’re on your way!', node.buttonMessageDuration ?? 2.4)
      }
  return <button className={'primary-button ' + className} type={submitsForm ? 'submit' : 'button'} onClick={submitsForm ? undefined : handleClick}>{node.text}</button>
    }

    if (node.type === 'input') {
      const associatedLabel = inputLabels.get(node.id)
      const type = node.inputType ?? inferInputType({ ...node, text: associatedLabel?.text ?? node.text })
      const label = associatedLabel?.text.trim() || inputLabel({ ...node, inputType: type })
      const id = nodeClassName(page.id, node)
      const registration = /register|registration|sign\s?up|create account/i.test(page.name) || page.nodes.some((item) => /confirm.{0,24}password|password.{0,24}confirm/i.test(item.text))
      const autoComplete = type === 'email' ? 'email' : type === 'password' ? (/confirm|repeat|again/i.test(label) || registration ? 'new-password' : 'current-password') : type === 'tel' ? 'tel' : undefined
      const input = <input id={id} type={type} name={id} placeholder={node.placeholder ?? 'Enter a value'} aria-label={associatedLabel ? undefined : label} aria-labelledby={associatedLabel ? nodeClassName(page.id, associatedLabel) : undefined} autoComplete={autoComplete} required={node.required ?? true} />
      return associatedLabel ? <div className={'email-field ' + className}>{input}</div> : <label className={'email-field ' + className}><span className="sr-only">{label}</span>{input}</label>
    }

    if (node.type === 'dropdown') return <label className={'select-field ' + className}><span className="sr-only">{node.text}</span><select aria-label={node.text} defaultValue=""><option value="" disabled>{node.placeholder ?? 'Select an option'}</option>{(node.options ?? ['Option 1', 'Option 2']).map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
    if (node.type === 'checkbox') return <label className={'check-field ' + className}><input type="checkbox" name={node.text.toLowerCase().replace(/[^a-z0-9]+/g, '-') || node.id} defaultChecked={node.checked ?? false} /><span>{node.text}</span></label>
    if (node.type === 'table') {
      const columns = node.tableColumns?.length ? node.tableColumns : ['Column 1', 'Column 2']
      return <div className={'data-table ' + className}><table><caption className="sr-only">{node.text || 'Data table'}</caption>{node.tableHeaderVisible !== false && <thead><tr>{columns.map((column, index) => <th scope="col" key={index}>{column}</th>)}</tr></thead>}<tbody>{(node.tableRows ?? []).map((row, rowIndex) => <tr key={rowIndex}>{columns.map((_, columnIndex) => <td key={columnIndex}>{row[columnIndex] ?? ''}</td>)}</tr>)}</tbody></table></div>
    }
    if (node.type === 'card') return <section className={'feature-card ' + className}><span className="card-mark" aria-hidden="true">✳</span><p>{node.text}</p><span className="card-arrow" aria-hidden="true">↗</span></section>
    if (node.type === 'divider') return <hr className={'divider ' + className} />
    if (node.type === 'image') return <img className={'content-image ' + className} src={node.src ?? ''} alt={node.alt ?? node.text} draggable={false} />
    if (node.type === 'video') return node.src ? <video className={'content-video ' + className} src={node.src} poster={node.poster} controls={node.mediaControls !== false} autoPlay={node.autoPlay ?? false} loop={node.loop ?? false} muted={node.muted ?? false} playsInline preload="metadata" /> : <div className={'content-video content-media-placeholder ' + className}>Add a video URL or upload a file</div>
    if (node.type === 'audio') return node.src ? <audio className={'content-audio ' + className} src={node.src} controls={node.mediaControls !== false} autoPlay={node.autoPlay ?? false} loop={node.loop ?? false} muted={node.muted ?? false} preload="metadata" /> : <div className={'content-audio content-media-placeholder ' + className}>Add an audio URL or upload a file</div>
    if (node.type === 'icon') return <span className={'content-icon ' + className} role="img" aria-label={node.text}>{node.iconName === 'check' ? '✓' : node.iconName === 'arrow' ? '↗' : '✳'}</span>
    return <div className={'content-shape ' + className} aria-hidden="true" />
  }

  const pageStyle: CSSProperties = {
    width: '100%', minHeight: '100vh', maxWidth: 'none',
    backgroundColor: page.backgroundColor ?? '#ffffff',
    backgroundImage: page.backgroundImage ? 'url(' + JSON.stringify(page.backgroundImage) + ')' : undefined,
    backgroundSize: page.backgroundImage ? 'cover' : undefined, backgroundPosition: 'center',
  }

  return <main className="project-shell">
    <section className={'page-shell ' + (freeform ? 'freeform-page' : '')} style={pageStyle}>
      {navigation.visible && <nav className="site-nav" aria-label="Main navigation"><a className="brand" href="#home"><span className="brand-mark">✳</span> {navigation.brand}</a><div className="nav-links">{navigation.links.map((link) => <a key={link} href={'#' + link.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')}>{link}</a>)}</div>{navigation.showLogin && <button className="nav-login" type="button" onClick={() => showNotice('Welcome back!')}>{navigation.loginLabel}</button>}</nav>}
      <section className={'hero ' + (freeform ? 'freeform-hero' : '')} id="home">
        <div className={'hero-content ' + (freeform ? 'freeform-content ' + (navigation.visible ? 'with-nav' : 'without-nav') : '')} style={freeform ? { width: designWidth, height: designHeight, left: '50%', top: canvasTop, transform: `translateX(-50%) scale(${canvasScale})`, transformOrigin: 'top center' } : undefined}>
          {hasForm ? <form className={'canvas-form ' + (freeform ? 'freeform-form' : 'flow-form')} onSubmit={(event) => { event.preventDefault(); showNotice('Form submitted successfully.') }}>{page.nodes.map((node) => <Fragment key={node.id}>{renderNode(node)}</Fragment>)}</form> : page.nodes.map((node) => <Fragment key={node.id}>{renderNode(node)}</Fragment>)}
        </div>
      </section>
      {page.footerVisible !== false && <footer>Made for the way your team thinks <span>✳</span></footer>}
    </section>
    <p className={'notice ' + (notice ? 'visible' : '')} role="status">{notice}</p>
  </main>
}
