import DesenhoContato from '../../../assets/desenhocontato.svg'
import WaveFooter from '../../../assets/wavefooterhome.svg'
import Elipse from '../../../assets/Elipse.png'
import Logo from '../../../assets/logo_preta.png'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contato(){
    return(
        <div>
            <div className='w-[100%]'>
                <h1 className='text-center text-3xl font-bold text-[#5855F2]'>Entre em contato conosco!</h1>
            </div>

            <div className='w-[90%] m-auto  mt-10 flex gap-40 items-center mb-24'>
                <div className=' flex flex-col h-auto pb-4 bg-[#5855F2] bg-opacity-80 w-[70%] pl-10 pt-10 rounded-2xl shadow-lg'>
                    <div>
                        <h2 className='font-bold text-2xl text-white'>Contate-nos</h2>
                        <p className='text-white'>Mande suas dúvidas, portfólios e ideias.</p>
                    </div>

                    <div className='flex flex-col gap-10 mt-10'>
                        <input placeholder='Nome' className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white focus:outline-none' type="text"/>
                        <input placeholder='Email' className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white focus:outline-none' type="email" maxLength={11}/>
                        <input placeholder='Telefone (55)' className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white placeholder:shadow-none focus:outline-none' type="tel" maxLength={11}/>
                        <textarea placeholder='Mensagem' maxLength={255} className='bg-[#F3F9FF] py-3 px-4 opacity-80 w-[70%] h-40 rounded-sm placeholder:text-black  text-black text' name="" id="" cols="40" rows="10"></textarea>
                        <button className='bg-[#5855F2] text-white shadow-xl w-[35%] rounded-sm p-2 hover:bg-white hover:text-[#5855F2] transition-all duration-300'>Enviar</button>
                    </div>
                </div>

                <div>
                    <img className='w-[100%]' src={DesenhoContato} alt="" />
                </div>
            </div>

            
            
            <div className='h-80 bg-[#1E5BD1] flex flex-col relative z-0'>
                <img src={Elipse} alt="" className='absolute w-full  z-50' />

                <div className='flex items-center flex-col pt-16'>
                    <a href='#home' className='scroll-smooth w-1/12 invert hover:scale-90 hover:bg-[#457ff4] hover:invert-0 transition duration-200 rounded-full'>
                        <img src={Logo} alt="" />
                    </a>

                    <div className='flex gap-10 mt-10'>
                        <Link to="https://twitter.com" target='_blank'>
                            <FaTwitter  className='text-white text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2'/>
                        </Link>
                            <Link to="https://instagram.com/cnnthealth" target='_blank'>
                        <FaInstagram  className='text-white text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2'/>
                        </Link>
                        <Link to="https://facebook.com" target='_blank'>
                            <FaFacebookF className=' text-white text-4xl border-2 hover:scale-125 transition duration-200 rounded-full p-2' />
                        </Link>
                    </div>
                </div>

                <div className='flex items-center justify-between mx-10 mt-10'>
                    <p className='flex items-center text-white'>
                        <MdCopyright />
                        2023 Connect Health
                    </p>

                    <div className='flex gap-4 text-sm'>
                        <p className=' text-white'>Ajuda</p>
                        <p className=' text-white'>Contato</p>
                        <p className=' text-white'>Politica de Privacidade</p>
                        <p className=' text-white'>Termos de Uso</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contato