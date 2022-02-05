import techBadges from 'components/Badge/badges';
import { ProjectItemProps } from '.';

const projects: ProjectItemProps[] = [
  {
    projectURL: 'https://sipanduberadat.com',
    repositoryURL: 'https://github.com/sastrawanikadek/sipandu-beradat',
    imageURL:
      'https://user-images.githubusercontent.com/37144427/152632848-5206db6e-f714-4ff5-a304-5fdad6d2ba5e.png',
    name: 'Sipandu Beradat',
    description:
      'Sipandu Beradat is a web and mobile application that help the user (masyarakat) and tourist get news in their area and easily make a report when something happens.',
    techStacks: [
      techBadges['php'],
      techBadges['mysql'],
      techBadges['javascript'],
      techBadges['jquery'],
      techBadges['kotlin'],
      techBadges['jwt'],
    ],
  },
  {
    projectURL: 'https://kalender-tenganan.herokuapp.com/',
    repositoryURL: 'https://github.com/sastrawanikadek/web-kalender-tenganan',
    imageURL:
      'https://user-images.githubusercontent.com/37144427/152635779-34bb7e2c-c10a-42a0-bf6a-0cd8a6b33943.png',
    name: 'Kalender Tenganan',
    description:
      'A website that shows a calendar and ceremony from Tenganan (a region in Bali).',
    techStacks: [
      techBadges['php'],
      techBadges['mysql'],
      techBadges['react'],
      techBadges['javascript'],
    ],
  },
  {
    repositoryURL: 'https://github.com/sastrawanikadek/mouth-care-ai',
    imageURL:
      'https://user-images.githubusercontent.com/37144427/152635057-0ba5a66c-590c-49c0-ac41-aa4b29ddfa0d.png',
    name: 'Mouth Care AI',
    description:
      'Expert system with artificial intelligence using naive bayes algorithm.',
    techStacks: [
      techBadges['react'],
      techBadges['javascript'],
      techBadges['graphql'],
      techBadges['apollo'],
      techBadges['mongodb'],
    ],
  },
];

export default projects;
