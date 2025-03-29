import Link from 'next/link';
import { GeistMono } from 'geist/font/mono';

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[#FEFCF7] text-[#1a1a1a] ${GeistMono.className} pt-4`}
    >
      {/* Hero Section */}
      <header className='container mx-auto px-4 py-12 max-w-4xl'>
        <div className='flex flex-col gap-10'>
          <div className='flex items-center gap-8'>
            <div className='w-24 h-24 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-violet-600/20'>
              MS
            </div>
            <div>
              <h1 className='text-3xl font-bold mb-3 text-black bg-clip-text '>
                Mandeep Singhmar
              </h1>
              <p className='text-gray-600 text-base'>Frontend Developer</p>
            </div>
          </div>
          <div className='space-y-6 max-w-3xl'>
            <p className='text-gray-700 text-base leading-relaxed'>
              I'm a developer with 3+ years of experience in building MVPs,
              landing pages, multi-page websites, and SaaS solutions. I have
              worked remotely with companies across the USA, Canada, and Europe.
            </p>
            <p className='text-gray-700 text-base leading-relaxed'>
              I've delivered multiple successful projects, focusing on creating
              performant and beautiful user interfaces, I thrive on transforming
              complex ideas into seamless web applications.
            </p>
            <p className='text-gray-700  text-base leading-relaxed'>
              I'm always eager to learn and take on new challenges. Committed to
              high-quality work, I ensure projects are completed smoothly and
              efficiently. Simply put, I get things done.
            </p>
            <p className='text-gray-700 text-base leading-relaxed'>
              Available for work, freelance projects, and collaborations.{' '}
              <Link
                href='mailto:msingh8328@gmail.com'
                className=' text-violet-600 hover:text-violet-700 font-medium underline'
              >
                email
              </Link>{' '}
              or{' '}
              <Link
                href='https://x.com/mandeep_singh_9'
                target='_blank'
                className=' text-violet-600 hover:text-violet-700 font-medium underline'
              >
                x
              </Link>
            </p>
          </div>
        </div>
      </header>

      {/* Work Experience */}
      <section className='py-12 '>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-xl font-bold mb-6 text-black'>Work</h2>
          <div className='space-y-6'>
            <ExperienceCard
              title='Frontend developer'
              company='Softhesis Labs'
              date='June 2023 - Feb 2025'
              link='https://tryfinancially.com/'
              description='Leading frontend development for a financial platform, implementing modern UI components and complex data visualizations.'
            />
            <ExperienceCard
              title='Frontend developer'
              company='JavaScript Mastery'
              date='Aug 2021 - Feb 2023'
              description='Designed and developed 20+ projects that helped
 millions of students to learn web technologies.'
              link='https://www.jsmastery.pro/'
            />
            <ExperienceCard
              title='Frontend developer'
              company='Eagle 3D Streaming'
              date='March 2022 - Nov 2022'
              link='https://www.eagle3dstreaming.com/'
              description='Implemented frontend solutions
based on client requirements and built a new Control
Panel from scratch for 3D streaming.'
            />
            <ExperienceCard
              title='Frontend developer'
              company='Examine'
              date='July 2022 - Oct 2022'
              link='https://examine.com'
              description='Worked as an freelancer for examine, building a modern and user-friendly interface for accessing health and nutrition information.'
            />
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className='py-12 '>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-xl font-bold mb-6 text-black'>
            Tools & technologies
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Tailwind CSS',
              'Node.js',
              'Express',
              'Redux',
              'MERN',
              'Material-UI',
              'Firebase',
              'Git',
            ].map((tool) => (
              <div
                key={tool}
                className='p-4  rounded-xl text-center hover:bg-[#f5f5f2] transition-all hover:shadow-lg hover:shadow-violet-600/5 border border-gray-100'
              >
                <span className='text-gray-600 text-xs'>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-12'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-xl font-bold mb-6 text-black'>Projects</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <ProjectCard
              title='Lyriks'
              description='Lyriks is a modern music streaming web application that allows users to explore and play their favorite songs with an intuitive and engaging user interface.'
              tech={['React', 'Tailwind CSS', 'Redux']}
              link='https://lyriks.vercel.app'
              github='https://github.com/Mandeepsinghmar/lyriks/tree/main'
            />

            <ProjectCard
              title='Tiktik'
              description='A TikTok-like social media application built using Next.js, React, zustand and Sanity as the backend.'
              tech={['Next.js', 'Tailwind CSS', 'Redux', 'Typescript']}
              link='https://tiktok-jsm.vercel.app/'
              github='https://github.com/Mandeepsinghmar/tiktok-clone'
            />
            <ProjectCard
              title='Examine'
              description='Led the frontend development for Examine.com, building a modern and user-friendly interface for accessing health and nutrition information.'
              tech={['Next.js', 'Tailwind CSS', 'Redux']}
              link='https://examine.com'
            />
            <ProjectCard
              title='More projects'
              description='Built over 20+ educational projects for JavaScript Mastery, helping thousands of students learn modern web development technologies.'
              tech={['React', 'Node.js', 'MongoDB', 'Express', 'etc.']}
              link='https://www.jsmastery.pro/'
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='pt-8 pb-48'>
        <div className='container mx-auto px- max-w-4xl '>
          <h2 className='text-xl font-bold mb-4 text-black'>Reach me on</h2>

          <div className='flex items-center'>
            <div className='flex justify-center gap-8'>
              <SocialLink
                href='https://github.com/Mandeepsinghmar'
                label='github'
              />
              <SocialLink
                href='https://www.linkedin.com/in/mandeep-singhmar/'
                label='linkedin'
              />
              <SocialLink href='https://x.com/mandeep_singh_9' label='x' />
              <SocialLink href='mailto:msingh8328@gmail.com' label='email' />
              <SocialLink
                href='https://drive.google.com/file/d/1Nadw3zINPVSSKKQjRLMrORtnT62wFUaC/view?usp=sharing'
                label='resume'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ title, description, tech, link, github }) {
  return (
    <div className='p-6  rounded-xl hover:bg-[#f5f5f2] transition-all hover:shadow-lg hover:shadow-violet-600/10 border border-gray-100 '>
      <h3 className='text-lg font-bold mb-3 text-gray-900'>{title}</h3>
      <p className='text-gray-600 mb-4 leading-relaxed text-sm'>
        {description}
      </p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {tech.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 bg-[#ebebeb] rounded-full text-xs text-gray-600 border border-gray-100 ${GeistMono.className}`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className='flex gap-4'>
        <Link
          href={link}
          className='text-violet-600 hover:text-violet-700 flex items-center hover:underline gap-2  transition-all font-medium'
          target='_blank'
        >
          View Project
          <span className='text-sm'>→</span>
        </Link>
        {github && (
          <Link
            href={github}
            className='text-violet-600 hover:text-violet-700 flex items-center gap-2 hover:underline  transition-all font-medium'
            target='_blank'
          >
            github
            <span className='text-sm'>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ title, company, date, description, link }) {
  return (
    <div className='p-6  rounded-xl border border-gray-100 group hover:shadow-lg hover:shadow-violet-600/10 hover:bg-[#f5f5f2] group transition-all'>
      <Link
        href={link}
        target='_blank'
        className='text-xl font-bold text-gray-900 group-hover:underline cursor-pointer'
      >
        {company}
      </Link>
      <p className='text-gray-700 mt-1 text-sm'>{title}</p>
      <p className='text-xs text-gray-500 mt-1'>{date}</p>
      <p className='mt-4 text-gray-600 leading-relaxed text-sm'>
        {description}
      </p>
    </div>
  );
}

function SocialLink({ href, label }) {
  return (
    <Link
      href={href}
      className='text-gray-600 hover:text-violet-600 transition-colors font-medium underline'
      target='_blank'
    >
      {label}
    </Link>
  );
}
