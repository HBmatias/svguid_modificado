// Exemplo de uso da biblioteca SVGuid em Node.js
import { generateAvatar, generateCustomAvatar } from './dist/svguid.es.js'
import { writeFileSync } from 'fs'

console.log('🎨 SVGuid - Teste da Biblioteca\n')

// Teste 1: Geração básica
console.log('1️⃣ Geração básica de avatar')
const avatar1 = generateAvatar('usuario@exemplo.com')
console.log(`✓ Avatar gerado (${avatar1.length} caracteres)`)

// Teste 2: Determinismo - mesma entrada gera mesmo resultado
console.log('\n2️⃣ Teste de determinismo')
const avatar2a = generateAvatar('teste123')
const avatar2b = generateAvatar('teste123')
console.log(`✓ Mesmo seed gera mesmo avatar: ${avatar2a === avatar2b}`)

// Teste 3: Diferentes entradas geram diferentes avatares
console.log('\n3️⃣ Diferentes entradas')
const avatar3a = generateAvatar('usuario1')
const avatar3b = generateAvatar('usuario2')
console.log(`✓ Diferentes seeds geram avatares diferentes: ${avatar3a !== avatar3b}`)

// Teste 4: Avatar customizado
console.log('\n4️⃣ Avatar customizado')
const customAvatar = generateCustomAvatar('custom-user', {
    circle: true,
    circleColor: '#ff6b6b',
    eyeType: 'Happy',
    mouthType: 'Smile'
})
console.log(`✓ Avatar customizado gerado (${customAvatar.length} caracteres)`)

// Teste 5: Salvar em arquivo
console.log('\n5️⃣ Salvando avatares em arquivos')
try {
    writeFileSync('./avatar-exemplo-1.svg', generateAvatar('teste1'))
    writeFileSync('./avatar-exemplo-2.svg', generateAvatar('teste2'))
    writeFileSync('./avatar-custom.svg', customAvatar)
    console.log('✓ Arquivos salvos: avatar-exemplo-1.svg, avatar-exemplo-2.svg, avatar-custom.svg')
} catch (err) {
    console.error('✗ Erro ao salvar arquivos:', err.message)
}

// Teste 6: Performance
console.log('\n6️⃣ Teste de performance')
const start = Date.now()
const iterations = 1000
for (let i = 0; i < iterations; i++) {
    generateAvatar(`user${i}`)
}
const elapsed = Date.now() - start
console.log(`✓ ${iterations} avatares gerados em ${elapsed}ms (${(elapsed / iterations).toFixed(2)}ms por avatar)`)

console.log('\n✅ Todos os testes concluídos!')
