import { useReducer, useEffect } from "react";

interface AuthState {
    validating: boolean,
    token: string,
    user: string,
    name: string
}

const initialState: AuthState = {
    validating: true,
    token: '',
    user: '',
    name: ''
}

type LoginPayload = {
    user: string,
    name: string
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: '',
                user: '',
                name: ''
            }
        case 'login':
            return {
                validating: false,
                token: 'ABC123',
                user: action.payload.user,
                name: action.payload.name
            }
        default:
            return state;
    }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = () => {
        dispatch({type: 'login', payload: {
            name: 'Oscar',
            user: 'Devlusaja'
        }})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500)
    }, [])

    if (state.validating === true) {
        return (
            <div className='alert alert-info'>
                Validando...
            </div>
        )
    }

    return (
        <>
        {
            (state.token)
                ? <div className='alert alert-success'> Bienvenido: {state.name } - <small>{state.user}</small> </div>
                : <div className='alert alert-danger'> No autenticado </div>
        }
        {
            (state.token)
            ? <button className='btn btn-danger' onClick={ logout }>Logout</button>
            : <button className='btn btn-primary' onClick={ login }>Login</button>
        }
        </>
    )
}
