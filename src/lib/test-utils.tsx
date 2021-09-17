import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement, FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/defaultTheme'

const Providers: FC = ({ children }) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
