import React, { useState } from 'react'
import { ArrowUp } from './ArrowUp'
import { ArrowDown } from './ArrowDown'

import {
    Container,
    ContainerChildren,
    ContainerHead,
    IconArea
} from './CollapseComponent.styles'
import { CollapseProps } from './CollapseComponent.types'
import { useTheme } from '../../hooks/useTheme'

const CollapseComponent = ({
    children,
    title,
    widthSize = 100,
    opened = false
}: CollapseProps) => {
    const [isCollapse, setIsCollapsed] = useState<boolean>(opened)
    const theme = useTheme()

    return (
        <Container theme={theme} widthSize={widthSize}>
            <ContainerHead>
                <h3>{title}</h3>
                <IconArea
                    theme={theme}
                    onClick={() => setIsCollapsed(prev => !prev)}
                >
                    {isCollapse ? <ArrowUp /> : <ArrowDown />}
                </IconArea>
            </ContainerHead>
            <ContainerChildren collapse={isCollapse} aria-expanded={isCollapse}>
                {children}
            </ContainerChildren>
        </Container>
    )
}

export default CollapseComponent
