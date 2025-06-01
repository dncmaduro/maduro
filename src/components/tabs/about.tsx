import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'; // Giả sử bạn có CarouselItem

export const About = () => {
  const techImages = [
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      alt: 'TypeScript',
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      alt: 'Tailwind CSS',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      alt: 'React',
    },
    {
      src: 'https://vitejs.dev/logo.svg',
      alt: 'Vite',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      alt: 'NestJS',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      alt: 'MongoDB',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      alt: 'PostgreSQL',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      alt: 'Vue.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      alt: 'Next.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
      alt: 'Nuxt.js',
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src={
            'https://res.cloudinary.com/dszkt92jr/image/upload/v1748702958/IMG_4963_3_awtojb.jpg'
          }
          className="rounded-full w-[180px] h-[180px] md:w-[240px] md:h-[240px] object-cover flex-shrink-0"
        />
        <div className="border-[2px] rounded-lg border-white w-full md:w-min-content max-w-[600px] flex items-center h-auto md:h-[240px] p-4">
          <p className="text-sm md:text-base">
            I'm Dũng - a front-end developer with 1 year of hands-on experience building modern UIs
            using React, Vite, and Tailwind. I've led multiple features from start to finish, always
            with attention to clean code and great UX. While front-end is my main game, I'm not
            afraid to jump into the back end. I've worked with NestJS, PostgreSQL, and MongoDB in
            school projects, and interned with Ruby on Rails for 4 months - enough to hold my own in
            a fullstack environment. I care about performance, maintainability, and building stuff
            that actually feels good to use.
          </p>
        </div>
      </div>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {techImages.map((image, index) => (
              <CarouselItem key={index} className="basis-auto pl-2 md:pl-4">
                <div className="p-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] object-contain"
                    title={image.alt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
