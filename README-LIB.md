# SVGuid

**SVGuid** é uma biblioteca JavaScript para geração determinística de avatares SVG únicos baseados em strings. Cada string de entrada gera sempre o mesmo avatar, permitindo criar identidades visuais consistentes para usuários, documentos ou qualquer outra entidade.

## 🎨 Características

- ✨ **Determinístico**: A mesma string sempre gera o mesmo avatar
- 🎭 **Customizável**: Controle completo sobre características faciais, roupas, cores
- 📦 **Zero dependências**: Não requer bibliotecas externas
- 🚀 **Leve e rápido**: Geração instantânea de SVG
- 🎨 **Milhões de combinações**: Olhos, bocas, cabelos, roupas, acessórios e cores
- 📱 **Framework agnóstico**: Use em qualquer projeto JavaScript/TypeScript
- 🌐 **Múltiplos formatos**: ESM, CommonJS e UMD

## 📦 Instalação

```bash
npm install svguid
```

ou

```bash
yarn add svguid
```

## 🚀 Uso Básico

### ESM (Modern JavaScript)

```javascript
import { generateAvatar } from 'svguid'

// Gera um avatar baseado em uma string
const avatarSVG = generateAvatar('usuario@email.com')

// Insere no DOM
document.getElementById('avatar').innerHTML = avatarSVG
```

### CommonJS (Node.js)

```javascript
const { generateAvatar } = require('svguid')

const avatarSVG = generateAvatar('usuario123')
console.log(avatarSVG) // String SVG
```

### HTML direto (UMD)

```html
<script src="https://unpkg.com/svguid@latest/dist/svguid.umd.js"></script>
<script>
  const avatarSVG = SVGuid.generateAvatar('meu-identificador')
  document.getElementById('avatar').innerHTML = avatarSVG
</script>
```

## 🎭 Exemplos

### Customizando o avatar

```javascript
import { generateCustomAvatar } from 'svguid'

const avatar = generateCustomAvatar('usuario@email.com', {
  circle: true,
  circleColor: '#ff6b6b',
  eyeType: 'Happy',
  mouthType: 'Smile',
  topType: 'ShortHairShortFlat',
  hairColor: 'Brown',
  clotheColor: 'Blue03',
  skinColor: 'Light'
})
```

### React Component

```jsx
import { generateAvatar } from 'svguid'

function Avatar({ userId }) {
  const avatarSVG = generateAvatar(userId)
  
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: avatarSVG }}
      style={{ width: 100, height: 100 }}
    />
  )
}
```

### Vue Component

```vue
<template>
  <div v-html="avatarSVG" style="width: 100px; height: 100px"></div>
</template>

<script setup>
import { generateAvatar } from 'svguid'
import { computed } from 'vue'

const props = defineProps(['userId'])
const avatarSVG = computed(() => generateAvatar(props.userId))
</script>
```

### Como Data URL para elemento img

```javascript
import { generateAvatar } from 'svguid'

const svgString = generateAvatar('usuario123')
const svgBlob = new Blob([svgString], { type: 'image/svg+xml' })
const url = URL.createObjectURL(svgBlob)

// Usar como src de img
document.getElementById('avatar').src = url
```

## 📚 API

### `generateAvatar(seed, options?)`

Gera um avatar SVG aleatório baseado na seed.

**Parâmetros:**
- `seed` (string): String usada como seed para geração determinística
- `options` (object, opcional):
  - `circle` (boolean): Se true, renderiza círculo de fundo (padrão: true)
  - `circleColor` (string): Cor do círculo de fundo (padrão: '#6fb8e0')

**Retorna:** String SVG do avatar

**Exemplo:**
```javascript
const avatar = generateAvatar('usuario@email.com', {
  circle: false
})
```

### `generateCustomAvatar(seed, customOptions?)`

Gera um avatar SVG com características customizadas.

**Parâmetros:**
- `seed` (string): String usada como seed
- `customOptions` (object, opcional):
  - `circle` (boolean): Renderizar círculo de fundo
  - `circleColor` (string): Cor do círculo
  - `topType` (string): Tipo de cabelo/chapéu
  - `accessoriesType` (string): Tipo de acessórios
  - `facialHairType` (string): Tipo de barba
  - `clotheType` (string): Tipo de roupa
  - `eyeType` (string): Tipo de olhos
  - `eyebrowType` (string): Tipo de sobrancelhas
  - `mouthType` (string): Tipo de boca
  - `skinColor` (string): Cor da pele
  - `hairColor` (string): Cor do cabelo
  - `facialHairColor` (string): Cor da barba
  - `topColor` (string): Cor do chapéu
  - `clotheColor` (string): Cor da roupa

**Retorna:** String SVG do avatar customizado

### Tipos Disponíveis

Importe os objetos de tipos para ver todas as opções disponíveis:

```javascript
import {
  eyeTypes,
  mouthTypes,
  eyebrowTypes,
  topTypes,
  clothesType,
  accessoriesTypes,
  facialHairTypes,
  GraphicShirtTypes,
  hairColors,
  skinColors,
  hatAndShirtColors
} from 'svguid'

console.log(Object.keys(eyeTypes))
// ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky']
```

## 🎨 Opções de Customização

### Tipos de Olhos
`Close`, `Cry`, `Default`, `Dizzy`, `EyeRoll`, `Happy`, `Hearts`, `Side`, `Squint`, `Surprised`, `Wink`, `WinkWacky`

### Tipos de Boca
`Concerned`, `Default`, `Disbelief`, `Eating`, `Grimace`, `Sad`, `ScreamOpen`, `Serious`, `Smile`, `Tongue`, `Twinkle`, `Vomit`

### Tipos de Sobrancelhas
`Angry`, `AngryNatural`, `Default`, `DefaultNatural`, `FlatNatural`, `RaisedExcited`, `RaisedExcitedNatural`, `SadConcerned`, `SadConcernedNatural`, `UnibrowNatural`, `UpDown`, `UpDownNatural`

### Cores de Cabelo
`Auburn`, `Black`, `Blonde`, `BlondeGolden`, `Brown`, `BrownDark`, `PastelPink`, `Platinum`, `Red`, `SilverGray`

### Cores de Pele
`Tanned`, `Yellow`, `Pale`, `Light`, `Brown`, `DarkBrown`, `Black`

### E muito mais!

Explore todos os tipos importando os objetos correspondentes da biblioteca.

## 🔧 Desenvolvimento

```bash
# Instalar dependências
npm install

# Desenvolvimento (com demo)
npm run dev

# Build da biblioteca
npm run build

# Build da demo
npm run build:demo
```

## 📄 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 🙏 Créditos

Baseado no conceito de avatares do [getavataaars.com](https://getavataaars.com) e inspirado em bibliotecas de geração de identicons.

---

Feito com ❤️ para a comunidade open source
