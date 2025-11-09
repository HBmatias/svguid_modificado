/**
 * Retorna um valor aleatório de um objeto usando a key como seed
 * @param {Object} obj - Objeto com os valores disponíveis
 * @param {Object} key - Objeto keygen com método next()
 * @returns {*} Valor aleatório do objeto
 */
export function getRandomFromObject(obj, key) {
    const keys = Object.keys(obj)
    const randomIndex = key.next() % keys.length
    return obj[keys[randomIndex]]
}

/**
 * Retorna uma chave aleatória de um objeto usando a key como seed
 * @param {Object} obj - Objeto com os valores disponíveis
 * @param {Object} key - Objeto keygen com método next()
 * @returns {string} Chave aleatória do objeto
 */
export function getRandomKeyFromObject(obj, key) {
    const keys = Object.keys(obj)
    const randomIndex = key.next() % keys.length
    return keys[randomIndex]
}
