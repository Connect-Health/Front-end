import React, { useEffect, useState, useContext } from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Post from './Post';
import Postar from './Postar';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from '../../AutoContext/AuthContext';

const Centro = () => {
  const [data, setData] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const { user } = useContext(AuthContext); // Obter o objeto user do AuthContext

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`https://connect-health.up.railway.app/post`);
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

  return (
    <div className="w-1/2 mb-16 mx-auto mt-20 max-md:w-full">
      <Postar />
      {data.length > 0 ? (
        data.slice(0, visiblePosts).map((post, index) => (
          <Post key={post.postId} post={post} user={user} /> // Fornecer a prop user para o Post
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