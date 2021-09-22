import { useForm, FormStatus } from '../useForm'
import * as yup from 'yup'

describe('useForm', () => {
    it('Should be to pass', () => {
        let schema = yup.object().shape({
            login: yup.string().required('o campo login é obrigatório'),
            password: yup.string().required('o campo password é obrigatório')
        })

        const { handleChange, fields, fieldsError, setFormStatus } = useForm({
            schema,
            fieldsInitialValue: { login: '', password: '' }
        })
        // const event = {
        //     preventDefault() {},
        //     target: { value: 'the-value' }
        // }
        const event = {
            target: { name: 'login', value: 'user.martins' }
        } as React.ChangeEvent<HTMLInputElement>

        handleChange(event)

        setFormStatus(FormStatus.SUBMITTED)

        expect(fields.login).toBe('user.martins')
        expect(fieldsError).toBe('o campo login é obrigatório')
    })
})
