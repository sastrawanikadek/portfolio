import techBadges from 'components/Badge/badges';

const badges = [
  {
    url: 'https://tailwindcss.com/',
    ...techBadges['tailwind'],
  },
  {
    url: 'https://reactjs.org/',
    ...techBadges['react'],
  },
  {
    url: 'https://python.org/',
    ...techBadges['python'],
  },
  {
    url: 'https://php.net/',
    ...techBadges['php'],
  },
  {
    url: 'https://nextjs.org/',
    ...techBadges['next'],
  },
  {
    url: 'https://mysql.com/',
    ...techBadges['mysql'],
  },
  {
    url: 'https://kotlinlang.org/',
    ...techBadges['kotlin'],
  },
  {
    url: 'https://keras.io/',
    ...techBadges['keras'],
  },
  {
    url: 'https://javascript.com/',
    ...techBadges['javascript'],
  },
  {
    url: 'https://go.dev/',
    ...techBadges['go'],
  },
  {
    url: 'https://git-scm.com/',
    ...techBadges['git'],
  },
  {
    url: 'https://flask.palletsprojects.com/',
    ...techBadges['flask'],
  },
  {
    url: 'https://typescriptlang.org/',
    ...techBadges['typescript'],
  },
  {
    url: 'https://nodejs.org/',
    ...techBadges['node'],
  },
  {
    url: 'https://jquery.com/',
    ...techBadges['jquery'],
  },
  {
    url: 'https://selenium.dev/',
    ...techBadges['selenium'],
  },
  {
    url: 'https://jwt.io/',
    ...techBadges['jwt'],
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default badges;
