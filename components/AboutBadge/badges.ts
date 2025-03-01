import techBadges from 'components/Badge/badges';

const badges = [
  {
    url: 'https://tailwindcss.com/',
    ...techBadges.tailwind,
  },
  {
    url: 'https://reactjs.org/',
    ...techBadges.react,
  },
  {
    url: 'https://python.org/',
    ...techBadges.python,
  },
  {
    url: 'https://php.net/',
    ...techBadges.php,
  },
  {
    url: 'https://nextjs.org/',
    ...techBadges.next,
  },
  {
    url: 'https://mysql.com/',
    ...techBadges.mysql,
  },
  {
    url: 'https://typescriptlang.org/',
    ...techBadges.typescript,
  },
  {
    url: 'https://fastapi.tiangolo.com/',
    ...techBadges.fastapi,
  },
  {
    url: 'https://laravel.com',
    ...techBadges.laravel,
  },
  {
    url: 'https://postgresql.org',
    ...techBadges.postgresql,
  },
  {
    url: 'https://azure.microsoft.com',
    ...techBadges.azure,
  },
  {
    url: 'https://www.gnu.org/software/bash/',
    ...techBadges.bash,
  },
  {
    url: 'https://docker.com',
    ...techBadges.docker,
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default badges;
