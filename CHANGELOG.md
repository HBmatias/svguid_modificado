# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2025-11-09

### Adicionado
- ✨ Função `generateAvatar(seed, options)` para geração básica de avatares
- ✨ Função `generateCustomAvatar(seed, customOptions)` para avatares customizados
- 🎨 Suporte a múltiplos tipos de:
  - Olhos (12 variações)
  - Bocas (12 variações)
  - Sobrancelhas (12 variações)
  - Cabelos/Chapéus (50+ variações)
  - Roupas (9 tipos)
  - Acessórios (múltiplas opções)
  - Barbas (múltiplas opções)
- 🎨 Paletas de cores:
  - 10 cores de cabelo
  - 7 tons de pele
  - 20+ cores de roupa
- 📦 Build em múltiplos formatos (ESM, CommonJS, UMD)
- 📘 Definições TypeScript completas
- 🔧 Gerador determinístico baseado em SHA-256
- ⚡ Zero dependências em runtime
- 📖 Documentação completa e exemplos

### Recursos
- Geração determinística: mesma entrada sempre gera o mesmo avatar
- Performance: ~0.02ms por avatar
- Customização total de características faciais e vestimentas
- Opção de círculo de fundo colorido
- Framework agnóstico

### Documentação
- README completo com exemplos
- Guia de publicação (PUBLISHING.md)
- Estrutura do pacote (PACKAGE-STRUCTURE.md)
- Exemplos de uso (examples.js)
- Arquivo de teste (test-lib.js)
- Demo HTML (test-lib.html)

## [Unreleased]

### Planejado para versões futuras
- [ ] Suporte a mais estilos de roupas
- [ ] Mais variações de acessórios
- [ ] Backgrounds customizáveis além do círculo
- [ ] Opção de exportar como PNG/JPEG
- [ ] Playground interativo online
- [ ] React component oficial
- [ ] Vue component oficial
- [ ] Preset de avatares (empresarial, casual, fantasia)
- [ ] Animações SVG opcionais
- [ ] Modo batch para geração em massa otimizada

---

## Formato das Entradas

### [Versão] - Data

#### Adicionado
Para novas funcionalidades.

#### Modificado
Para mudanças em funcionalidades existentes.

#### Descontinuado
Para funcionalidades que serão removidas em breve.

#### Removido
Para funcionalidades removidas.

#### Corrigido
Para correções de bugs.

#### Segurança
Para vulnerabilidades corrigidas.
