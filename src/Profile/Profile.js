import PropTypes from 'prop-types';

export default function Profile(props) {
   return  (
        <div className="profile" id={props.tag}>
            <div className="description">
                <img
                    src={props.avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                />
                <p className="name">{props.name}</p>
                <p className="tag">@{props.tag}</p>
                <p className="location">{props.location}</p>
            </div>
            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity"> {props.stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity"> {props.stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity"> {props.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
        followers:PropTypes.number,
        views:PropTypes.number,
        likes:PropTypes.number,
    }),

}