import React from 'react';
import {
  SiFlask,
  SiGit,
  SiGo,
  SiJavascript,
  SiKeras,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';

const badges = [
  {
    url: 'https://tailwindcss.com/',
    backgroundColor: 'bg-sky-500',
    textColor: 'text-white',
    icon: <SiTailwindcss />,
    name: 'Tailwind CSS',
  },
  {
    url: 'https://reactjs.org/',
    backgroundColor: 'bg-sky-400',
    textColor: 'text-white',
    icon: <SiReact />,
    name: 'React',
  },
  {
    url: 'https://python.org/',
    backgroundColor: 'bg-blue-900',
    textColor: 'text-white',
    icon: <SiPython />,
    name: 'Python',
  },
  {
    url: 'https://php.net/',
    backgroundColor: 'bg-indigo-400',
    textColor: 'text-white',
    icon: <SiPhp />,
    name: 'PHP',
  },
  {
    url: 'https://nextjs.org/',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
    icon: <SiNextdotjs />,
    name: 'Next.js',
  },
  {
    url: 'https://mysql.com/',
    backgroundColor: 'bg-[#4479a1]',
    textColor: 'text-white',
    icon: <SiMysql />,
    name: 'MySQL',
  },
  {
    url: 'https://kotlinlang.org/',
    backgroundColor: 'bg-purple-600',
    textColor: 'text-white',
    icon: <SiKotlin />,
    name: 'Kotlin',
  },
  {
    url: 'https://keras.io/',
    backgroundColor: 'bg-red-600',
    textColor: 'text-white',
    icon: <SiKeras />,
    name: 'Keras',
  },
  {
    url: 'https://javascript.com/',
    backgroundColor: 'bg-yellow-500',
    textColor: 'text-black',
    icon: <SiJavascript />,
    name: 'Javascript (ES9)',
  },
  {
    url: 'https://go.dev/',
    backgroundColor: 'bg-sky-700',
    textColor: 'text-white',
    icon: <SiGo />,
    name: 'Go',
  },
  {
    url: 'https://git-scm.com/',
    backgroundColor: 'bg-red-500',
    textColor: 'text-white',
    icon: <SiGit />,
    name: 'Git',
  },
  {
    url: 'https://flask.palletsprojects.com/',
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    icon: <SiFlask />,
    name: 'Flask',
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default badges;
