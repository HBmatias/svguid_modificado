# Estrutura do Pacote SVGuid

## 📦 Arquivos Distribuídos (pasta `dist/`)

Após executar `npm run build`, os seguintes arquivos são gerados:

```
dist/
├── svguid.es.js      # Módulo ES (ESM) - para imports modernos
├── svguid.cjs.js     # CommonJS - para Node.js tradicional
├── svguid.umd.js     # UMD - para uso em browsers via <script>
└── index.d.ts        # Definições TypeScript
```

## 🎯 Quando Usar Cada Formato

### ESM (svguid.es.js)
**Use para:** Projetos modernos com bundlers (Vite, Webpack 5+, Rollup)

```javascript
import { generateAvatar } from 'svguid'
```

### CommonJS (svguid.cjs.js)
**Use para:** Node.js tradicional, projetos legados

```javascript
const { generateAvatar } = require('svguid')
```

### UMD (svguid.umd.js)
**Use para:** Inclusão direta em HTML sem bundler

```html
<script src="https://unpkg.com/svguid@latest/dist/svguid.umd.js"></script>
<script>
  const avatar = SVGuid.generateAvatar('user123')
</script>
```

## 📋 Exports Principais

### Funções de Geração
- `generateAvatar(seed, options?)` - Gera avatar aleatório
- `generateCustomAvatar(seed, customOptions?)` - Gera avatar customizado

### Utilitários
- `keygen` - Gerador de chaves determinísticas
- `getRandomFromObject(obj, key)` - Helper para seleção aleatória
- `getRandomKeyFromObject(obj, key)` - Helper para seleção de chaves

### Assets e Tipos
- `eyeTypes` - Tipos de olhos disponíveis
- `mouthTypes` - Tipos de bocas disponíveis
- `eyebrowTypes` - Tipos de sobrancelhas
- `topTypes` - Tipos de cabelo/chapéu
- `clothesType` - Tipos de roupa
- `accessoriesTypes` - Tipos de acessórios
- `facialHairTypes` - Tipos de barba
- `GraphicShirtTypes` - Estampas de camiseta

### Paletas de Cores
- `hairColors` - Cores de cabelo
- `skinColors` - Cores de pele
- `hatAndShirtColors` - Cores de roupa e chapéu

## 🔧 Configuração do Package.json

```json
{
  "name": "svguid",
  "main": "./dist/svguid.cjs.js",    // Entry point para CommonJS
  "module": "./dist/svguid.es.js",    // Entry point para ESM
  "exports": {                         // Exports condicionais (Node 12.20+)
    ".": {
      "import": "./dist/svguid.es.js",
      "require": "./dist/svguid.cjs.js"
    }
  },
  "types": "./dist/index.d.ts",      // Definições TypeScript
  "files": [                          // Arquivos incluídos no pacote
    "dist"
  ]
}
```

## 📁 Estrutura de Desenvolvimento

```
svguid/
├── src/                          # Código fonte
│   ├── index.js                  # Entry point da biblioteca
│   ├── keygen.js                 # Gerador de hash SHA-256
│   ├── lib/
│   │   └── generateAvatar.js     # Funções principais
│   └── widget/
│       ├── assetsTypes/          # SVGs dos componentes
│       │   ├── eyes.js
│       │   ├── mouth.js
│       │   ├── clothes.js
│       │   └── ...
│       └── utils/                # Utilitários
│           └── getRandomFromObject.js
│
├── dist/                         # Build de produção
│   ├── svguid.es.js
│   ├── svguid.cjs.js
│   ├── svguid.umd.js
│   └── index.d.ts
│
├── vite.config.js               # Configuração do Vite
├── package.json                 # Metadados do pacote
├── README-LIB.md               # Documentação da biblioteca
├── PUBLISHING.md               # Guia de publicação
├── test-lib.js                 # Testes básicos
├── examples.js                 # Exemplos de uso
└── test-lib.html              # Demo browser
```

## 🎨 Fluxo de Build

1. **Desenvolvimento**: `npm run dev` - Inicia ambiente de desenvolvimento
2. **Build**: `npm run build` - Gera arquivos de distribuição
3. **Test**: `npm test` - Executa testes básicos
4. **Publish**: `npm publish` - Publica no NPM

## 📊 Tamanhos dos Arquivos

Após build (gzipped):
- ESM: ~113 KB
- UMD: ~112 KB  
- CJS: ~113 KB

## 🔍 Tree Shaking

O formato ESM suporta tree shaking. Se você importar apenas:

```javascript
import { generateAvatar } from 'svguid'
```

Bundlers modernos podem eliminar código não usado, reduzindo o tamanho final.

## 🚀 Performance

- **Geração de avatar**: ~0.02ms por avatar
- **Sem dependências externas**: Bundle menor
- **Determinístico**: Mesma entrada sempre gera mesmo resultado
- **Leve**: ~110KB gzipped

## ✅ Compatibilidade

### Browsers
- Chrome/Edge: ✅ Últimas 2 versões
- Firefox: ✅ Últimas 2 versões
- Safari: ✅ Últimas 2 versões

### Node.js
- Node 14+: ✅ Suporte completo
- Node 12.20+: ✅ Com exports condicionais

### Bundlers
- Vite: ✅
- Webpack 5+: ✅
- Rollup: ✅
- Parcel: ✅
- esbuild: ✅
