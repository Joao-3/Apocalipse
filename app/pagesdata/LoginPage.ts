import type { DesignDocument } from '../shared/types/design'

export const page: DesignDocument = {
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
}
