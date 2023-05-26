import ModelSobre from '../../../assets/modelsobre.svg'
import Logo from '../../../assets/logo_preta.png'
import bgSobre from '../../../assets/bgsobre.svg'
import { FaHeartbeat } from 'react-icons/fa';


function Sobre(){
    return(
        <div>
            <div className='w-full
            max-md:mt-20
            '>
                <h3 className='text-center font-bold text-3xl
                max-md:text-2xl
                '>Quem somos e por que existimos?</h3>
            </div>

            <div className='w-[75%] m-auto mt-8 flex items-center gap-20
            max-md:w-[100%] max-md:flex-col max-md:gap-2
            '>
                <p className='w-[55%] p-10
                max-md:w-[90%]  max-md:text-center             
                '>Nós somos a Connect Health - uma plataforma 100% digital que oferece consultas psicologicas e nutricionais para todos que as necessitam. <br/> <br/> Nosso objetivo como instituição é popularizar a alimentação saúdavel e a saúde mental, visto que, muitas pessoas não tem condições para usufruir destes serviços. <br/> <br/> Queremos fazer o bem independente de quem seja. Não visando o lucro, e sim a saúde e bem estar dos nossos clientes. Sinta-se à vontade para explorar a nossa plataforma e explorar a si mesmo com a ajuda de nossos profissionais. 
                </p>

                <img className='w-[45%]
                max-md:w-[100%]
                ' src={ModelSobre} alt="" />
            </div>
            
            <div className='w-full justify-center flex'>
                <img className='w-[5%] dark:invert
                max-md:mt-10 max-md:w-2/12
                ' src={Logo} alt="" />
            </div>

            <div className='w-full mt-16
            max-md:mt-24
            '>
                
                <h3 className='text-center font-bold text-3xl text-[#171FDF] dark:text-white'>Nossos Planos:</h3>
            </div>

            {/* Inicos dos cards*/}

            <div style={{backgroundImage: `url(${bgSobre})`}} className='mt-44 mb-20 w-full bg-no-repeat bg-cover h-[340px] 
            max-md:mt-52 max-md:h-0
            '>
                <div className='grid grid-cols-3 gap-[2.5%] mx-[5%]  
                max-md:grid-cols-1 max-md:gap-[23%] 
                '>
                    <div className='bg-[#EBF3FF] dark:bg-[#070a64] h-auto -mt-[35%]  items-center  flex flex-col rounded-2xl gap-8 pb-4 pt-4 drop-shadow-md'>
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

                    <div className='bg-[#EBF3FF] dark:bg-[#070a64] items-center h-auto -mt-[35%] flex flex-col rounded-2xl gap-8 pb-4 pt-4 drop-shadow-md'>
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

                    <div className='bg-[#EBF3FF] dark:bg-[#070a64] items-center h-auto -mt-[35%] flex flex-col rounded-2xl gap-8 pb-4 pt-4 drop-shadow-md'>
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