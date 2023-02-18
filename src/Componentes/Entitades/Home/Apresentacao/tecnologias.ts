export interface IDadosCards {
  id: number | string;
  tec: string;
  link?: string;
  img: string;
  comentario?: string;
}
export const tecnologias: IDadosCards[] = [
  {
    id: 1,
    tec: 'JavaScript',
    link: '',
    img: '/image/javascript.png',
    comentario: '',
  },
  {
    id: 2,
    tec: 'C#',
    link: '',
    img: '/image/cshap.png',
    comentario: '',
  },
  {
    id: 3,
    tec: 'ReactJS',
    link: '',
    img: '/image/react.png',
    comentario: '',
  },
  {
    id: 4,
    tec: 'HTML',
    link: '',
    img: '/image/html.png',
    comentario: '',
  },
  {
    id: 5,
    tec: 'CSS',
    link: '',
    img: '/image/css.png',
    comentario: '',
  },
  {
    id: 6,
    tec: 'Orm Prisma',
    link: '',
    img: '/image/prisma.png',
    comentario: '',
  },
  {
    id: 7,
    tec: 'Entity Framework',
    link: '',
    img: '/image/entity.jpg',
    comentario: '',
  },
  {
    id: 8,
    tec: 'Mysql',
    link: '',
    img: '/image/mysql.png',
    comentario: '',
  },
  {
    id: 9,
    tec: 'Ant Design',
    link: '',
    img: '/image/antd.jpg',
    comentario: '',
  },
  {
    id: 10,
    tec: 'NextJS',
    link: '',
    img: '/image/next.jpg',
    comentario: '',
  },
  {
    id: 11,
    tec: 'TypeScript',
    link: '',
    img: '/image/typescript.png',
    comentario: '',
  },
];

export const cursos = [
  {
    id: 12,
    tec: 'Alura Cursos',
    img: '/image/alura.jpg',
    link: 'https://cursos.alura.com.br/user/rafael-souza44/fullCertificate/3ea0b3c966e6efaae83e50366cbb3055',
    comentario: 'Certificado de cursos feitos na Alura',
    botao: 'Certificado',
  },
  {
    id: 13,
    tec: 'Udemy Cursos',
    img: '/image/udemy.png',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6b0f8f22-5d75-408d-a203-7d01485093a7.jpg',
    comentario: 'Certificado de cursos feitos na Udemy',
    botao: 'Certificado',
  },
  {
    id: 14,
    tec: 'FAM',
    img: '/image/fam.png',
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6b0f8f22-5d75-408d-a203-7d01485093a7.jpg',
    comentario: 'Curso em andamento de Sistemas da Informações',
    botao: 'Certificado',
  },
];
