import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
    return(
    <div className="ui container comments">
        <CommentDetail author="Master" timeAgo="Today at 4:45 PM" comment="Yeah!" avatar={faker.image.avatar()} />
        <CommentDetail author="Commander" timeAgo="Today at 3:27 AM" comment="Superbbbb" avatar={faker.image.avatar()} />
        <CommentDetail author="Slave" timeAgo="Yesterday at 1:57 AM" comment="Nice" avatar={faker.image.avatar()} />
    </div>
    );
}

export default App;