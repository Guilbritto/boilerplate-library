import React, { useEffect } from 'react'
import { useTheme } from '../../../hooks/useTheme/ThemeContext'
import { useToast } from '../../../hooks/useToast'
import { Error } from '@svg/Error'
import { Success } from '@svg/Success'
import { Warning } from '@svg/Warning'
import { Close } from '@svg/Close'
import { Container } from './styles'
import { ToastMessages } from '@hooks/useToast/ToastContext'

interface ToastProsp {
    toast: ToastMessages
    style?: object
}

const Toast = ({ toast, style }: ToastProsp) => {
    const { removeToast } = useToast()
    const theme = useTheme()
    const ToastIcons = {
        success: Success,
        warning: Warning,
        error: Error
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(toast.id)
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <Container style={style} toastType={toast.type} theme={theme}>
            <div>
                {ToastIcons[toast.type]}
                <p>{toast.message}</p>
            </div>
            <button onClick={() => removeToast(toast.id)}>{Close}</button>
        </Container>
    )
}

export default Toast
