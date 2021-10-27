import React, { useState } from 'react'

import { Container, ContainerHead } from './CollapseComponent.styles'
import { CollapseProps } from './CollapseComponent.types'

const CollapseComponent = ({
    children,
    title,
    widthSize = 100,
    opened = false
}: CollapseProps) => {
    const [isCollapse, setIsCollapsed] = useState<boolean>(opened)

    return (
        <>
            <ContainerHead>
                <h3>{title}</h3>
                <button onClick={() => setIsCollapsed(prev => !prev)}>
                    abrir/fechar
                </button>
            </ContainerHead>
            <Container
                widthSize={widthSize}
                collapse={isCollapse}
                aria-expanded={isCollapse}
            >
                {children}
            </Container>
        </>
    )
}

export default CollapseComponent
