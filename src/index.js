// Exporta as funções principais de geração de avatar
export { generateAvatar, generateCustomAvatar } from './lib/generateAvatar.js'

// Exporta o keygen para uso direto se necessário
export { default as keygen } from './keygen.js'

// Exporta os tipos de assets disponíveis para customização
export { mouthTypes } from './widget/assetsTypes/mouth.js'
export { eyeTypes } from './widget/assetsTypes/eyes.js'
export { eyebrowTypes } from './widget/assetsTypes/eyebrows.js'
export { clothesType } from './widget/assetsTypes/clothes.js'
export { topTypes } from './widget/assetsTypes/top.js'
export { accessoriesTypes } from './widget/assetsTypes/accessories.js'
export { facialHairTypes } from './widget/assetsTypes/facial-hair.js'
export { GraphicShirtTypes } from './widget/assetsTypes/graphic-shirt.js'
export { hairColors, skinColors, hatAndShirtColors } from './widget/assetsTypes/colors.js'

// Exporta helpers úteis
export { getRandomFromObject, getRandomKeyFromObject } from './widget/utils/getRandomFromObject.js'
