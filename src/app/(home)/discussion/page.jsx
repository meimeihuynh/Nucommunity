import PostFeed from "../../component/PostFeed";
import { postcard } from "../../data/postCard";

function DiscussionPage() {

    return(
    <div className="discussion-content">
        <div className="posts">
            <PostFeed posts={postcard} />
        </div>
    </div>
    );
}

export default DiscussionPage;