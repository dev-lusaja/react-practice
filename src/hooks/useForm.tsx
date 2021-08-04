import { useState } from "react"

export const useForm = <T extends Object>(formType: T) => {
    const [form, setForm] = useState(formType)

    const onChangeValue = (key: keyof T, value: string) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    return {
        form,
        onChangeValue
    }
}
