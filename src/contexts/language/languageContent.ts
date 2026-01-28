import type { ContentTextType } from "@/types/language";

export const contentText: ContentTextType = {
  topbar: {
    navOptions: [
      { label: "Sobre mim", ref: "AboutSection" },
      { label: "Habilidades", ref: "SkillSection" },
      { label: "Projetos", ref: "ProjectSection" },
    ],
    cvButton: "Baixar CV",
  },
  banner: {
    title: "Olá! Eu sou Rodrigo Ribeiro. Desenvolvedor Frontend do Brasil.",
    description:
      "Sou um desenvolvedor frontend com mais de 5 anos de experiência, especializado em ReactJS, TypeScript e nas mais modernas tecnologias de desenvolvimento frontend. Tenho expertise na criação de aplicações web escaláveis e focadas na experiência do usuário. Sou um defensor do clean code e valorizo um ambiente de trabalho colaborativo, produtivo e recompensador. Fora do ambiente profissional, me dedico a estudar o mercado de desenvolvimento web explorando novos frameworks e tecnologias com o objetivo de me tornar um especialista.",
  },
  skills: "Minhas habilidades",
  experience: {
    title: "Minha Experiência",
    experiences: [
      {
        imgAltText: "Logo do Banco Inter",
        title: "Desenvolvedor Frontend Pleno no Banco Inter",
        date: "Agosto 2024 - Fevereiro 2025",
        description:
          "Responsável pelo desenvolvimento, planejamento e manutenção de sistemas no setor de investimentos, utilizando ReactJS com Typescript. Foco em performance, escalabilidade e experiência do usuário. Atuação no desenvolvimento de webviews e microfrontends do aplicativo principal do banco (Inter Super App) e dos sistemas internos da empresa.",
      },
      {
        imgAltText: "Logo do EstrelaBet",
        title: "Desenvolvedor Frontend Pleno na EstrelaBet",
        date: "Novembro 2022 - Agosto 2024",
        description:
          "Responsável pelo desenvolvimento, planejamento e manutenção de sistemas focados na retenção e aquisição de leads, além de sistemas de controle interno da empresa. As tecnologias utilizadas eram NextJS, ReactJS e Typescript, além de implementar testes unitários e tagueamento de métricas de uso dos sistemas.",
      },
      {
        imgAltText: "Logo da Azapfy",
        title: "Desenvolvedor Frontend Pleno na Azapfy",
        date: "Agosto 2022 - Novembro 2022",
        description:
          "Responsável pelo desenvolvimento, planejamento e manutenção de sistemas internos. As tecnologias utilizadas eram NextJS, ReactJS, Redux e Typescript, além de implementar testes unitários e tagueamento de métricas de uso dos sistemas.",
      },
      {
        imgAltText: "Logo da Task Internet",
        title: "Desenvolvedor Full-Stack na Task Internet",
        date: "Janeiro 2021 - Agosto 2022",
        description:
          "Responsável pelo desenvolvimento, planejamento e manutenção de sistemas principais de venda da empresa, como também sistemas internos. Atuei no desenvolvimento de uma rede social corporativa trabalhando com atualizações em tempo real e interações de usuários. Tecnologias utilizadas: Typescript, React, NodeJS, NextJs.",
      },
    ],
  },
  about: {
    title: "Sobre Mim",
    description:
      "Sou desenvolvedor frontend com mais de 5 anos de experiência, especializado em ReactJS, TypeScript e nas tecnologias mais atuais do ecossistema frontend. Curto construir aplicações web escaláveis, bem estruturadas e sempre com foco total na experiência do usuário. Sou fã de clean code, boas práticas e acredito muito em ambientes colaborativos, produtivos e onde todo mundo cresce junto. Fora do trabalho, estou sempre estudando o mercado de desenvolvimento web, testando novos frameworks e tecnologias, movido pela curiosidade e pelo objetivo de me tornar cada vez mais especialista na área.",
    description2:
      "No tempo livre, sou movido a videogames, música e viagens. Amo tudo que envolve o universo Geek, minha série favorita é Arcane (Netflix) e minha banda do coração é Twenty One Pilots 🎧. Também curto passar tempo com amigos e aprender coisas novas — atualmente me aventurando no violão e no piano 🎸🎹.",
  },
  testimonial: {
    title: "Relatos",
    testiomonials: [
      {
        imgAltText: "Foto de perfil do Linkedin de Lucas Izidorio",
        comment:
          '"Rodrigo é um excelente profissional. Demonstra grande conhecimento em relação às tecnologias de desenvolvimento em front-end além de domínio de JavaScript/TypeScript. Tive a oportunidade de trabalhar com o Rodrigo em diversos projetos, tanto a nível acadêmico quanto profissional, e o resultado dos projetos sempre foi muito positivo. É um profissional dedicado e orientado ao sucesso do cliente, com foco em boas interfaces de usuário e UX."',
        name: "Lucas Izidorio",
        position: "Technical Program Manager",
      },
      {
        imgAltText: "Foto de perfil do Linkedin de Lucas Neri",
        comment:
          '"Eu recomendo fortemente Rodrigo para qualquer empresa que esteja procurando por um desenvolvedor front-end altamente motivado, talentoso e capaz de contribuir não só tecnicamente, mas também para o desenvolvimento profissional de seus colegas de equipe. Ele seria uma grande adição a qualquer equipe de desenvolvimento de software que valorize a excelência técnica e o espírito de equipe."',
        name: "Lucas Neri",
        position: "Desenvolvedor Sênior",
      },
      {
        imgAltText: "Foto de perfil do Linkedin de Lucas Braga",
        comment:
          '"Rodrigo é muito dedicado e curioso, com um olhar atento para o sistema, tanto no desenho de soluções quanto na experiência do usuário da interface, sempre sugerindo melhorias que fazem a diferença. Demonstra amplo conhecimento em ambiente frontend, especialmente com React e TypeScript, entregando códigos bem organizados e otimizados. Além disso, participa ativamente das discussões técnicas, trazendo ideias que ajudavam o time a evoluir como um todo."',
        name: "Lucas Braga",
        position: "Desenvolvedor Sênior",
      },
    ],
  },
};

