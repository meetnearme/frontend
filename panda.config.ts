import {defineConfig} from '@pandacss/dev'
import {createPreset} from '@park-ui/panda-preset'
import {badgeRecipe} from './badgeRecipe'

export default defineConfig({
    preflight: true,
    presets: [
        '@pandacss/preset-base',
        createPreset({
            accentColor: 'grass',
            grayColor: 'mauve',
            borderRadius: 'md',
        }),
    ],
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
    exclude: [],
    theme: {
        extend: {
            recipes: {
                badge: badgeRecipe,
            },
        },
    },
    jsxFramework: 'react',
    outdir: 'styled-system',
})

// import {defineConfig} from '@pandacss/dev'

// export default defineConfig({
//     preflight: true,
//     presets: [
//         '@pandacss/preset-base',
//         createPreset({
//             accentColor: 'grass',
//             grayColor: 'mauve',
//             borderRadius: 'md',
//         }),
//     ],
//     include: ['./src/**/*.{js,jsx,ts,tsx}'],
//     jsxFramework: 'react',
//     outdir: 'styled-system',
// })
