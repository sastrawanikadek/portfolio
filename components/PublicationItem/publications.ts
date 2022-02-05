import techBadges from 'components/Badge/badges';
import { PublicationItemProps } from '.';

const publications: PublicationItemProps[] = [
  {
    url: 'https://www.sciencedirect.com/science/article/pii/S2405959521001375',
    title: 'Detection of fake news using deep learning CNN-RNN based methods',
    description:
      'Research article for my undergraduate, it mainly discusses fake news detection using Deep Learning methods, especially CNN, ResNet, and Bidirectional LSTM. The study uses 4 datasets and achieved performance up to 99.95% of accuracy, precision, recall, and F1-score.',
    date: '22 October 2021',
    publisher: 'ICT Express',
    techStacks: [
      techBadges['python'],
      techBadges['sklearn'],
      techBadges['tensorflow'],
      techBadges['keras'],
    ],
  },
];

export default publications;
