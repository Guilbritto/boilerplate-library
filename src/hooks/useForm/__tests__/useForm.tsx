import { useForm, FormStatus } from '../useForm'
import { renderHook, act } from '@testing-library/react-hooks'
import { ChangeEvent } from 'react'
import * as yup from 'yup'

const required = {
    login: 'o campo login é obrigatório',
    password: 'o campo password é obrigatório'
}

let schema = yup.object().shape({
    login: yup.string().required(required.login),
    password: yup.string().required(required.password)
})

describe('useForm', () => {
    it('Should be able to handleChange to change fields', () => {
        const { result } = renderHook(() =>
            useForm({
                schema,
                fieldsInitialValue: { login: '', password: '' }
            })
        )

        const target = { name: 'login', value: 'user.martins' }

        const event = {
            target: target
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(event)
        })

        expect(result.current.fields.login).toBe(target.value)

        const newTarget = { name: 'password', value: '12345' }

        const newEvent = {
            target: newTarget
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(newEvent)
        })

        expect(result.current.fields.login).toBe(target.value)
        expect(result.current.fields.password).toBe(newTarget.value)
    })

    it('Should be able to setFormStatus to change formStatus', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useForm({
                schema,
                fieldsInitialValue: { login: '', password: '' }
            })
        )

        expect(result.current.formStatus).toBe(FormStatus.IDLE)

        act(() => {
            result.current.setFormStatus(FormStatus.SUBMITTING)
        })

        expect(result.current.formStatus).toBe(FormStatus.SUBMITTING)

        act(() => {
            result.current.setFormStatus(FormStatus.SUBMITTED)
        })

        await waitForNextUpdate()

        expect(result.current.formStatus).toBe(FormStatus.SUBMITTED)

        act(() => {
            result.current.setFormStatus(FormStatus.COMPLETED)
        })

        expect(result.current.formStatus).toBe(FormStatus.COMPLETED)
    })

    it('Should be able to fieldsError add erros for client side validation', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useForm({
                schema,
                fieldsInitialValue: { login: '', password: '' }
            })
        )

        act(() => {
            result.current.setFormStatus(FormStatus.SUBMITTED)
        })

        await waitForNextUpdate()

        expect(result.current.formStatus).toBe(FormStatus.SUBMITTED)
        expect(result.current.fieldsError.login).toBe(required.login)
        expect(result.current.fieldsError.password).toBe(required.password)

        const target = { name: 'login', value: 'user.martins' }

        const event = {
            target: target
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(event)
        })

        await waitForNextUpdate()

        expect(result.current.fields.login).toBe(target.value)
        expect(result.current.fieldsError.password).toBe(required.password)

        const newTarget = { name: 'password', value: '12345' }

        const newEvent = {
            target: newTarget
        } as ChangeEvent<HTMLInputElement>

        act(() => {
            result.current.handleChange(newEvent)
        })

        await waitForNextUpdate()

        expect(result.current.fields.login).toBe(target.value)
        expect(result.current.fields.password).toBe(newTarget.value)
        expect(result.current.fieldsError).toBe(undefined)
    })
})
