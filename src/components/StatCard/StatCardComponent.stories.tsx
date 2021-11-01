import React from 'react'

import StatCardComponent from './StatCardComponent'
import { Link } from './StatCardComponent.styles'
import { StatCardProps } from './StatCardComponent.types'

const ViewMore = () => (
    <div>
        <Link>View more</Link>
    </div>
)

export default {
    title: 'StatCardComponent',
    component: StatCardComponent,
    argTypes: {
        title: {
            default: 'Title',
            control: {
                type: 'text'
            }
        },
        subtitle: {
            control: {
                type: 'text'
            }
        },
        variation: {
            options: ['primary', 'secondary'],
            control: {
                type: 'select'
            }
        },
        quantity: {
            control: {
                type: 'number'
            }
        },
        total: {
            control: {
                type: 'number'
            }
        }
    },
    args: {
        title: 'Title',
        subtitle: 'Subtitle',
        quantity: 8,
        total: 10,
        children: <ViewMore />
    }
}

export const Default = (args: JSX.IntrinsicAttributes & StatCardProps) => (
    <StatCardComponent {...args} />
)
