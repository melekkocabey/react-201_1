import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

function UserDetail() {
    const { id } = useParams();
    const location = useLocation();
    const [user, setUsers] = useState(location.state);

    useEffect(() => {
        if (!user?.id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((data) => setUsers(data));
        }
    }, [id, user]);

    return (
        <div>
            <h2>Kullanıcı Detay</h2>
            {
                user && <pre>{JSON.stringify(user, null, 2)}</pre>
                /* location.state && <pre>{JSON.stringify(location.state, null, 2)}</pre> */
            }
            <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
        </div>
    )
}
//is string olarak geliyor parametre olarak geldiği için 
export default UserDetail