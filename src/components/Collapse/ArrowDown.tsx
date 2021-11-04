import React from 'react'

export const ArrowDown = ({ ...props }) => {
    return (
        <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            stroke="currentColor"
            {...props}
        >
            <path
                d="M13 7L7 0.999999L1 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
