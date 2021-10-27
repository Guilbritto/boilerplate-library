import React from 'react'

import CollapseComponent from './CollapseComponent'

export default {
    title: 'CollapseComponent',
    component: CollapseComponent
}

export const Default = () => (
    <CollapseComponent title="CollapseComponent">
        <div>Collapse - 1</div>
        <div>Collapse - 2</div>
        <div>Collapse - 3</div>
        <div>Collapse - 4</div>
        <div>Collapse - 5</div>
    </CollapseComponent>
)
