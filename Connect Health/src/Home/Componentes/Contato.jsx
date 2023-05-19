import DesenhoContato from '../../../assets/desenhocontato.svg'
import WaveFooter from '../../../assets/wavefooterhome.svg'
import Elipse from '../../../assets/Elipse.png'
import Logo from '../../../assets/logo_preta.png'
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contato(){
    return(
        <div className='max-md:mt-[1500px]'>
            <div className='w-[100%]'>
                <h1 className='text-center text-3xl font-bold text-[#5855F2]'>Entre em contato conosco!</h1>
            </div>

            <div className='w-[90%] m-auto  mt-10 flex gap-40 items-center mb-24
            max-md:w-[100%] max-md:justify-center max-md: bg-cor-primaria
            '>
                <div className=' flex flex-col h-auto pb-4 bg-[#5855F2] bg-opacity-80 w-[70%] pl-10 pt-10 rounded-2xl shadow-lg
                max-md:w-[100%] 
                '>
                    <div>
                        <h2 className='font-bold text-2xl text-white
                        max-md:text-xl
                        '>Contate-nos</h2>
                        <p className='text-white
                        max-md:text-sm
                        '>Mande suas dúvidas, portfólios e ideias.</p>
                    </div>

                    <div className='flex flex-col gap-10 mt-10
                    max-md:w-[100%]
                    '>
                        <input placeholder='Nome' className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white focus:outline-none' type="text"/>
                        <input placeholder='Email' className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white focus:outline-none' type="email" maxLength={11}/>
                        <input placeholder='Telefone (55)' className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white placeholder:text-white text-white placeholder:shadow-none focus:outline-none
                       
                        ' type="tel" maxLength={11}/>
                        <textarea placeholder='Mensagem' maxLength={255} className='bg-[#F3F9FF] py-3 px-4 opacity-80 w-[70%] h-40 rounded-sm placeholder:text-black  text-black text
                         max-md:w-[100%]
                        ' name="" id="" cols="40" rows="10"></textarea>
                        <button className='bg-[#5855F2] text-white shadow-xl w-[35%] rounded-sm p-2 hover:bg-white hover:text-[#5855F2] transition-all duration-300
                        max-md:ml-12
                        '>Enviar</button>
                    </div>
                </div>

                <div>
                    <img className='w-[100%]
                    max-md:hidden
                    ' src={DesenhoContato} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Contato