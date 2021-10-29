import React from 'react'

import CollapseComponent from './CollapseComponent'

export default {
    title: 'CollapseComponent',
    component: CollapseComponent,
    argTypes: {
        title: {
            control: {
                type: 'text'
            }
        },
        widthSize: {
            control: {
                type: 'number'
            }
        }
    }
}

export const Default = args => (
    <CollapseComponent
        title=""
        quantity={0}
        widthSize={80}
        opened={true}
        {...args}
    >
        <div>Collapse - 1</div>
        <div>Collapse - 2</div>
        <div>Collapse - 3</div>
        <div>Collapse - 4</div>
        <div>Collapse - 5</div>

        <div>Collapse - 6</div>
        <div>Collapse - 7</div>
        <div>Collapse - 8</div>
        <div>Collapse - 9</div>
        <div>Collapse - 10</div>

        <div>Collapse - 11</div>
        <div>Collapse - 12</div>
        <div>Collapse - 13</div>
        <div>Collapse - 14</div>
        <div>Collapse - 15</div>

        <div>Collapse - 16</div>
        <div>Collapse - 17</div>
        <div>Collapse - 18</div>
        <div>Collapse - 19</div>
        <div>Collapse - 20</div>

        <div>Collapse - 21</div>
        <div>Collapse - 22</div>
        <div>Collapse - 23</div>
        <div>Collapse - 24</div>
        <div>Collapse - 25</div>

        <div>Collapse - 26</div>
        <div>Collapse - 27</div>
        <div>Collapse - 28</div>
        <div>Collapse - 29</div>
        <div>Collapse - 30</div>

        <div>Collapse - 31</div>
        <div>Collapse - 32</div>
        <div>Collapse - 33</div>
        <div>Collapse - 34</div>
        <div>Collapse - 35</div>
    </CollapseComponent>
)
