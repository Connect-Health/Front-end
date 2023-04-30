import fundo_1 from '../../../assets/fundo_1.png'
import cabeca_1 from '../../../assets/cabeça_1.png'
import mulher_1 from '../../../assets/mulher_1.png'
import Logo from '../../../assets/logo_preta.png'

function BGHome(){
    return(
        <div className="w-full h-auto">
            <div className='w-[20%] h-auto p-5 bg-[#d3d3d3] backdrop-blur-xl rounded-2xl bg-opacity-50 absolute top-[35%] left-[2.7%] z-10'>
                <h3 className='text-center font-bold'>Mantenha-se conectado à sua saúde!</h3>
                <p className='text-sm text-center pt-3'>A saúde é um bem precioso que merece ser valorizado e cuidado com atenção. Aqui acreditamos que a saúde é a base para alcançar nossos objetivos e desfrutar de uma vida plena.</p>
                <img className='w-[30%] pt-5  m-auto  ' src={Logo} alt="" />
            </div>
            <img className='absolute w-full z-10' src={mulher_1} alt="" />
            <img className='absolute w-full' src={cabeca_1} alt="" />
            <img className='bg-cover w-full animate-loading delay-0 ' src={fundo_1} alt="" />
        </div>
        
    )
}
export default BGHome