import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);//çekilen kullanıcıları bu users a alalım

    useEffect(() => {  //comp mount edildiği anda bir istek başlat
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));//kullanıcıları set et
    }, [])
    return (
        <div>
            <h2>Kullanıcılar</h2>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <Link to={`${user.id}`} state={user}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
}

export default Users