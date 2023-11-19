import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Contact from '../pages/Dashboard/Contact';
function Menu() {
    const navigate = useNavigate();
    return (
        <div>
            <ul className='menu'>
                <li onClick={() => navigate(-1)}> Geri</li>
                <a href="/" onClick={() => navigate(-1)}> Geri href</a>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="users">Kullanıcılar</Link></li>
                <li><Link to="contact">İletişim</Link></li>
            </ul>

        </div>
    )
}

export default Menu