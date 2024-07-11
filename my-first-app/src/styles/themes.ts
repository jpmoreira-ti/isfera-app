import { extendTheme } from 'native-base'

export const THEMES = extendTheme({
    colors: {
        gray: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339CFF',
            800: '#0b3b60'
        },
        green: {
            100: '#9eb977'
        },
        orange: {
            100: '#ff9a36'
        },
        white: '#fff',
        black: '#000'
    },
    fontSizes: {
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 20,
        'xl': 24,
        '2xl': 30
    }
})
