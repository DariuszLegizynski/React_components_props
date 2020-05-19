import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return(
    <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning!</h4>
                Are you sure, you want to do this?
            </div>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Master" timeAgo="Today at 4:45 PM" comment="Yeah!" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Commander" timeAgo="Today at 3:27 AM" comment="Superbbbb" avatar={faker.image.avatar()} />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Slave" timeAgo="Yesterday at 1:57 AM" comment="Nice" avatar={faker.image.avatar()} />
        </ApprovalCard>
    </div>
    );
}

export default App;