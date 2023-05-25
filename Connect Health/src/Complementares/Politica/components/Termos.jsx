import React from 'react'
import Span from './Span'
import Paragraph from './Paragraph'

const Termos = () => {
  return (
    <div className='pt-32 -mt-10 w-4/5 mx-auto px-[5%] bg-azulsite/10 shadow-md'>
        <h2 className='text-center text-2xl font-bold leading-none' >Termos e Política de Privacidade</h2>
        <h3 className='text-center text-xl font-semibold leading-snug'>Connect Health</h3>

        <p className='text-center mt-5'>Data de entrada em vigor: Maio/2023</p>

        <p className='mt-3 mb-10'>Agradecemos por utilizar os serviços da Connect Health. Nossa plataforma oferece serviços de consultas online com profissionais freelancers nas áreas de nutrição e psicologia, buscando fornecer uma experiência segura e confiável para nossos usuários. A proteção e a privacidade dos dados pessoais são de extrema importância para nós. Leia atentamente os seguintes Termos e Política de Privacidade para entender como tratamos as informações coletadas e utilizadas em nossa plataforma.</p>
        
        <div className='w-[95%] m-auto'>
        <Span 
          span="1. Coleta de Informações"
        />

        <Paragraph
          text="1.1 Informações de Cadastro: Ao se registrar na Connect Health, solicitaremos que forneça informações pessoais, como nome, endereço de e-mail, número de telefone e dados de pagamento, para facilitar a prestação de serviços."
        />

        <Paragraph text="1.2 Informações de Saúde: Durante o processo de consulta, os usuários podem fornecer informações sobre sua saúde, histórico médico, preferências alimentares, entre outros dados relevantes. Essas informações são essenciais para que os profissionais freelancers possam oferecer um serviço adequado e personalizado." />

        <Paragraph text="1.3 Informações de Uso: Coletamos automaticamente informações sobre a utilização de nossa plataforma, como dados de acesso, registros de atividades, endereço IP, tipo de dispositivo e navegador utilizado. Essas informações são coletadas para melhorar a qualidade dos nossos serviços e garantir uma experiência otimizada." />

        <Span span="2. Uso e Compartilhamento de Informações" />

        <Paragraph text="2.1 Uso das Informações: As informações coletadas são utilizadas para:" />
        </div>
          
        
    </div>
  )
}

export default Termos