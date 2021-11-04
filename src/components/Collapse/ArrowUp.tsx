import React from 'react'

export const ArrowUp = ({ ...props }) => {
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
                d="M1 1L7 7L13 1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
