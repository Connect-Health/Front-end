import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { AuthContext } from '../../AutoContext/AuthContext';
import Post from './Post';
import Postar from './Postar';

const Centro = () => {
  const [data, setData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const { user } = useContext(AuthContext); // Obter o objeto user do AuthContext

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`https://connecthealth-backend.onrender.com/post`);
        const reversedData = response.data.reverse();
        setData(reversedData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 10);
  };

  const userId = user ? user.id : '';

  return (
    <div className="w-1/2 mb-16 mx-auto mt-20 max-md:w-full">
      <Postar />
      {data.length > 0 ? (
        data.slice(0, visiblePosts).map((post, index) => (
          <Post key={post.postId} post={post} user={user} userId={userId} /> // Fornecer a prop user para o Post
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-center w-full">Carregando posts...</p>
          <CircularProgress />
        </div>
      )}

      {data.length > visiblePosts && (
        <button className="absolute left-1/2 mt-5 text-3xl text-azulsite" onClick={loadMorePosts}>
          <BsFillArrowDownCircleFill />
        </button>
      )}
    </div>
  );
};

export default Centro;