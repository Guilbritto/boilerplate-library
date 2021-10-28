import React from 'react'
import { useTheme } from '../../hooks/useTheme'

import {
    Container,
    Title,
    Subtitle,
    Quantity,
    ProgressContainer,
    Progress
} from './StatCardComponent.styles'
import { StatCardProps } from './StatCardComponent.types'

const StatCard = ({
    title,
    variation = 'primary',
    subtitle,
    quantity,
    total,
    children
}: StatCardProps) => {
    const theme = useTheme()
    const percentage = Math.min((quantity / total) * 100, 100)

    return (
        <Container variation={variation}>
            <Title theme={theme}>{title}</Title>
            <Subtitle theme={theme}>{subtitle}</Subtitle>
            <Quantity theme={theme}>{`${quantity}/${total}`}</Quantity>
            <ProgressContainer theme={theme}>
                <Progress theme={theme} percentage={percentage} />
            </ProgressContainer>
            {children}
        </Container>
    )
}

export default StatCard
