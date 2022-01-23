import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Details(props) {
    const id = props.id;
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        updateUserInfo(id);
    }, [id]);

    const updateUserInfo = (id) => {
        if (id > 0) {
            let userInfoURL = process.env.REACT_APP_USER_URL + id + ".json";
            console.log("updating user from " + userInfoURL);
            setLoading(true);
            fetch(userInfoURL)
                .then(response => {
                    return response.json()
                })
                .then(user => {
                    setLoading(false);
                    setUser(user);
                });
        }
    }

    //клею к ссылке "?число", чтобы картинка не бралась из кэша, есть варианты лучше? (ключ не срабатывает)
    return (
        <>
            {isLoading && <p>Data is loading</p>}
            {user.id > 0 && !isLoading &&
                <div className="card">
                    <img src={user.avatar + "?" + Math.random()} className="card-img-top" />
                    <ul className="list-group  list-group-flush">
                        <li className="list-group-item">
                            <h5>{user.name}</h5>
                        </li>
                        <li className="list-group-item">City: {user.details.city}</li>
                        <li className="list-group-item">Company: {user.details.company}</li>
                        <li className="list-group-item">Position: {user.details.position}</li>
                    </ul>
                </div>
            }
        </>
    );
}

Details.propTypes = {
        id: PropTypes.number.isRequired
};

export default Details;