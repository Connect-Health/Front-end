import DesenhoContato from '../../../assets/desenhocontato.svg'

function Contato(){
    return(
        <div>
            <div className='w-[100%]'>
                <h1 className='text-center text-3xl'>Entre em contato conosco!</h1>
            </div>

            <div className='w-[80%] m-auto bg-gradi mt-20 flex'>
                <div className=' flex flex-col bg-psi w-[50%] pl-10 pt-10'>
                    <div>
                        <h2 className='font-bold text-2xl'>Contate-nos</h2>
                        <p>Mande suas dúvidas, portfólios e ideias.</p>
                    </div>

                    <div className='flex flex-col gap-10 mt-10'>
                        <input className='w-[70%] h-[10%] bg-gradi bg-opacity-0 border-b-2 border-white' type="text"/>
                        <input className='w-[70%] h-[10%]' type="email"/>
                        <input className='w-[70%] h-[10%]' type="tel"/>
                        <textarea className='bg-[#F3F9FF] w-[70%] h-[40%]' name="" id="" cols="40" rows="10"></textarea>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Contato