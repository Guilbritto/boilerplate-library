import React from 'react'
import { useTheme } from '../../hooks/useTheme'

import { Container } from './TagComponent.styles'
import { TagProps } from './TagComponent.types'

const TagComponent = ({ label, type }: TagProps) => {
    const theme = useTheme()

    return (
        <Container theme={theme} type={type || 'success'}>
            {label}
        </Container>
    )
}

export default TagComponent
