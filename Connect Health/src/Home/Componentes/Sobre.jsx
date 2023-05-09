import ModelSobre from '../../../assets/modelsobre.svg'
import Logo from '../../../assets/logo_preta.png'



function Sobre(){
    return(
        <div>
            <div className='w-full'>
                <h3 className='text-center font-bold text-3xl'>Quem somos e por que existimos?</h3>
            </div>

            <div className='w-[75%] m-auto mt-8 flex items-center gap-20 '>
                <p className='w-[55%] p-10'>Nós somos a Connect Health - uma plataforma 100% digital que oferece consultas psicologicas e nutricionais para todos que as necessitam. <br/> <br/> Nosso objetivo como instituição é popularizar a alimentação saúdavel e a saúde mental, visto que, muitas pessoas não tem condições para usufruir destes serviços. <br/> <br/> Queremos fazer o bem independente de quem seja. Não visando o lucro, e sim a saúde e bem estar dos nossos clientes. Sinta-se à vontade para explorar a nossa plataforma e explorar a si mesmo com a ajuda de nossos profissionais. 
                </p>

                <img className='w-[45%]' src={ModelSobre} alt="" />
            </div>
            
            <div className='w-full justify-center flex'>
                <img className='w-[5%]' src={Logo} alt="" />
            </div>

            <div className='w-full mt-6'>
                
                <h3 className='text-center font-bold text-3xl text-[#171FDF]'>Nossos Planos:</h3>
            </div>

            <div className='mt-40 mb-40 w-full h-[320px] bg-sobre'>
                <div className='grid grid-cols-3 gap-[2.5%] mx-[5%]'>
                    <div className='bg-[#EBF3FF] items-center  flex flex-col rounded-2xl gap-8'>
                        <h2 className='text-xl text-center font-bold pt-6'>Plano mensal Gratuito <br/> R$00,00</h2>
                        <p>Você tem direito a:</p>
                        <div>
                            <div>
                                <p>2 consultas com Psicólogo;</p>
                            </div>
                            
                            <div>
                                <p>1 consulta com Nutricionista;</p>
                            </div>
                            
                            <div>
                                <p>Consultas de 30 minutos; </p>
                            </div>
                            
                            <div>
                                <p>Acesso ao feed de Notícias;</p>
                            </div>

                            <div>
                                <p>Área de gerenciamento de consultas.</p>
                            </div>
                            
                            
                        </div>
                            
                    </div>

                    <div className='bg-gradi text-center'>
                        <h2>Plano mensal Gratuito <br/> R$00,00</h2>
                        <p>Você tem direito a:</p>
                        <ul>
                            <li>2 consultas com Psicólogo;</li>
                            <li>1 consulta com Nutricionista;</li>
                            <li>Consultas de 30 minutos; </li>
                            <li>Acesso ao feed de Notícias;</li>
                            <li>Área de gerenciamento de consultas.</li>
                        </ul>
                    </div>

                    <div className='bg-gradi text-center'>
                        <h2>Plano mensal Gratuito <br/> R$00,00</h2>
                        <p>Você tem direito a:</p>
                        <ul>
                            <li>2 consultas com Psicólogo;</li>
                            <li>1 consulta com Nutricionista;</li>
                            <li>Consultas de 30 minutos; </li>
                            <li>Acesso ao feed de Notícias;</li>
                            <li>Área de gerenciamento de consultas.</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sobre