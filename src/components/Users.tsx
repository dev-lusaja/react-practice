import { User } from '../interfaces/ReqRes';
import { useUser } from '../hooks/useUser';

export const Users = () => {

    const {users, nextData, prevData} = useUser();

    const renderItems = (user: User) => {
        return (
            <tr key={user.id.toString()}>
                <td>
                    <img src={user.avatar} alt={user.first_name} />
                </td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    return (
        <>
            <button className='btn btn-primary' onClick={ prevData }>Prev</button>
            &nbsp;
            <button className='btn btn-primary' onClick={ nextData }>Next</button>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>User</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => renderItems(user))
                    }
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={ prevData }>Prev</button>
            &nbsp;
            <button className='btn btn-primary' onClick={ nextData }>Next</button>
        </>
    )
}
