# Guia de Publicação da Biblioteca SVGuid

## Preparação para Publicação

### 1. Verifique se o build está funcionando

```bash
npm run build
```

### 2. Teste a biblioteca localmente

```bash
npm test
```

### 3. Verifique o package.json

Certifique-se de que:
- ✅ O campo `name` está correto e disponível no npm
- ✅ A `version` está atualizada seguindo semver
- ✅ Os campos `main`, `module` e `exports` estão corretos
- ✅ O campo `files` inclui apenas `dist`
- ✅ A `license` está definida
- ✅ O `repository` está correto

### 4. Atualize o README

Antes de publicar, renomeie o README:

```bash
# Windows PowerShell
Move-Item README.md README-DEMO.md
Move-Item README-LIB.md README.md

# Bash/Linux/Mac
mv README.md README-DEMO.md
mv README-LIB.md README.md
```

## Publicação no NPM

### Primeira Publicação

1. **Login no npm:**
```bash
npm login
```

2. **Verifique o que será publicado:**
```bash
npm pack --dry-run
```

3. **Publique:**
```bash
npm publish
```

### Publicações Subsequentes

1. **Atualize a versão** (escolha uma):

```bash
# Patch (1.0.0 → 1.0.1) - correções de bugs
npm version patch

# Minor (1.0.0 → 1.1.0) - novas features compatíveis
npm version minor

# Major (1.0.0 → 2.0.0) - breaking changes
npm version major
```

2. **Publique:**
```bash
npm publish
```

3. **Faça push das tags:**
```bash
git push --tags
```

## Teste após Publicação

### Teste em novo projeto

```bash
mkdir test-svguid
cd test-svguid
npm init -y
npm install svguid

# Crie um arquivo test.js
echo "import { generateAvatar } from 'svguid'; console.log(generateAvatar('test'))" > test.js

# Execute
node test.js
```

## Publicação em Scoped Package (Opcional)

Se preferir publicar como package com escopo (ex: `@seu-usuario/svguid`):

1. **Atualize package.json:**
```json
{
  "name": "@seu-usuario/svguid",
  ...
}
```

2. **Publique com acesso público:**
```bash
npm publish --access public
```

## Versionamento Semântico

Siga o padrão [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Mudanças incompatíveis na API
- **MINOR** (0.X.0): Novas funcionalidades compatíveis
- **PATCH** (0.0.X): Correções de bugs

## Checklist de Publicação

- [ ] Build executado com sucesso
- [ ] Testes passando
- [ ] README atualizado
- [ ] Versão atualizada no package.json
- [ ] CHANGELOG.md atualizado (opcional mas recomendado)
- [ ] Código commitado no git
- [ ] Tags criadas
- [ ] Publicado no npm
- [ ] Testado instalação em projeto novo

## Despublicação (Use com cuidado!)

Se precisar remover uma versão publicada nas primeiras 24 horas:

```bash
npm unpublish svguid@1.0.0
```

⚠️ **Atenção**: Após 24 horas ou se o pacote tiver downloads, não é possível despublicar.

## Links Úteis

- [NPM Documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [NPM Package Registry](https://www.npmjs.com/)
