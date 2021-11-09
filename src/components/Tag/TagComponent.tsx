import React from 'react'
import { useTheme } from '../../hooks/useTheme'

import { Container } from './TagComponent.styles'
import { TagProps } from './TagComponent.types'

const TagComponent = ({ label, type = 'default' }: TagProps) => {
    const theme = useTheme()

    return (
        <Container theme={theme} type={type}>
            {label}
        </Container>
    )
}

export default TagComponent
