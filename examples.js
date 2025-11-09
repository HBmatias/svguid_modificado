/**
 * Exemplos completos de uso da biblioteca SVGuid
 */

import {
    generateAvatar,
    generateCustomAvatar,
    eyeTypes,
    mouthTypes,
    topTypes,
    clothesType,
    hairColors,
    skinColors,
    hatAndShirtColors
} from './dist/svguid.es.js'

console.log('📖 Exemplos de Uso da Biblioteca SVGuid\n')

// ========================================
// Exemplo 1: Uso básico
// ========================================
console.log('1️⃣ USO BÁSICO')
console.log('─'.repeat(50))

const avatar1 = generateAvatar('usuario@email.com')
console.log('Avatar gerado para "usuario@email.com"')
console.log(`Tamanho: ${avatar1.length} caracteres\n`)

// ========================================
// Exemplo 2: Determinismo
// ========================================
console.log('2️⃣ DETERMINISMO (mesma entrada = mesmo resultado)')
console.log('─'.repeat(50))

const avatarA = generateAvatar('usuario123')
const avatarB = generateAvatar('usuario123')
console.log(`Resultado idêntico: ${avatarA === avatarB}`)
console.log(`Hash da entrada sempre gera o mesmo avatar\n`)

// ========================================
// Exemplo 3: Sem círculo de fundo
// ========================================
console.log('3️⃣ SEM CÍRCULO DE FUNDO')
console.log('─'.repeat(50))

const avatarNoCircle = generateAvatar('user-no-bg', {
    circle: false
})
console.log('Avatar sem círculo de fundo gerado')
console.log(`Ideal para sobreposição em outros fundos\n`)

// ========================================
// Exemplo 4: Círculo colorido customizado
// ========================================
console.log('4️⃣ CÍRCULO COLORIDO CUSTOMIZADO')
console.log('─'.repeat(50))

const avatarCustomBg = generateAvatar('colorful-user', {
    circle: true,
    circleColor: '#ff6b6b'
})
console.log('Avatar com fundo vermelho (#ff6b6b) gerado\n')

// ========================================
// Exemplo 5: Avatar totalmente customizado
// ========================================
console.log('5️⃣ AVATAR TOTALMENTE CUSTOMIZADO')
console.log('─'.repeat(50))

const avatarFullCustom = generateCustomAvatar('custom-user', {
    eyeType: 'Happy',
    mouthType: 'Smile',
    topType: 'ShortHairShortFlat',
    clotheType: 'Hoodie',
    hairColor: 'Brown',
    clotheColor: 'Blue03',
    skinColor: 'Light',
    circle: true,
    circleColor: '#4ecdc4'
})
console.log('Avatar customizado:')
console.log('  👁️  Olhos: Happy')
console.log('  😊 Boca: Smile')
console.log('  💇 Cabelo: ShortHairShortFlat (Brown)')
console.log('  👕 Roupa: Hoodie (Blue03)')
console.log('  🎨 Pele: Light')
console.log('  🔵 Fundo: #4ecdc4\n')

// ========================================
// Exemplo 6: Listando opções disponíveis
// ========================================
console.log('6️⃣ OPÇÕES DISPONÍVEIS')
console.log('─'.repeat(50))

console.log('\n👁️  Tipos de Olhos:')
console.log(Object.keys(eyeTypes).join(', '))

console.log('\n😄 Tipos de Boca:')
console.log(Object.keys(mouthTypes).join(', '))

console.log('\n💇 Tipos de Cabelo/Chapéu:')
console.log(Object.keys(topTypes).slice(0, 10).join(', '), '...')

console.log('\n👕 Tipos de Roupa:')
console.log(Object.keys(clothesType).join(', '))

console.log('\n🎨 Cores de Cabelo:')
console.log(Object.keys(hairColors).join(', '))

console.log('\n🧑 Cores de Pele:')
console.log(Object.keys(skinColors).join(', '))

console.log('\n👔 Cores de Roupa/Chapéu:')
console.log(Object.keys(hatAndShirtColors).slice(0, 10).join(', '), '...\n')

// ========================================
// Exemplo 7: Geração em massa
// ========================================
console.log('7️⃣ GERAÇÃO EM MASSA')
console.log('─'.repeat(50))

const users = [
    'alice@company.com',
    'bob@company.com',
    'charlie@company.com',
    'diana@company.com'
]

console.log('Gerando avatares para lista de usuários:')
users.forEach((email, index) => {
    const avatar = generateAvatar(email)
    console.log(`  ${index + 1}. ${email} → Avatar gerado (${avatar.length} chars)`)
})

// ========================================
// Exemplo 8: Casos de uso práticos
// ========================================
console.log('\n8️⃣ CASOS DE USO PRÁTICOS')
console.log('─'.repeat(50))

console.log('\n🔐 Identicons para usuários sem foto:')
const userAvatar = generateAvatar('user-12345')
console.log('  ✓ Avatar gerado para user-12345')

console.log('\n📄 Identidade visual para documentos:')
const docAvatar = generateAvatar('DOC-2024-001')
console.log('  ✓ Avatar gerado para DOC-2024-001')

console.log('\n🎮 Perfis de jogadores:')
const playerAvatar = generateAvatar('player_cooldude89')
console.log('  ✓ Avatar gerado para player_cooldude89')

console.log('\n🤖 Bots e assistentes virtuais:')
const botAvatar = generateAvatar('assistant-bot-v2')
console.log('  ✓ Avatar gerado para assistant-bot-v2')

console.log('\n✅ Exemplos concluídos!\n')
console.log('💡 Dica: Execute `node test-lib.html` em um servidor para')
console.log('   ver os avatares renderizados no navegador!')
