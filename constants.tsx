
import React from 'react';
import { NavItem, Article, TeamMember } from './types';
import { FaRegGrinBeam, FaPaintBrush, FaCoffee, FaCat } from 'react-icons/fa'; // Importando FaCat

export const KNodeJSLogoSvg = ({ size = 40, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#68A063"/>
    <text x="50" y="68" fontFamily="Verdana, sans-serif" fontSize="48" fill="#FFFFFF" text-anchor="middle" fontWeight="bold">KN</text>
  </svg>
);

export const UserIconSvg = ({ className = "w-16 h-16 text-node-text-secondary" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

// MeonCatLogoSvg é substituído por um ícone de react-icons
/*
export const MeonCatLogoSvg = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M12,3.5 c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5s-8.5-3.813-8.5-8.5S7.313,3.5,12,3.5z"/>
    <path d="M7.75,7 C7.336,7,7,7.336,7,7.75S7.336,8.5,7.75,8.5S8.5,8.164,8.5,7.75S8.164,7,7.75,7z M16.25,7 c-0.414,0-0.75,0.336-0.75,0.75s0.336,0.75,0.75,0.75s0.75-0.336,0.75-0.75S16.664,7,16.25,7z"/>
    <path d="M6,6.75 C5.173,6.182,5.173,5.068,6,4.5 C6.827,3.932,7.673,4.432,7.5,5.25 C7.327,6.068,6.827,6.568,6,6.75z" transform="translate(0.5, 0.5) rotate(15 6 6)"/>
    <path d="M18,6.75 C18.827,6.182,18.827,5.068,18,4.5 C17.173,3.932,16.327,4.432,16.5,5.25 C16.673,6.068,17.173,6.568,18,6.75z" transform="translate(-0.5, 0.5) rotate(-15 18 6)"/>
    <path d="M12,14.25c-2,0-3.5-1.25-3.5-2.75 0-.414-.336-.75-.75-.75S7,11.086,7,11.5 C7,14.538,9.239,17,12,17s5-2.462,5-5.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75C15.5,13,14,14.25,12,14.25z"/>
  </svg>
);
*/

export { FaCat as MeonCatIcon }; // Exportando o ícone de gato de react-icons

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Buscar Artigos', path: '/search' },
  { label: 'Equipe', path: '/team' },
];

const loremContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \\n\\n Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.";

export const MOCK_ARTICLES: Article[] = [
  { id: '1', title: 'Introdução ao Node.js', summary: 'Um guia completo para iniciantes sobre o que é Node.js e como começar a desenvolver aplicações backend robustas e escaláveis.', tags: ['nodejs', 'javascript', 'iniciante', 'backend'], content: `Este é o conteúdo completo do artigo sobre Introdução ao Node.js. ${loremContent}` },
  { id: '2', title: 'Gerenciamento de Pacotes com NPM', summary: 'Aprenda a usar o NPM (Node Package Manager) para gerenciar dependências, scripts e publicar seus próprios pacotes no ecossistema Node.js.', tags: ['npm', 'nodejs', 'pacotes', 'ferramentas'], content: `Explorando o NPM em detalhes. ${loremContent}` },
  { id: '3', title: 'APIs RESTful com Express.js', summary: 'Construindo APIs robustas e escaláveis utilizando o framework Express.js. Aprenda sobre rotas, middlewares e boas práticas.', tags: ['expressjs', 'api', 'restful', 'nodejs', 'backend'], content: `Construindo sua primeira API com Express. ${loremContent}` },
  { id: '4', title: 'Programação Assíncrona em Node.js', summary: 'Entendendo Callbacks, Promises e Async/Await no ambiente Node.js para lidar com operações I/O de forma eficiente.', tags: ['assincrono', 'promises', 'async-await', 'nodejs', 'javascript'], content: `Desvendando a programação assíncrona. ${loremContent}` },
  { id: '5', title: 'Segurança em Aplicações Node.js', summary: 'Principais práticas e dicas para proteger suas aplicações Node.js contra vulnerabilidades comuns como XSS, CSRF e Injeção de SQL.', tags: ['segurança', 'nodejs', 'webdev', 'boas-praticas'], content: `Mantendo sua aplicação Node.js segura. ${loremContent}` },
  { id: '6', title: 'Streams no Node.js', summary: 'Dominando o uso de Streams para manipulação eficiente de grandes volumes de dados e comunicação em tempo real.', tags: ['streams', 'nodejs', 'performance', 'dados'], content: `Trabalhando com Streams de forma eficaz. ${loremContent}` },
  { id: '7', title: 'Testes em Node.js com Jest', summary: 'Como configurar e escrever testes unitários e de integração para suas aplicações Node.js utilizando o framework Jest.', tags: ['testes', 'jest', 'nodejs', 'qualidade'], content: `Garantindo a qualidade do seu código com Jest. ${loremContent}` },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Israel Ribeiro', role: 'Líder de Projeto & Desenvolvedor Full-Stack', icon: <FaRegGrinBeam /> },
  { id: '2', name: 'Ana', role: 'Designer UI/UX & Desenvolvedora Frontend', icon: <FaPaintBrush /> },
  { id: '3', name: 'Vinicius Klein', role: 'Arquiteto de Software & Desenvolvedor Backend', icon: <FaCoffee /> },
];

export const SEARCH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

