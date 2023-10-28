import techBadges from 'components/Badge/badges';
import { ProjectItemProps } from '.';

const projects: ProjectItemProps[] = [
  {
    name: 'Sales App',
    year: 2022,
    descriptions: [
      'This application serves to assist the sales team by digitizing the previously manual, paper-based process of selling products to customers.',
      'This application is developed using React and Typescript for the frontend, Python with FastAPI for the backend, and PostgreSQL for the database. Deployment took place on Microsoft Azure App Service and Microsoft Azure Functions in the form of Docker images.',
    ],
    techStacks: [
      techBadges.react,
      techBadges.typescript,
      techBadges.python,
      techBadges.fastapi,
      techBadges.postgresql,
      techBadges.azure,
    ],
  },
  {
    repositoryURL: 'https://github.com/sastrawanikadek/sipandu-beradat',
    imageURL:
      'https://user-images.githubusercontent.com/37144427/152632848-5206db6e-f714-4ff5-a304-5fdad6d2ba5e.png',
    name: 'Sipandu Beradat',
    year: 2021,
    descriptions: [
      'Sipandu Beradat is a web and mobile application that help the user (masyarakat) and tourist get news in their area and easily make a report when something happens.',
    ],
    techStacks: [
      techBadges.php,
      techBadges.mysql,
      techBadges.javascript,
      techBadges.jquery,
      techBadges.kotlin,
      techBadges.jwt,
    ],
  },
  {
    repositoryURL: 'https://github.com/sastrawanikadek/web-kalender-tenganan',
    imageURL:
      'https://user-images.githubusercontent.com/37144427/152635779-34bb7e2c-c10a-42a0-bf6a-0cd8a6b33943.png',
    name: 'Kalender Tenganan',
    year: 2021,
    descriptions: [
      'A website that shows a calendar and ceremony from Tenganan (a region in Bali).',
    ],
    techStacks: [
      techBadges.php,
      techBadges.mysql,
      techBadges.react,
      techBadges.javascript,
    ],
  },
  {
    name: 'Partner Portal',
    year: 2022,
    descriptions: [
      'A portal has been developed for a company to facilitate the management of their business partners, as well as a separate portal designed for partners to oversee their employees. ',
      'This application is developed using React and Typescript for the frontend, Python with FastAPI for the backend, and PostgreSQL for the database. Deployment took place on Microsoft Azure App Service and Microsoft Azure Functions in the form of Docker images.',
    ],
    techStacks: [
      techBadges.react,
      techBadges.typescript,
      techBadges.python,
      techBadges.fastapi,
      techBadges.postgresql,
      techBadges.azure,
    ],
  },
  {
    repositoryURL: 'https://github.com/sastrawanikadek/mouth-care-ai',
    imageURL:
      'https://user-images.githubusercontent.com/37144427/152635057-0ba5a66c-590c-49c0-ac41-aa4b29ddfa0d.png',
    name: 'Mouth Care AI',
    year: 2020,
    descriptions: [
      'Expert system with artificial intelligence using naive bayes algorithm.',
    ],
    techStacks: [
      techBadges.react,
      techBadges.javascript,
      techBadges.graphql,
      techBadges.apollo,
      techBadges.mongodb,
    ],
  },
];

export default projects;
