import { BsBookmark } from 'react-icons/bs';
import { BsTrophy, BsEmojiSmile } from 'react-icons/bs';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { GrGallery } from 'react-icons/gr';
import { HiLocationMarker } from 'react-icons/hi';
import { BsThreeDots } from 'react-icons/bs';
import wiu from '../../../assets/wiu.jpeg';
import verseck from '../../../assets/verseck.jpeg';
import roger from '../../../assets/roger.png';
import fruta from '../../../assets/fruta.avif';
import mulher from '../../../assets/mulhersaudavel.avif';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import recomendar from '../../../assets/recomendar.png';
import personal from '../../../assets/personal.png';
import profissional1 from '../../../assets/profissional1.png';
import profissional2 from '../../../assets/profissional2.png';
import profissional3 from '../../../assets/profissional3.png';
import profissional4 from '../../../assets/profissional4.png';
import profissional5 from '../../../assets/profissional5.png';
import Post from './Post';
import Menu from './Menu';
import Recomendacoes from './Recomendacoes';
import Postar from './Postar';
import { useEffect, useState } from 'react';
import axios from 'axios';



const centro = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fecthPosts() {
        try {
          const response = await axios.get(`https://connect-health.up.railway.app/post`)
          setData(response.data)
        } catch (error) {
          console.log(error)
        }
      }
  
      fecthPosts()
    }, [])

    console.log(data)


    return (
      <div className="w-1/2 mb-10">
        <Postar />
        {data ? (
          data.map((post) => (
            <Post key={post.postId} post={post} />
          ))
        ) : (
          <p>Carregando posts...</p>
        )}
      </div>
    );
}
export default centro