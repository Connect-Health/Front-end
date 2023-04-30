import fundo_1 from '../../../assets/fundo_1.png'
import cabeca_1 from '../../../assets/cabeça_1.png'
import mulher_1 from '../../../assets/mulher_1.png'

function BGHome(){
    return(
        <div className="w-full h-auto">
            <img className='absolute w-full z-10' src={mulher_1} alt="" />
            <img className='absolute w-full' src={cabeca_1} alt="" />
            <img className='bg-cover w-full ' src={fundo_1} alt="" />
        </div>
    )
}
export default BGHome