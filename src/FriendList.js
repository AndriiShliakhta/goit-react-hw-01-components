import PropTypes from 'prop-types';


export default function FriendList({ friends }) {
    console.log(friends);
    return (
        <ul className="friend-list">
            {friends.map(friend => {
                return  <li className="item" key={friend.id}>
                            <span className="status">{friend.isOnline}</span>
                            <img className="avatar" src={friend.avatar} alt="Аватарка" width="48" />
                            <p className="name">{friend.name}</p>
                        </li>
            })}
        </ul>

       
        
    );
};
FriendList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        isOnline:PropTypes.bool,
        avatar:PropTypes.string,
        name:PropTypes.string,
    }))
}

