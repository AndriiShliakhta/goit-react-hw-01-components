import { avatar, name, tag, location, stats } from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";

export default function App(props) {
    return (
        <>
         <Profile name={name}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
        />
        <Statistics
            stats={statisticalData}
            />
        <FriendList
            friends={friends}
        />
        
        </>
    );
};
