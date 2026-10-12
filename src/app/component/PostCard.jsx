import { postcard } from "../data/postCard";
import { EyeIcon, ChatElipsisIcon, HeartIcon} from '@navikt/aksel-icons';

function PostCard({ post }) {
  return (
    <div className="postcard-container">
      <div className="postcard-content">
        <div className="user-details">
            <img src={post.profileImage} alt="PP" className="profile-image"/>
            <h2 className="username">{post.username}</h2>
            <button className="followbutton">Follow</button>
         </div>
            <p className="posttime">{post.postedAt}</p>
            <h1 className="Subject-matter">{post.subjectTitle}</h1>
            <p className="post-description">{post.description}</p>
            <img src={post.image} alt="PostImage" className="post-image"/>
            <p className="hashtags">
                {post.hashtags.map((tag) => (<span key={tag}>{tag}</span>
            ))}
            </p>
           <h3 className="post-interactive">
            <span className="Eye-icon">
                <EyeIcon title="a11y-title" fontSize="1.5rem" />
                <span>{post.views}</span>
            </span>
            <span className="Comment-icon">
                <ChatElipsisIcon title="a11y-title" fontSize="1.5rem" />
                <span>{post.comments}</span>
            </span>
            <span className="Heart-icon">
                <HeartIcon title="a11y-title" fontSize="1.5rem" />
                <span>{post.likes}</span>
            </span>
            </h3>
         
      </div>
    </div>
  );
}

export default PostCard;