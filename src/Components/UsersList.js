'use strict'

import { useEffect, useState } from "react"
import '../CSS/UserList.css'


function UsersList() {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok) {
                    throw new Error("Ошибка загрузки пользователей");
                }
                const data = await response.json();
                setUsersData(data);
            } catch(err) {
                setError(error)
            } finally {
                setLoading(false)
            }
        };

        fetchUsers();

        const interValid = setInterval(fetchUsers, 10000); // setInterval вызывает fetchUsers каждые 10 секунд.
        return () => clearInterval(interValid); // clearInterval гарантирует, что таймер удалится, если компонент будет убран.

    }, []);

    if(loading) return <p>Загрузка...</p>
    if(error) return <p>Ошибка: {error}</p>

    return (
        <div>
            <div className="conteiner">
                    <ul style={{listStyle: "none", fontSize: "xx-small"}}>
                        {usersData.map(user => (
                            <li key = {user.id}>
                                <h1>{user.name}</h1>
                                <p>Email: {user.email}</p>
                                <p>Город: {user.city}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>    
    );
}

export default UsersList