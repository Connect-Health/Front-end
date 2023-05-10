import DesenhoContato from '../../../assets/desenhocontato.svg'

function Contato(){
    return(
        <div>
            <div className='w-[100%]'>
                <h1 className='text-center text-3xl'>Entre em contato conosco!</h1>
            </div>

            <div>
                <div className='mt-10 flex flex-col bg-psi w-[40%] items-center'>
                    <div>
                        <h2 className='font-bold text-2xl'>Contate-nos</h2>
                        <p>Mande suas dúvidas, portfólios e ideias.</p>
                    </div>

                    <div>
                        <input type="text"/>
                        <input type="email"/>
                        <input type="tel"/>
                        <textarea className='bg-gradi' name="" id="" cols="40" rows="10"></textarea>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Contato