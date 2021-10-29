import { css, DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
    name: 'default',
    colors: {
        primary: '#2B52DD',
        secondary: '#004282 ',
        neutral: {
            white: '#FFF',
            ligth: {
                "300": "#F4F6FC",
                "500": "#C9CAD2"
            },
            soft: '#A7ADBF',
            medium: '#6D7384',
            dark: '#2B2C32'
        },
        suport: {
            success: '#3EB96F',
            warning: '#FBC436',
            error: '#E73A33',
            successLight: '#D8F1E2',
            warningLight: '#FEF3D7',
            errorLight: '#FAD8D6'
        },
        blue: {
            ligth: '#CFDDF5',
            medium: '#173EC5',
            dark: '#163161'
        }
    },
    borderRadius: '4px',
    fontTokens: {
        "50": css`font-size: 11px; line-height: 13px`,
        "75": css`font-size: 12px; line-height: 15px`,
        "100": css`font-size: 14px; line-height: 17px`,
        "200": css`font-size: 16px; line-height: 19px`,
        "300": css`font-size: 18px; line-height: 22px`,
        "400": css`font-size: 20px; line-height: 24px`,
        "500": css`font-size: 22px; line-height: 27px`,
        "600": css`font-size: 24px; line-height: 31px`,
        "700": css`font-size: 28px; line-height: 34px`,
        "800": css`font-size: 32px; line-height: 39px`,
        "900": css`font-size: 36px; line-height: 44px`,
        "1000": css`font-size: 40px; line-height: 49px`,
        "1100": css`font-size: 45px; line-height: 55px`,
        "1200": css`font-size: 50px; line-height: 62px`,
        "1300": css`font-size: 60px; line-height: 70px`
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900
    },

}
