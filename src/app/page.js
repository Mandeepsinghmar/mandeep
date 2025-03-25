import Image from 'next/image';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-[#ebebeb] text-[#1a1a1a] ${GeistMono.className}`}
    >
      {/* Hero Section */}
      <header className='container mx-auto px-4 py-20 max-w-4xl'>
        <div className='flex flex-col gap-10'>
          <div className='flex items-center gap-8'>
            <div className='w-28 h-28 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-violet-600/20'>
              MS
            </div>
            <div>
              <h1 className='text-4xl font-bold mb-3 text-black bg-clip-text '>
                Mandeep Singhmar
              </h1>
              <p className='text-gray-600 text-lg'>Frontend Developer</p>
            </div>
          </div>
          <div className='space-y-6 max-w-3xl'>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Hello! I'm a developer from India with 3+ years of experience in
              building exceptional digital experiences. I specialize in frontend
              development with React/Next.js and have worked remotely with
              companies across the USA, Canada, and Europe.
            </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
              I've delivered multiple successful projects, focusing on creating
              performant and beautiful user interfaces. When not coding, I enjoy
              exploring new technologies and contributing to the developer
              community.
            </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Available for work, freelance projects, and collaborations.{' '}
              <Link
                href='mailto:msingh8328@gmail.com'
                className=' text-violet-600 hover:text-violet-700 font-medium'
              >
                contact me
              </Link>
            </p>
          </div>
        </div>
      </header>

      {/* Work Experience */}
      <section className='py-12 '>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-2xl font-bold mb-12 text-black'>
            Work Experience
          </h2>
          <div className='space-y-6'>
            <ExperienceCard
              title='Frontend Developer'
              company='Softhesis Labs'
              date='June 2023 - Present'
              description='Leading frontend development for a financial platform, implementing modern UI components and complex data visualizations.'
            />
            <ExperienceCard
              title='Frontend engineer'
              company='JavaScript Mastery'
              date='Aug 2021 - Feb 2023'
              description='Designed and developed 20+ projects that helped
 millions of students to learn web technologies.'
            />
            <ExperienceCard
              title='Frontend Developer'
              company='The Eagle3Dstreaming'
              date='March 2022 - Nov 2022'
              description='Developed and maintained the frontend architecture for 3D streaming platform.'
            />
            <ExperienceCard
              title='Frontend Developer'
              company='Examine.com'
              date='July 2022 - Oct 2022'
              description='Developed and maintained the frontend architecture for a health and nutrition platform.'
            />
          </div>
        </div>
      </section>

      {/* Tools & Skills */}
      <section className='py-12 '>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-2xl font-bold mb-12 text-black'>
            Tools & technologies
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[
              'React',
              'Next.js',
              'TypeScript',
              'JavaScript',
              'Tailwind CSS',
              'Material-UI',
              'Node.js',
              'Express',
              'Redux',
              'Firebase',
              'Git',
              'MERN Stack',
            ].map((tool) => (
              <div
                key={tool}
                className='p-4 bg-[#f3f2f2] rounded-xl text-center hover:bg-[#f8f8f8] transition-all hover:shadow-lg hover:shadow-violet-600/5 border border-gray-100'
              >
                <span className='text-gray-600 text-sm'>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-12'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <h2 className='text-2xl font-bold mb-12 text-black'>
            Featured Projects
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <ProjectCard
              title='Financial Platform'
              description="Working on Softhesis Labs' financial platform, implementing modern UI components and integrating complex financial data visualization."
              tech={['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']}
              link='https://tryfinancially.com'
            />
            <ProjectCard
              title='E-learning Platform'
              description='Built over 20 educational projects for JavaScript Mastery, helping thousands of students learn modern web development technologies.'
              tech={['React', 'Node.js', 'MongoDB', 'Express']}
              link='#'
            />
            <ProjectCard
              title='Streaming Platform'
              description='Developed the frontend interface for Eagle3Dstreaming, implementing real-time video streaming features and responsive design.'
              tech={['React', 'WebRTC', 'Material-UI', 'Redux']}
              link='https://www.eagle3dstreaming.com'
            />
            <ProjectCard
              title='Health & Nutrition Platform'
              description='Led the frontend development for Examine.com, building a modern and user-friendly interface for accessing health and nutrition information.'
              tech={['Next.js', 'GraphQL', 'Styled Components', 'Redux']}
              link='https://examine.com'
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='py-12'>
        <div className='container mx-auto px-4 max-w-4xl text-center'>
          <h2 className='text-2xl font-bold mb-8 text-black'>Get in Touch</h2>
          <p className='text-gray-700 mb-8 max-w-2xl mx-auto text-lg'>
            I'm currently available for remote frontend development
            opportunities. Feel free to reach out if you'd like to work
            together!
          </p>
          <div className='flex justify-center gap-6'>
            <Link
              href='mailto:msingh8328@gmail.com'
              className='px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/20 text-white font-medium'
            >
              Contact Me
            </Link>
            <Link
              href='#'
              className='px-6 py-3 bg-[#f3f2f2] border border-gray-200 hover:border-violet-200 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/10 font-medium text-gray-700 hover:text-violet-600'
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-12 border-t border-gray-200'>
        <div className='container mx-auto px-4 max-w-4xl'>
          <div className='flex justify-center gap-8'>
            <SocialLink href='#' label='GitHub' />
            <SocialLink href='#' label='LinkedIn' />
            <SocialLink href='#' label='Twitter' />
          </div>
          <p className='text-center text-gray-500 mt-8'>
            © 2025 Mandeep Singhmar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className='p-6 bg-[#f3f2f2] rounded-xl hover:bg-[#f8f8f8] transition-all hover:shadow-lg hover:shadow-violet-600/10 border border-gray-100 group'>
      <h3 className='text-xl font-bold mb-3 text-gray-900'>{title}</h3>
      <p className='text-gray-600 mb-4 leading-relaxed'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {tech.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 bg-[#ebebeb] rounded-full text-sm text-gray-600 border border-gray-100 ${GeistMono.className}`}
          >
            {item}
          </span>
        ))}
      </div>
      <Link
        href={link}
        className='text-violet-600 hover:text-violet-700 flex items-center gap-2 group-hover:gap-3 transition-all font-medium'
        target='_blank'
      >
        View Project
        <span className='text-sm'>→</span>
      </Link>
    </div>
  );
}

function ExperienceCard({ title, company, date, description }) {
  return (
    <div className='p-6 bg-[#f3f2f2] rounded-xl border border-gray-100 hover:shadow-lg hover:shadow-violet-600/10 hover:bg-[#f8f8f8] group transition-all'>
      <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
      <p className='text-gray-700 mt-1'>{company}</p>
      <p className='text-sm text-gray-500 mt-1'>{date}</p>
      <p className='mt-4 text-gray-600 leading-relaxed'>{description}</p>
    </div>
  );
}

function SocialLink({ href, label }) {
  return (
    <Link
      href={href}
      className='text-gray-600 hover:text-violet-600 transition-colors font-medium'
      target='_blank'
    >
      {label}
    </Link>
  );
}
