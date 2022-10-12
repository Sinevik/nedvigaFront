import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   min-height: 80vh;
   flex-direction: column;
`;

const Content = styled.div`
   padding: 10px;
   min-height: 80vh;
   display: flex;
   flex-direction: column;
   background: #FFFFFF;
`;

const Header = styled.p`
   margin: 0px;
   padding: 20px 0px 20px 0px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 24px;
   text-align: center;
   letter-spacing: 0.005em;
   color: #000000;
`;

const Title = styled.p`
   margin: 0px;
   padding: 16px 0px 16px 0px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 600;
   font-size: 18px;
   line-height: 20px;
   text-align: center;
   letter-spacing: 0.005em;
   color: #000000;
`;

const Text = styled.p`
   margin: 0px;
   padding: 20px 0px 20px 0px;
   font-family: 'Roboto';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   letter-spacing: 0.005em;
   color: #000000;
`;

const Span = styled.span`
   font-weight: 600;
`;

const Ul = styled.ul`
  padding: 0px 0px 0px 60px;
`;

const Li = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.005em;
  color: #000000;
`;


const Public = () => {
  return (
    <Container>
      <Content>
        <Header>
            ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
        </Header>
        <Text>
            Настоящее Пользовательское соглашение регулирует отношения между Индивидуальным предпринимателем Синевич Иван Владимирович УНП 693233790 (далее – Поставщик услуг) и пользователем сети Интернет (далее - Пользователь), возникающие при использовании интернет-ресурса https://nedviga.by/ (далее - Сайт) на указанных в Пользовательском соглашении условиях.
            Полным и безоговорочным принятием данного предложения Поставщика услуг в адрес Пользователя о заключении договора является совершение Пользователем действий, направленных на использование Сайта, в том числе, поиск, просмотр или подача объявлений, регистрация на Сайте, работа с платными статусами объявлений (при наличии), направление сообщений через форму связи и прочие действия по использованию функциональности Сайта.
            Пользовательское соглашение может быть изменено Поставщиком услуг в любое время без какого-либо специального уведомления об этом Пользователя. Новая редакция Пользовательского соглашения вступает в силу с момента ее размещения на Сайте, если Поставщиком услуг прямо не указано иное. Регулярное ознакомление с действующей редакцией Пользовательского соглашения является обязанностью Пользователя. Использование Сайта после вступления в силу новой редакции Пользовательского соглашения означает согласие с ней Пользователя. Действующая редакция настоящего Пользовательского соглашения доступна по адресу https://nedviga.by/public
        </Text>
        <Title>
            1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ
        </Title>
        <Text>
            В настоящем Пользовательском соглашении термины, указанные ниже, имеют следующее значение:
        </Text>
        <Text>
          <Span>Оферта</Span> – настоящий документ (Соглашение), размещенный в сети интернет по адресу https://nedviga.by/public.
        </Text>
        <Text>
          <Span>Поставщик услуг</Span> – Индивидуальный предприниматель Синевич Иван Владимирович, УНП 693233790.
        </Text>
        <Text>
          <Span>Интернет-сайт</Span> – совокупность веб-страниц, размещенных на виртуальном сервере и образующих единую структуру, расположенных в сети интернет по адресу https://nedviga.by/.
        </Text>
        <Text>
          <Span>Пользователь</Span> – посетитель ресурсов сети Интернет, в том числе https://nedviga.by/.
        </Text>
        <Text>
          <Span>Объявление</Span> – информационное сообщение с предложением об Объекте (включая контактную информацию, фотографии и любую сопутствующую информацию), размещаемое Пользователем на Сайте, адресованное неопределенному кругу лиц.
        </Text>
        <Text>
          <Span>Объект</Span> – любой объект недвижимости, продукт, услуга, в отношении которого Пользователь размещает на Сайте Объявление.
        </Text>
        <Text>
          <Span>Арендодатель/Продавец</Span> – Пользователь, размещающий на Сайте Объявление с предложением заключить сделку в отношении Объекта.
        </Text>
        <Text>
          <Span>Арендатор/Покупатель</Span> – Пользователь, осуществляющий просмотр размещенного Продавцом Объявления и/или взаимодействие с Продавцом в отношении Объекта и/или заключающий сделку с Арендодателем/Продавцом.
        </Text>
        <Text>
          <Span>Учетные данные</Span> – уникальный логин (указанные Пользователем адрес электронной почты и/или номер телефона) и пароль, создаваемые самостоятельно Пользователем в процессе Регистрации на Сайте либо измененные в дальнейшем Пользователем через Личный кабинет или иным способом, используемые для доступа в Личный кабинет после Регистрации Пользователя на Сайте.
        </Text>
        <Text>
          <Span>Регистрация</Span> – совокупность действий Пользователя в соответствии с указанными на Сайте инструкциями, включая предоставление Учетных данных и иной информации, совершаемых Пользователем с использованием специальной формы пользовательского интерфейса Сайта в целях формирования Личного кабинета и получения доступа к отдельным Сервисам Сайта.
        </Text>
        <Text>
          <Span>Cервисы</Span> – любые функциональные возможности, службы, инструменты, доступные для Пользователей на Сайте.
        </Text>
        <Text>
          <Span>Личный кабинет</Span> — персональный раздел Пользователя на Сайте, связанный с учетной записью Пользователя на Сайте, в котором Пользователю доступно управление отдельными Сервисами Сайта, в том числе их заказ, подключение / отключение.
        </Text>
        <Text>
          <Span>Сведения</Span> — любые информация и материалы, предоставляемые Пользователем Поставщику услуг в связи с использованием Сайта, в том числе, адрес электронной почты, контактная информация, фотографии и прочее.
        </Text>
        <Title>
            2. ОБЩИЕ ПОЛОЖЕНИЯ. ДОСТУП К СЕРВИСАМ САЙТА
        </Title>
        <Text>
            2.1. Поставщик услуг предлагает Пользователю на условиях настоящего Пользовательского соглашения воспользоваться доступными на Сайте Сервисами, включая размещение, поиск и просмотр Объявлений. В отношении использования отдельных Сервисов Поставщиком услуг могут быть установлены дополнительные условия, правила и ограничения.
        </Text>
        <Text>
            2.2. Сервисы предоставляются Пользователю бесплатно, если специально не указано иное.
        </Text>
        <Text>
            2.3. Предоставление отдельных Сервисов может регулироваться специальными правилами и/или соглашениями, являющимися неотъемлемой частью настоящего Пользовательского соглашения, в том числе индивидуальными соглашениями, составленными в письменной форме и подписанными Поставщиком услуг и Пользователем собственноручно. В случае противоречия или несоответствия между текстом настоящего Пользовательского соглашения и специальными правилами и/или соглашениями применению подлежат последние.
        </Text>
        <Text>
            2.4. Сайт является площадкой, позволяющей Продавцам самостоятельно на свой страх и риск размещать предложения, адресованные неопределенному кругу лиц на совершение сделки в отношении Объекта, которым Продавец правомочен распоряжаться (делать предложения), а Покупателям принимать на свое усмотрение и под свою ответственность предложения, размещенные на Сайте Продавцами, заключая соответствующую сделку с Продавцом.Поставщик услуг не является организатором сделки, Покупателем, Продавцом, посредником, агентом или представителем какого-либо Пользователя и/или иным заинтересованным лицом в отношении предлагаемой/заключаемой между Пользователями сделки. Все совершаемые благодаря размещению Объявления на Сайте сделки между Пользователями заключаются и исполняются без прямого или косвенного участия Поставщика услуг.
        </Text>
        <Text>
            2.5. Независимо от факта Регистрации или авторизации Пользователя на Сайте, использование Сайта, включая просмотр размещенной на Сайте информации, означает согласие Пользователя с настоящим Пользовательским соглашением и принятие на себя обязательств следовать инструкциям по использованию Сервисов, а также ответственности за действия, связанные с использованием Сайта.
        </Text>
        <Text>
            2.6. Осуществляя доступ к Сайту и заключая таким образом настоящее Пользовательское соглашение, Пользователь гарантирует, что обладает всеми правами и полномочиями, необходимыми для заключения и исполнения Пользовательского соглашения, в том числе является совершеннолетним и полностью дееспособным лицом, либо несовершеннолетним лицом, объявленным по решению уполномоченного органа полностью дееспособным (эмансипация) либо несовершеннолетним лицом, достигшим четырнадцати лет и получившим письменное разрешение в требуемой законом форме от своих родителей или иных законных представителей на заключение Пользовательского соглашения. Поставщик услуг вправе в любое время потребовать от Пользователя предоставление информации и документов, подтверждающих права и полномочия, как указано выше.
        </Text>
        <Text>
            2.7. Предоставляемые на Сайте Сервисы в любой момент могут изменяться, дополняться, обновляться, менять форму и характер функциональных возможностей без предварительного уведомления Пользователя, в связи с чем их использование предлагается в режиме «как есть», т.е. том виде и объеме, в каком они предоставляются Поставщику услуг в момент обращения к Сервисам Пользователей. Поставщик услуг вправе при необходимости по собственному усмотрению прекратить (временно или окончательно) предоставление Сервисов (или каких-либо отдельных функций в рамках Сервисов) всем Пользователям в целом или отдельному Пользователю, в частности, без предварительного уведомления.
        </Text>
        <Title>
            3. РЕГИСТРАЦИЯ И РАЗМЕЩЕНИЕ ОБЪЯВЛЕНИЯ
        </Title>
        <Text>
            3.1. Пользователь вправе размещать Объявления после Регистрации на Сайте.
        </Text>
        <Text>
            3.2. При Регистрации необходимо указать Учетные данные, которые Пользователь выбирает самостоятельно. После внесения данных для Регистрации в случае указания Пользователем адреса электронной почты Пользователь получает электронное письмо на адрес электронной почты, указанный при Регистрации, содержащее активную гиперссылку, переход по которой необходим для подтверждения Регистрации на Сайте. Регистрация учетной записи осуществляется на один адрес электронной почты или на один номер телефона Пользователя однократно. Повторная Регистрация новой учетной записи на Сайте с использованием ранее указанного при Регистрации адреса электронной почты или номера телефона не допускается. Пользователь может изменить Учетные данные в Личном кабинете на Сайте или при необходимости иным способом, указанным Поставщиком услуг.
        </Text>
        <Text>
            3.3. Использование возможностей Сайта, как зарегистрированными, так и незарегистрированными Пользователями означает согласие Пользователя с настоящим Пользовательским соглашением и принятие на себя обязательств следовать инструкциям по использованию Сервисов.
        </Text>
        <Text>
            3.4. Пользователь несет ответственность за все действия, совершаемые с использованием его Учетных данных. Пользователь обязан следить за сохранностью своего пароля и не раскрывать его посторонним лицам. Пользователь не имеет права передавать свои Учетные данные третьим лицам, а также прямо или косвенно разрешать третьим лицам использовать его Учетные данные для авторизации на Сайте, за исключением лиц, действующих от имени и в интересах Пользователя или получивших такие Учетные данные на основании соответствующих соглашений с Пользователем. При этом Пользователь несет полную ответственность за все действия, совершенные на Сайте с использованием его Учетных данных. Пользователь обязан немедленно изменить Учетные данные, если у него есть причины подозревать, что эти данные были раскрыты или могут быть использованы третьими лицами.
        </Text>
        <Text>
            3.5. Поставщик услуг вправе использовать особые технические решения для проверки правильности информации, предоставляемой Пользователем при Регистрации и/или при авторизации на Сайте. Поскольку в Интернете сложно установить личность Пользователя, Поставщик услуг не может гарантировать, что Пользователь действительно является тем, кем представляется, а также что информация, предоставленная при Регистрации на Сайте, является верной.
        </Text>
        <Text>
            3.6. Просмотр Объявлений и иной информации, размещенной на Сайте в открытом доступе не требует регистрации и/или авторизации Пользователя, однако при совершении таких действий Пользователь в любом случае обязан соблюдать положения Пользовательского соглашения.
        </Text>
        <Text>
            3.7. Поставщик услуг вправе заблокировать доступ Пользователя к Личному кабинету с одновременным прекращением размещения и показа его Объявлений или без такового. Поставщик услуг вправе в любое время прекращать и/или ограничить доступ Пользователя к Сервисам, а также заблокировать или удалить учетную запись Пользователя на Сайте без возможности ее восстановления.
        </Text>
        <Text>
            3.8. Пользователь, прошедший Регистрацию на Сайте может воспользоваться платными услугами в отношении своих активных Объявлений в установленном Пользовательским соглашением порядке.
        </Text>
        <Text>
            3.9. Пользователь может размещать неограниченное количество объявления, однако чтобы поддерживать высокое качество Сервисов, Поставщик услуг оставляет за собой право ограничить количество активных Объявлений Пользователя на Сайте, а также ограничивать действия Пользователя на Сайте.
        </Text>
        <Text>
            3.10. Поставщик услуг также имеет право переместить, завершить или продлить срок демонстрации Объявления по техническим причинам, находящимся под контролем или вне контроля Поставщика услуг. Поставщик услуг имеет право прекратить демонстрацию любого Объявления.
        </Text>
        <Title>
            4. СВЕДЕНИЯ, ПРЕДОСТАВЛЕННЫЕ ПОЛЬЗОВАТЕЛЕМ
        </Title>
        <Text>
            4.1. В рамках использования Сайта Пользователь обязуется предоставлять только достоверные Сведения и несет ответственность за предоставленную им информацию. Пользователь обязуется своевременно актуализировать Сведения посредством редактирования соответствующих данных на Сайте.
        </Text>
        <Text>
          <Span>4.2. Ограничения.</Span>
        </Text>
        <Text>
            4.2.1. Сведения, предоставленные Пользователем, и его действия на Сайте не должны:
        </Text>
        <Ul>
          <Li>быть ложными, неточными или вводящими в заблуждение;</Li>
          <Li>способствовать мошенничеству, обману или злоупотреблению доверием;</Li>
          <Li>вести к совершению сделок с крадеными или поддельными предметами;</Li>
          <Li>нарушать или посягать на собственность третьего лица, его коммерческую тайну либо его право на неприкосновенность частной жизни;</Li>
          <Li>содержать сведения, оскорбляющие чью-либо честь, достоинство или деловую репутацию;</Li>
          <Li>содержать клевету или угрозы кому бы то ни было;</Li>
          <Li>призывать к совершению преступления, а также разжигать межнациональную рознь;</Li>
          <Li>способствовать, поддерживать или призывать к террористической и экстремистской деятельности;</Li>
          <Li>быть непристойными, либо носить характер порнографии;</Li>
          <Li>содержать компьютерные вирусы, а также иные компьютерные программы, направленные, в частности, на нанесение вреда, неуполномоченное вторжение, тайный перехват либо присвоение данных любой системы либо самой системы, либо ее части, либо личной информации или иных данных (включая данные Поставщика услуг);</Li>
          <Li>причинять вред Поставщику услуг, а также становиться причиной полной либо частичной потери Поставщиком услуг услуг провайдеров сети Интернет, либо услуг любых иных лиц;</Li>
          <Li>содержать материалы рекламного характера, которые не согласованы с Поставщиком услуг;</Li>
          <Li>нарушать интеллектуальные права третьих лиц, право на изображение гражданина, и иные права третьих лиц;</Li>
          <Li>иным образом нарушать действующее законодательство Республики Беларусь.</Li>
        </Ul>
        <Text>
           4.2.2. Пользователю запрещается размещать Объявления на Сайте, совершать или исполнять сделку с использованием Сервисов Сайта, которая может привести к нарушению Поставщиком услуг и/или Пользователем действующего законодательства Республики Беларусь.
        </Text>
        <Text>
            4.3. <Span>Данные Пользователя.</Span>
        </Text>
        <Text>
            4.3.1. В процессе пользования Сервисами Сайта (в том числе при Регистрации, взаимодействии с другими Пользователями через интерфейс Сайта, размещении Объявлений, просмотре страниц Сайта и т. п.), Пользователь самостоятельно добровольно принимает решение о предоставлении Поставщику услуг персональных и иных данных о Пользователе (фамилия, имя, отчество, адрес электронной почты, номер мобильного телефона, а также любая иная информация, предоставленная Пользователем (в том числе содержащаяся в сообщениях, направляемых другим Пользователям через форму связи в интерфейсе Сайта), информация о действиях Пользователя на Сайте и пр.) для целей исполнения Пользовательского соглашения, а также настоящим заявляет о своем согласии на обработку Поставщиком услуг и его аффилированными лицами персональных и иных данных Пользователя, их передачу (в том числе трансграничную передачу на территорию иностранных государств, обеспечивающих адекватную защиту прав субъектов персональных данных) для обработки другим Пользователям и/или третьим лицам, действующим по поручению Поставщика услуг, в том числе для целей: предоставления консультационной поддержки Пользователям, проверки Объявлений на предмет соответствия Пользовательскому соглашению, доставки сообщений другим Пользователям, получения статистических и аналитических данных для улучшения функционирования Сайта и/или Сервисов, расширения спектра оказываемых Сервисов, получения информационных и/или рекламных сообщений Поставщика услуг или третьих лиц, предупреждения или пресечения незаконных и/или несанкционированных действий Пользователей или третьих лиц, обеспечения соблюдения требований действующего законодательства Республики Беларусь. Поставщик услуг принимает все необходимые меры для защиты персональных данных Пользователя от несанкционированного доступа третьих лиц.
        </Text>
        <Text>
            4.4. <Span>Доступ к Сервисам.</Span>
        </Text>
        <Text>
           4.4.1. Пользователь обязуется:
        </Text>
        <Ul>
          <Li>не предпринимать никаких действий, которые могут привести к непропорционально большой нагрузке на инфраструктуру Сайта;</Li>
          <Li>не копировать, не воспроизводить, не изменять, не распространять и не представлять общественности любую информацию, содержащуюся на Сайте (кроме Сведений, предоставленных самим Пользователем) без предварительного письменного разрешения Поставщика услуг и любой третьей стороны;</Li>
          <Li>не препятствовать работе Сайта; а также не препятствовать действию автоматических систем или процессов, с целью воспрепятствовать или ограничить доступ на Сайт.</Li>
        </Ul>
        <Text>
           4.4.2. В целях пресечения или предотвращения нарушения Пользовательского соглашения и/или причинения ущерба Поставщику услуг (например, DDoS-атаки, неавторизованное Поставщиком услуг использование программных средств, в том числе для загрузки Объявлений и прочее), Поставщик услуг вправе ограничивать доступ Пользователей или третьих лиц к Сайту путем блокировки доступа к Сайту соответствующего ip-адреса или диапазона ip-адресов.
        </Text>
        <Text>
           4.4.3. Пользователь согласен, что Поставщик услуг не несет ответственности за возможные убытки, причиненные Пользователю в связи с принятием указанных мер пресечения или предотвращения нарушений на Сайте.
        </Text>
        <Title>
           5. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ
        </Title>
        <Text>
            5.1. Вся информация (независимо от того относится ли такая информация законодательством Республики Беларусь к персональным или иным данным, подлежащим защите в соответствии с законодательством Республики Беларусь, или нет), размещенная Пользователем на Сайте, размещается им для реализации Пользователем его имущества и/или услуг и/или в иных интересах Пользователя и, соответственно, Пользователь размещает ту или иную информацию о себе исключительно в своих интересах, в том числе для облегчения установления связи с Пользователем и/или идентификации Пользователя.
        </Text>
        <Text>
            5.2. Размещая на Сайте Объявления, Пользователь делает Сведения, указанные в Объявлении, общедоступными и понимает, что размещенная информация публикуется на Сайте в открытом доступе, то есть доступна для ознакомления любому посетителю Сайта (неограниченному кругу лиц), соответственно Пользователь понимает и принимает на себя все риски, связанные с таким размещением информации, в том числе, включая, но не ограничиваясь: риск попадания адреса электронной почты в списки для рассылки спам-сообщений, риск попадания адреса электронной почты к различного рода мошенникам, риск попадания телефонного номера к SMS-спамерам и/или SMS-мошенникам и иные риски, вытекающие из такого размещения информации.
        </Text>
        <Text>
            5.3.  Поставщик услуг не несет ответственность за совершение и исполнение сделки Продавцом или Покупателем.
        </Text>
        <Text>
            5.4. Пользователь обязуется действовать исключительно в соответствии с действующим законодательством Республики Беларусь и Пользовательским соглашением, а также нести в соответствии с законодательством Республики Беларусь полную ответственность за собственные действия и бездействие на Сайте и при использовании Сервисов.
        </Text>
        <Text>
           5.5. Поставщик услуг не всегда проверяет информацию, опубликованную Пользователями. Некоторые данные, содержащиеся в Объявлениях, могут показаться оскорбительными, опасными, неправильными или вводящими в заблуждение. Поставщик услуг призывает Пользователей соблюдать осторожность и полагаться на здравый смысл при использовании Сайта. Пользователь должен принять во внимание, что его контрагент может быть выдавать себя за другое лицо, быть несовершеннолетним и прочее. Использование Сервисов подразумевает, что Пользователь осознает и принимает эти риски, а также соглашается, что Поставщик услуг не несет ответственности за действия или бездействие со стороны других Пользователей.
        </Text>
        <Text>
           5.6. Если у Пользователя возникают претензии к другому Пользователю в связи с использованием последним Сервисов и/или размещенными им Объявлениями, Пользователь соглашается предъявлять эти требования и разрешать претензии самостоятельно и без участия Поставщика услуг.
        </Text>
        <Text>
            5.7. Поставщик услуг не несет ответственности за потерю информации Пользователем, а также за искажение информации или потерю сообщения. Поставщик услуг не несет ответственности за неисполнение или затруднения в исполнении обязательств из-за обстоятельств непреодолимой силы, последствия которых невозможно избежать или преодолеть.
        </Text>
        <Title>
            6. СООБЩЕНИЯ
        </Title>
        <Text>6.1. Сообщения Поставщика услуг, предназначенные для Пользователей, публикуются на Сайте и/или рассылаются по электронным адресам, предоставленным Пользователями при Регистрации или размещении Объявлений на Сайте. При этом Пользователь понимает, принимает и соглашается, что рассылаемые сообщения и/или их отдельные части могут иметь рекламный характер, а также могут содержать рекламные, информационные и иные объявления контрагентов Поставщика услуг.</Text>
        <Text>6.2. Сообщения Пользователей, предназначенные Поставщику услуг, пересылаются способами, указанными на Сайте. Сообщения, опубликованные на Сайте, считаются доставленными Пользователю с момента их публикации. Поставщик услуг не несет ответственности за пользование другими Пользователями и/или автоматизированными системами (роботами) размещенной на Сайте формой для отправки сообщений. Также Поставщик услуг не несет ответственности за пользование другими Пользователями и/или роботами телефонными номерами, размещенными Пользователем на страницах Сайта.</Text>
        <Title>
            7. СРОК ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ
        </Title>
        <Text>7.1. Настоящее Пользовательское соглашение вступает в силу с момента начала пользования Пользователем Сервисами Сайта, независимо от факта Регистрации Пользователя или размещения Объявления на Сайте, и действуют бессрочно.</Text>
        <Text>7.2. Пользователь имеет право прекратить доступ к своему Личному кабинету без возможности восстановления такого доступа. В этом случае Пользователь не вправе осуществлять повторную Регистрацию в том числе, с использованием в составе Учетных данных указанного Пользователем ранее на Сайте адреса электронной почты.</Text>
        <Text>7.3. Поставщик услуг оставляет за собой право по собственному усмотрению прекратить доступ Пользователя, нарушающего настоящее Пользовательское соглашение, к Сервисам Сайта, как в целом, так и в части, в том числе прекратить или временно приостановить доступ Пользователя в Личный кабинет. Пользователь, доступ которого к Сервисам был прекращен, или Сведения которого перестали быть действительными, не имеет права создавать новую Учетную запись повторно (в том числе с использованием указанного Пользователем ранее на Сайте адреса электронной почты) без разрешения Поставщика услуг, а также такой Пользователь не имеет права использовать для доступа на Сайте Учетные данные другого Пользователя.</Text>
        <Title>8. ПЕРЕДАЧА ПРАВ</Title>
        <Text>8.1. Поставщик услуг вправе, а Пользователь настоящим дает свое согласие на это, передать свои права и/или обязанности по настоящему Пользовательскому соглашению, как в целом, так и в части, третьей стороне. В случае передачи прав и/или обязанностей, как в целом, так и в части Поставщик услуг обязуется сообщить Пользователям, кому были переданы права и/или обязанности по настоящему Пользовательскому соглашению, как в целом, так и в части, путем публикации соответствующей информации на Сайте.</Text>
        <Title>9. СПОРЫ И ДЕЙСТВУЮЩЕЕ ЗАКОНОДАТЕЛЬСТВО</Title>
        <Text>9.1. При разрешении всех споров по настоящему Пользовательскому соглашению применяется действующее законодательство Республики Беларусь.</Text>
        <Text>9.2. Стороны согласились с досудебным порядком рассмотрения всех споров.</Text>
        <Text>9.3. Все споры, возникшие в рамках настоящего Соглашения, должны быть рассмотрены в соответствии с действующим законодательством Республики Беларусь.</Text>
        <Text>9.4. Признание отдельных частей настоящего Пользовательского соглашения недействительными не отменяет действие других положений настоящего Пользовательского соглашения.</Text>
        <Title>
            10. РЕКВИЗИТЫ ПОСТАВЩИКА УСЛУГ
        </Title>
        <Text>ИП Синевич Иван Владимирович УНП 693233790</Text>
        <Text>г Жодино пр-т Ленина 8 кв 318</Text>
        <Text>С уважением,</Text>
        <Text>Команда проекта nedviga.by</Text>
      </Content>
    </Container>
  );
};

export default Public;
