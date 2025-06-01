import React from 'react';

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm0 3a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm8.25.75a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
      clipRule="evenodd"
    />
    <path d="M6.5 3A2.5 2.5 0 004 5.5v9A2.5 2.5 0 006.5 17h7a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0013.5 3h-7zM5.5 5.5A1 1 0 016.5 4.5h7A1 1 0 0114.5 5.5v9a1 1 0 01-1 1h-7a1 1 0 01-1-1v-9z" />
  </svg>
);

const projectsData = [
  {
    title: 'Low-code CMS Platform',
    company: 'Missing Corner',
    role: 'Frontend Developer',
    period: 'August 2024 - Present',
    descriptionPoints: [
      'Refactored legacy UI using Mantine to enhance design consistency and developer experience.',
      'Rebuilt the "Kanban Board" feature to display dynamic data more efficiently.',
      'Reduced project launch time locally by 50%, and enabled users to import external libraries and create global utility functions, significantly increasing customization capabilities.',
    ],
    tech: ['ReactJS', 'Mantine', 'Vite'],
    link: null,
  },
  {
    title: 'GspaceZ - Developer Blogging Platform',
    company: 'Graduation Project',
    role: 'Team Lead & Frontend Developer',
    period: 'December 2024 - Present',
    descriptionPoints: [
      'Acted as team lead for a group of 5 members, responsible for ideation and designing the database schema.',
      'Took the main role as Frontend Developer, building out key UI components and user flows.',
      'Contributed to testing the mobile application and documenting APIs for use across the team.',
    ],
    tech: ['ReactJS', 'Next.Js', 'MongoDB', 'PostgreSQL'],
    link: 'https://gspacez.blog',
  },
  {
    title: 'GDG HANU Official Platform',
    company: 'GDG HANU',
    role: 'Frontend Developer',
    period: 'November 2023 - October 2024',
    descriptionPoints: [
      'Contributed to rebuilding the official platform for GDG HANU as a Frontend Developer, focusing on modernizing the UI and improving user experience.',
      'Participated in other internal projects of the platform, taking on both frontend and backend responsibilities.',
      'Worked with technologies like React, NestJS, and PostgreSQL to deliver full-stack features in a fast-paced team environment.',
    ],
    tech: ['NuxtJs'],
    link: null,
  },
];

export const Projects = () => {
  return (
    <section className="py-12 md:py-16 bg-black text-gray-100 rounded-lg">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-sky-400">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{project.company}</p>
                <p className="text-sm text-gray-400 mb-3">
                  <span className="font-medium">{project.role}</span> | {project.period}
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-gray-300 mb-4 text-sm lg:text-base">
                  {project.descriptionPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pt-2 pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techName, i) => (
                    <span
                      key={i}
                      className="text-xs bg-sky-800 text-sky-200 px-2 py-1 rounded-full"
                    >
                      {techName}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-sm text-sky-400 hover:text-sky-300 font-medium"
                  >
                    View Project <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
