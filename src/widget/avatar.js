import { mouthTypes } from './assetsTypes/mouth'
import { eyeTypes } from './assetsTypes/eyes'
import { eyebrowTypes } from './assetsTypes/eyebrows'
import { clothesType } from './assetsTypes/clothes'
import { topTypes } from './assetsTypes/top'
import { accessoriesTypes } from './assetsTypes/accessories'
import { facialHairTypes } from './assetsTypes/facial-hair'
import { GraphicShirtTypes } from './assetsTypes/graphic-shirt'
import { hairColors, skinColors, hatAndShirtColors } from './assetsTypes/colors'

export default {
     props: {
         isCircle: {
            type: Boolean,
            default: true
         },
         circleColor: {
            type: String,
             default: '#6fb8e0'
        },
        topType: { type: String, default: 'random' },
        accessoriesType: { type: String, default: 'random'},
        facialHairType: { type: String, default: 'random' },
        clotheType: { type: String, default: 'random' },
        eyeType: { type: String, default: 'random' },
        eyebrowType: { type: String, default: 'random' },
        mouthType: { type: String, default: 'random' },
        skinColor: { type: String, default: 'random' },
        graphicType: { type: String, default: 'random' },
        hairColor: { type: String, default: 'random' },
        facialHairColor: { type: String, default: 'random' },
        topColor: { type: String, default: 'random' },
        clotheColor: { type: String, default: 'random' },
     },
    methods: {
        getRandomChoice (items) {
            const itemsLength = Object.entries(items).length
            return Object.entries(items)[Math.floor((Math.random()*(itemsLength)))][1]
        }
    },
    data () {
        return {
            mouthTypes: mouthTypes,
            eyeTypes: eyeTypes,
            topTypes: topTypes,
            clothesType: clothesType,
            eyebrowTypes: eyebrowTypes,
            facialHairTypes: facialHairTypes,
            accessoriesTypes: accessoriesTypes,
            GraphicShirtTypes: GraphicShirtTypes,
            hatAndShirtColors: hatAndShirtColors,
            hairColors: hairColors,
            skinColors: skinColors,
        }
    },
    computed: {
        cssVars () {
          return {
            '--avataaar-hair-color': this.hairColor === 'random' ? this.getRandomChoice(this.hairColors) : this.hairColors[this.hairColor],
            '--avataaar-facial-hair-color': this.facialHairColor === 'random' ? this.getRandomChoice(this.hairColors) : this.hairColors[this.facialHairColor],
            '--avataaar-hat-color': this.topColor === 'random' ? this.getRandomChoice(this.hatAndShirtColors) : this.hatAndShirtColors[this.topColor],
            '--avataaar-shirt-color': this.clotheColor === 'random' ? this.getRandomChoice(this.hatAndShirtColors) : this.hatAndShirtColors[this.clotheColor],

          }
        },
        topTypeValue () {
            return this.topType === 'random' ? this.getRandomChoice(Object.keys(this.topTypes)) : this.topType
        },
        accessoriesTypeValue () {
            return this.accessoriesType === 'random' ? this.getRandomChoice(Object.keys(this.accessoriesTypes)) : this.accessoriesType
        },
        facialHairTypeValue () {
            return this.facialHairType === 'random' ? this.getRandomChoice(Object.keys(this.facialHairTypes)) : this.facialHairType
        },
        clotheTypeValue () {
            return this.clotheType === 'random' ? this.getRandomChoice(Object.keys(this.clothesType)) : this.clotheType
        },
        eyeTypeValue () {
            return this.eyeType === 'random' ? this.getRandomChoice(Object.keys(this.eyeTypes)) : this.eyeType
        },
        eyebrowTypeValue () {
            return this.eyebrowType === 'random' ? this.getRandomChoice(Object.keys(this.eyebrowTypes)) : this.eyebrowType
        },
        mouthTypeValue () {
            return this.mouthType === 'random' ? this.getRandomChoice(Object.keys(this.mouthTypes)) : this.mouthType
        },
        skinColorValue () {
            return this.skinColor === 'random' ? this.getRandomChoice(Object.keys(this.skinColors)) : this.skinColor
        },
        graphicTypeValue () {
            return this.graphicType === 'random' ? this.getRandomChoice(Object.keys(this.GraphicShirtTypes)) : this.graphicType
        }
    }
}