import React from 'react'
import Span from './Span'
import Paragraph from './Paragraph'
import List from './List'
import Logo from '../../../../assets/logo_preta.png'

const Termos = () => {
  return (
    <div className='pt-32 -mt-14 w-4/5 mx-auto px-[5%] bg-azulsite/10 shadow-md mb-10 pb-5 flex flex-col'>
        <h2 className='text-center text-2xl font-bold leading-none' >Termos e Política de Privacidade</h2>
        <h3 className='text-center text-xl font-semibold leading-snug text-azulsite'>Connect Health</h3>

        <img src={Logo} alt="" className='self-center w-32' />

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

        <ul className='ml-14 mb-5 '>
          <List list="Fornecer os serviços contratados, como agendamento de consultas online, comunicação com profissionais freelancers e fornecimento de recursos adicionais;" />
          <List list="Personalizar a experiência do usuário, oferecendo recomendações e conteúdos relevantes;" />
          <List list="Garantir a segurança da plataforma, protegendo-a contra atividades fraudulentas, abuso ou violações de nossos Termos de Serviço;" />
          <List list="Realizar pesquisas e análises para aprimorar nossos serviços e desenvolver novas funcionalidades." />
        </ul>

        <Paragraph text="2.2  Compartilhamento de Informações: Não compartilhamos informações pessoais dos usuários com terceiros sem o seu consentimento, exceto nas seguintes circunstâncias:" />

        <ul className='ml-14 mb-5'>
          <List list="Com profissionais freelancers: Para facilitar a prestação dos serviços contratados, compartilhamos as informações fornecidas pelos usuários com os profissionais freelancers envolvidos na consulta;" />
          <List list="Com parceiros de processamento de pagamento: Para processar transações financeiras, podemos compartilhar informações com fornecedores de serviços de pagamento de confiança;" />
          <List list="Para cumprir com obrigações legais: Podemos compartilhar informações pessoais se formos obrigados por lei, regulamentação ou ordem judicial;" />
          <List list="Com consentimento do usuário: Podemos compartilhar informações pessoais com terceiros se o usuário fornecer consentimento explícito para tal compartilhamento." />
        </ul>

        <Span span="3. Segurança das Informações" />

        <Paragraph text="Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger as informações coletadas contra acesso não autorizado, uso indevido, divulgação ou destruição. No entanto, é importante ressaltar que nenhum método de transmissão de dados pela internet ou de armazenamento eletrônico é completamente seguro." />

        <Span span="4. Direitos dos Usuários" />

        <Paragraph text="Os usuários da Connect Health têm direitos relacionados às suas informações pessoais, incluindo:" />

        <ul className='ml-14'>
          <List list="Acessar, corrigir ou atualizar seus dados pessoais;" />
          <List list="Solicitar a exclusão dos dados pessoais;" />
          <List list="Retirar o consentimento fornecido para o uso das informações;" />
          <List list="Restringir o processamento das informações pessoais;" />
          <List list="Solicitar a portabilidade dos dados para outro serviço, quando aplicável." />
        </ul>

        <Paragraph text="Para exercer esses direitos ou obter mais informações sobre como tratamos as informações pessoais, entre em contato conosco por meio dos canais disponibilizados na plataforma." />

        <Span span="5. Alterações na Política de Privacidade" />

        <Paragraph text="Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas na plataforma e a data de entrada em vigor será atualizada. Recomendamos que os usuários revisem periodicamente esta política para estar cientes das atualizações." />

        <Paragraph text="Ao utilizar os serviços da Connect Health, você concorda com os termos e a política de privacidade descritos acima. Se tiver alguma dúvida ou preocupação sobre nossa coleta e uso de informações, entre em contato conosco. Estamos comprometidos em proteger sua privacidade e garantir uma experiência segura e confiável em nossa plataforma." />
        </div>


          
        
    </div>
  )
}

export default Termos