export const contentTextEn: ContentTextType = {
  topbar: {
    navOptions: [
      { label: "About Me", ref: "AboutSection" },
      { label: "Skills", ref: "SkillSection" },
      { label: "Projects", ref: "ProjectSection" },
    ],
    cvButton: "Download CV",
  },
  banner: {
    title: "Hi! I'm Rodrigo Ribeiro. A Frontend Developer from Brazil.",
    description:
      "I am a frontend developer with over 5 years of experience, specialized in ReactJS, TypeScript, and modern frontend technologies. I have strong expertise in building scalable web applications focused on user experience. I am a strong advocate of clean code and value collaborative, productive, and rewarding work environments. Outside of my professional routine, I continuously study the web development market, exploring new frameworks and technologies with the goal of becoming a true specialist.",
  },
  skills: "My Skills",
  experience: {
    title: "My Experience",
    experiences: [
      {
        imgAltText: "Banco Inter logo",
        title: "Mid-level Frontend Developer at Banco Inter",
        date: "August 2024 - February 2025",
        description:
          "Responsible for the development, planning, and maintenance of systems in the investment sector, using ReactJS with TypeScript. Strong focus on performance, scalability, and user experience. Worked on webviews and microfrontends for the bank’s main application (Inter Super App) as well as internal company systems.",
      },
      {
        imgAltText: "EstrelaBet logo",
        title: "Mid-level Frontend Developer at EstrelaBet",
        date: "November 2022 - August 2024",
        description:
          "Responsible for developing, planning, and maintaining systems focused on lead acquisition and retention, as well as internal control systems. Technologies included Next.js, ReactJS, and TypeScript, along with implementing unit tests and usage metrics tracking.",
      },
      {
        imgAltText: "Azapfy logo",
        title: "Mid-level Frontend Developer at Azapfy",
        date: "August 2022 - November 2022",
        description:
          "Responsible for developing, planning, and maintaining internal systems. Technologies used included Next.js, ReactJS, Redux, and TypeScript, as well as implementing unit tests and usage metrics tracking.",
      },
      {
        imgAltText: "Task Internet logo",
        title: "Full-Stack Developer at Task Internet",
        date: "January 2021 - August 2022",
        description:
          "Responsible for developing, planning, and maintaining the company’s main sales systems, as well as internal platforms. Worked on the development of a corporate social network with real-time updates and user interactions. Technologies used: TypeScript, React, Node.js, and Next.js.",
      },
    ],
  },
  about: {
    title: "About Me",
    description:
      "I am a frontend developer with over 5 years of experience, specialized in ReactJS, TypeScript, and modern frontend technologies. I enjoy building scalable, well-structured web applications with a strong focus on user experience. I am passionate about clean code and best practices, and I strongly believe in collaborative and productive environments where everyone grows together. Outside of work, I am constantly studying the web development market, testing new frameworks and technologies, driven by curiosity and the goal of becoming increasingly specialized in my field.",
    description2:
      "In my free time, I am passionate about video games, music, and traveling. I love everything related to the geek universe — my favorite series is Arcane (Netflix) and my favorite band is Twenty One Pilots 🎧. I also enjoy spending time with friends and learning new things — currently exploring the guitar and piano 🎸🎹.",
  },
  testimonial: {
    title: "Testimonials",
    testiomonials: [
      {
        imgAltText: "LinkedIn profile picture of Lucas Izidorio",
        comment:
          '"Rodrigo is an excellent professional. He demonstrates strong knowledge of frontend development technologies and has solid mastery of JavaScript and TypeScript. I had the opportunity to work with Rodrigo on several projects, both academic and professional, and the results were always very positive. He is a dedicated professional, client-oriented, and highly focused on delivering great user interfaces and UX."',
        name: "Lucas Izidorio",
        position: "Technical Program Manager",
      },
      {
        imgAltText: "LinkedIn profile picture of Lucas Neri",
        comment:
          '"I strongly recommend Rodrigo to any company looking for a highly motivated, talented frontend developer who can contribute not only technically, but also to the professional growth of their teammates. He would be a great addition to any software development team that values technical excellence and teamwork."',
        name: "Lucas Neri",
        position: "Senior Developer",
      },
      {
        imgAltText: "LinkedIn profile picture of Lucas Braga",
        comment:
          '"Rodrigo is very dedicated and curious, with a keen eye for systems — both in solution design and user interface experience — always suggesting improvements that truly make a difference. He demonstrates deep knowledge of the frontend ecosystem, especially with React and TypeScript, delivering well-organized and optimized code. Additionally, he actively participates in technical discussions, bringing ideas that help the entire team evolve."',
        name: "Lucas Braga",
        position: "Senior Developer",
      },
    ],
  },
};
