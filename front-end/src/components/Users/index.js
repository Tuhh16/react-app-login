import React, { useState, useEffect, useContext } from 'react'

import api from '../../api'
import { Context } from '../../context/AuthContext'

const Users = () => {
    const { handleLogout } = useContext(Context)
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
          const { data } = await api.get('/users');
    
          setUsers(data);
        })();
    }, []);

    return (
        <div className="users">
            <h2>Lista de Usuário</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p><b>Nome:</b> {user.name}</p>
                        <p><b>Site:</b> {user.website}</p>
                    </li>
                ))}
            </ul>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

export default Users