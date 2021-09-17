import React from 'react'
import ButtonComponent from './ButtonComponent'

export default {
    title: 'Button',
    component: ButtonComponent,

    argTypes: {
        icon: {
            options: ['arrowRight'],
            control: {
                type: 'select'
            }
        },
        label: {
            control: {
                type: 'text'
            }
        },
        iconSide: {
            options: ['left', 'right'],
            control: {
                type: 'select'
            }
        }
    }
}

export const Default = args => <ButtonComponent {...args} />
