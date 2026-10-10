import Link from "next/link";
import PostCard from "./PostCard";

function PostFeed({ posts }) {

    return(
        <div className="Postfeed">
            {posts.map((post) => (
                <Link key={post.id} href={`/post/${post.id}`} className="post-tab">
                    <PostCard post={post}/>
                </Link>

            ))}
        </div>

    );

}

export default PostFeed;