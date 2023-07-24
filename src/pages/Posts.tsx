import type {Post} from '../components/Posts/PostsList';

import api from '../api';
import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ProgressCircular} from '../components/primitives';
import SearchBox from '../components/Posts/SearchBox';
import PostsList from '../components/Posts/PostsList';

const Posts = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1
  );

  const handleSearchChange = ({
    target: {value},
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value);
  };

  const getPosts = useCallback(async () => {
    try {
      setLoading(true);

      const {data} = await api.get(`/posts?userId=${id}`);
      setPosts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const deletePost = async (id: number, index: number) => {
    try {
      setLoading(true);

      await api.delete(`/posts/${id}`);
      const newPosts = [...posts];
      newPosts.splice(index, 1);
      setPosts(newPosts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="p-10">
      <div className="flex gap-x-10">
        <h2 className="text-blue-950 text-3xl font-semibold">Users Posts</h2>

        <SearchBox value={searchValue} onChange={handleSearchChange} />
      </div>

      {loading ? (
        <div className="flex justify-center p-10">
          <ProgressCircular indeterminate size={55} />
        </div>
      ) : (
        <PostsList posts={filteredPosts} onDelete={deletePost} />
      )}
    </div>
  );
};

export default Posts;
