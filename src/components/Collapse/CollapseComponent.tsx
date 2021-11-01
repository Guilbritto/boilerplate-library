import React, { useState } from 'react'
import { ArrowUp } from './ArrowUp'
import { ArrowDown } from './ArrowDown'

import {
    Container,
    ContainerChildren,
    ContainerHead,
    Head,
    IconArea,
    Quantity,
    Title
} from './CollapseComponent.styles'
import { CollapseProps } from './CollapseComponent.types'
import { useTheme } from '../../hooks/useTheme'

const CollapseComponent = ({
    children,
    title,
    quantity = 0,
    widthSize = 100,
    opened = false
}: CollapseProps) => {
    const [isCollapse, setIsCollapsed] = useState<boolean>(opened)
    const theme = useTheme()

    return (
        <Container theme={theme} widthSize={widthSize}>
            <ContainerHead>
                <Head>
                    <Title theme={theme}>{title}</Title>
                    {quantity > 0 && (
                        <Quantity theme={theme}>{quantity} resultados</Quantity>
                    )}
                </Head>
                <IconArea
                    theme={theme}
                    onClick={() => setIsCollapsed(prev => !prev)}
                    data-testid="IconButton"
                >
                    {isCollapse ? <ArrowDown /> : <ArrowUp />}
                </IconArea>
            </ContainerHead>
            <ContainerChildren
                maxHeight={isCollapse ? '16rem' : '0'}
                marginTop={isCollapse ? '1.25rem' : '0'}
                collapse={isCollapse}
                aria-expanded={isCollapse}
                data-testid="Children"
            >
                {children}
            </ContainerChildren>
        </Container>
    )
}

export default CollapseComponent
