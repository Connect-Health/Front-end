import ModelSobre from '../../../assets/modelsobre.svg'
import Logo from '../../../assets/logo_preta.png'
import { FaHeart, FaHeartbeat } from 'react-icons/fa';


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

            <div className='w-full mt-16'>
                
                <h3 className='text-center font-bold text-3xl text-[#171FDF]'>Nossos Planos:</h3>
            </div>

            {/* Inicos dos cards*/}

            <div className='mt-44 mb-20 w-full h-[340px] bg-sobre'>
                <div className='grid grid-cols-3 gap-[2.5%] mx-[5%]  '>
                    <div className='bg-[#EBF3FF] h-auto -mt-[35%]  items-center  flex flex-col rounded-2xl gap-8 pb-4 pt-4 '>
                        <h2 className='text-xl text-center font-bold pt-6'>Plano mensal Gratuito <br/> R$00,00</h2>
                        <p>Você tem direito a:</p>
                        <div className='pb-10'>
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>2 consultas com Psicólogo;</p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>1 consulta com Nutricionista;</p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Consultas de 30 minutos; </p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Acesso ao feed de Notícias;</p>
                            </div>

                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Área de gerenciamento de consultas.</p>
                            </div>
                            
                            
                        </div>


                            
                    </div>

                    <div className='bg-[#EBF3FF] items-center h-auto -mt-[35%] flex flex-col rounded-2xl gap-8'>
                        <h2 className='text-xl text-center font-bold pt-6'>Plano mensal Standart <br/> R$100,00</h2>
                        <p>Você tem direito a:</p>
                        <div className='pb-10'>
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>4 consultas com Psicólogo;</p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>2 consulta com Nutricionista;</p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Consultas de 45 minutos; </p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Acesso ao feed de Notícias;</p>
                            </div>

                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Área de gerenciamento de consultas.</p>
                            </div>
                            
                            
                        </div>

                        
                            
                    </div>

                    <div className='bg-[#EBF3FF] items-center h-auto -mt-[35%] flex flex-col rounded-2xl gap-8'>
                        <h2 className='text-xl text-center font-bold pt-6'>Plano mensal Premium <br/> R$150,00</h2>
                        <p>Você tem direito a:</p>
                        <div className='pb-10'>
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>5 consultas com Psicólogo;</p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>2 consulta com Nutricionista;</p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Consultas de 60 minutos;  </p>
                            </div>
                            
                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Acesso ao feed de Notícias;</p>
                            </div>

                            <div className='flex items-center gap-1 justify-center'>
                                <FaHeartbeat className="text-[4px] " />
                                <p>Área de gerenciamento de consultas.</p>
                            </div>
                            
                            
                        </div>

                        
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sobre