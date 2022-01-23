import React, { useState, useEffect } from 'react';
import './UseEffect.css';
import Details from './Details.js';
import List from './List.js';

function UseEffect() {
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState(0);

    //один раз прогружаем список пользователей
    useEffect(() => { updateUsers(); }, []);

    const updateUsers = () => {
        console.log("updating users from " + process.env.REACT_APP_USERS_URL);
        fetch(process.env.REACT_APP_USERS_URL)
            .then(response => {
                return response.json()
            })
            .then(users => {
                setUsers(users);
            });

    }

    //обработчик клика
    const handleClick = id => setActiveUser(id);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <List users={users} activeUser={activeUser} onClick={handleClick} />
                </div>
                <div className="col-4" style={{ width: "324px" }}>
                    <Details id={activeUser} />
                </div>

            </div>
        </div>
    )
}

export default UseEffect;