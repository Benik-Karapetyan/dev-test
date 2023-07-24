import type {Post} from './PostsList';

import {Icon} from '../primitives';

import {mdiDelete} from '@mdi/js';

interface PostCardProps {
  item: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  item: {id, title, body},
  onDelete,
}) => {
  return (
    <div className="flex flex-col gap-y-5 w-[370px] p-5 rounded-lg border">
      <div className="flex justify-between items-center gap-x-10 h-14">
        <h3
          className="text-gray-700 text-lg font-semibold capitalize overflow-hidden text-ellipsis line-clamp-2"
          title={title}
        >
          {title}
        </h3>

        <div className="w-10 h-10">
          <button
            className="text-red-500 shadow-md rounded-full p-2 border-2"
            onClick={() => onDelete(id)}
          >
            <Icon name={mdiDelete} />
          </button>
        </div>
      </div>

      <div>{body}</div>
    </div>
  );
};

export default PostCard;
