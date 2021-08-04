import { reqResApi } from '../api/reqRes';
import { useState, useRef, useEffect } from 'react';
import { User, ReqResList } from '../interfaces/ReqRes';

export const useUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const pageRef = useRef(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        userData();
    }, [])

    const userData = async () => {
        const response = await reqResApi.get<ReqResList>('/users', {
            params: {
                page: pageRef.current
            }
        })

        setTotalPage(response.data.total_pages);
        setUsers(response.data.data);
    }

    const prevData = () => {
        if (pageRef.current > 1) {
            pageRef.current--;
            userData();
        } else {
            alert("Ya no puede retroceder mas paginas");
        }
    }

    const nextData = () => {
        if (pageRef.current < totalPage) {
            pageRef.current++;
            userData();
        } else {
            alert("Ya no hay mas data para cargar");
        }
    }

    return {users, nextData, prevData}
}
