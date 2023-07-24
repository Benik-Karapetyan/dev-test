import PostCard from './PostCard';

export interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsListProps {
  posts: Post[];
  onDelete: (id: number, index: number) => void;
}

const PostsList: React.FC<PostsListProps> = ({posts, onDelete}) => {
  return (
    <div className="flex flex-wrap gap-10 py-10">
      {posts.map((post, i) => (
        <PostCard
          key={post.id}
          item={post}
          onDelete={(id) => onDelete(id, i)}
        />
      ))}
    </div>
  );
};

export default PostsList;
