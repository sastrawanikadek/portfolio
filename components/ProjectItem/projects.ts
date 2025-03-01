import techBadges from 'components/Badge/badges';
import { ProjectItemProps } from '.';

const projects: ProjectItemProps[] = [
  {
    name: 'Photobooth System',
    year: 2023,
    descriptions: [
      'Multi-tenant Software-as-a-Service (SaaS) application for managing photobooth business by providing a web-based portal for administration and desktop application for the operations.',
    ],
    features: [
      'Highly Customizable - Tenants can modify themes, create custom template designs, and configure pricing.',
      'Feature Control - Tenants can toggle features on/off to tailor the system to their needs.',
      'Seamless Management - Provides an all-in-one solution for operating and overseeing photobooth services.',
    ],
    contributions: [
      'Designed and developed the entire system architecture, including backend, frontend, and infrastructure.',
      'Implemented customization features, allowing tenants to modify themes and toggle functionalities.',
      'Optimized performance by ensuring efficient database queries and a responsive UI.',
    ],
    techStacks: [
      techBadges.react,
      techBadges.typescript,
      techBadges.electron,
      techBadges.python,
      techBadges.fastapi,
      techBadges.postgresql,
    ],
  },
  {
    name: 'Sales App',
    year: 2022,
    descriptions: [
      'A streamlined application designed to assist sales teams by digitizing the manual, paper-based sales process. Optimized for tablets and laptops, the app provides an intuitive and efficient workflow, making it easy to navigate from the initial interaction to finalizing a sale.',
    ],
    features: [
      'Intuitive Design - Offers a user-friendly interface for sales teams to navigate through the application.',
      'Efficient Workflow - Streamlines the sales process from initial interaction to finalizing a sale.',
      'Responsive Design - Optimized for tablets and laptops, ensuring flexibility in sales environments.',
    ],
    contributions: [
      'Migrated the existing application from Flutter Web to React & TypeScript, improving performance and user experience.',
      'Designed and developed the entire frontend using React & TypeScript with a focus on usability.',
      'Built a robust backend with FastAPI & PostgreSQL, ensuring fast and reliable data processing.',
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
    name: 'Business Operations Management Portal',
    year: 2023,
    descriptions: [
      'A comprehensive platform designed to streamline operations for service-based businesses. The system facilitates scheduling, invoicing, workforce management, customer administration, and subscriptions, ensuring efficient day-to-day operations. It also integrates with a mobile app, enabling seamless communication and task management between employees and customers.',
    ],
    features: [
      'Scheduling & Workforce Management - Automates schedules and tracks employee work hours.',
      'Billing & Subscription System - Manages customer subscriptions, generates invoices, and tracks payments.',
      'User Role Management - Secure role-based access control for admins, employees, and customers.',
    ],
    contributions: [
      'Developed both frontend (React & TypeScript) and backend (Laravel & MySQL) features.',
      'Collaborated with another backend developer to ensure a scalable and maintainable architecture.',
      'Optimized database queries and API performance to improve response times.',
    ],
    techStacks: [
      techBadges.react,
      techBadges.typescript,
      techBadges.php,
      techBadges.laravel,
      techBadges.mysql,
      techBadges.azure,
    ],
  },
  {
    name: 'Partner Portal',
    year: 2022,
    descriptions: [
      'A business partner management portal designed for a company to efficiently manage their partners while providing a dedicated portal for partners to oversee their employees. The system simplifies workflows, ensuring a seamless and intuitive user experience.',
    ],
    features: [
      'Dual Portal System - Separate interfaces for the company and partners, tailored to their specific needs.',
      'Simple & User-Friendly UI - Designed for ease of use with a clear, straightforward process.',
      'Efficient Partner & Employee Management - Enables businesses to track and manage relationships effectively.',
    ],
    contributions: [
      'Developed both the frontend (React & TypeScript) and backend (FastAPI & PostgreSQL) to create a fully functional system.',
      'Designed an intuitive user experience, ensuring easy navigation and minimal training required.',
      'Implemented secure authentication & role-based access control, providing restricted access based on user roles.',
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
];

export default projects;
