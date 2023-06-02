import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import Post from './Post';
import Postar from './Postar';
import { useEffect, useState } from 'react';
import axios from 'axios';



const centro = () => {
  const [data, setData] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(10);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(`https://connect-health.up.railway.app/post`);
        setData(response.data);
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
    <div className="w-1/2 mb-16 mx-auto mt-20">
      <Postar />
      {data ? (
        data.slice(0, visiblePosts).map((post) => (
          <Post key={post.postId} post={post} />
        ))
      ) : (
        <p>Carregando posts...</p>
      )}

      {data && data.length > visiblePosts && (
        <button className="absolute left-1/2 mt-5 text-3xl text-azulsite" onClick={loadMorePosts}>
          <BsFillArrowDownCircleFill />
        </button>
      )}
    </div>
  );
};
export default centro;