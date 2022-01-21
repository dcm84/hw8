import PropTypes from 'prop-types';

function List(props) {
    const { users, activeUser, onClick: handleClick } = props;

    return (
        <>
            {users.length == 0 && <p>User list is loading ...</p>}
            {users.length > 0 && <ul className="list-group pointed">
                {users.map(o =>
                    <li
                        className={"list-group-item" + (o.id == activeUser ? " active" : "")}
                        key={o.id}
                        onClick={() => handleClick(o.id)}
                    >{o.name}</li>
                )}
            </ul>}
        </>
    )
}

List.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ),
    activeUser: PropTypes.number.isRequired
}

export default List;