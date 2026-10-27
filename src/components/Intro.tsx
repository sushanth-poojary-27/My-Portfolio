import { profile } from '../data/portfolio'

// Intro section with portrait photo, name, title, location, short bio,
// primary buttons ("View Projects" and "Download Resume"), and plain text links.
export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="pt-10 pb-12 sm:pt-14 sm:pb-16">
      <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div>
          <h1
            id="intro-heading"
            className="text-3xl font-semibold text-[#1C1917] dark:text-[#F5F5F4] sm:text-4xl"
          >
            {profile.name}
          </h1>
          <p className="mt-2 text-[18px] font-medium text-[#44403C] dark:text-[#D6D3D1]">
            {profile.title}
          </p>
          <p className="mt-1 text-[16px] text-[#57534E] dark:text-[#A8A29E]">
            {profile.location}
          </p>
        </div>

        <img
          src={profile.photoUrl}
          alt="Portrait of Sushanth Poojary"
          width={112}
          height={112}
          className="h-24 w-24 shrink-0 rounded-lg border border-[#D6D3D1] object-cover object-top dark:border-[#44403C] sm:h-28 sm:w-28"
        />
      </div>

      <p className="mt-6 text-[17px] leading-[1.65] text-[#1C1917] dark:text-[#E7E5E4] sm:text-[18px]">
        {profile.intro}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-[#2F5DA8] px-4 py-2.5 text-[16px] font-medium text-white hover:underline dark:bg-[#3B6EC2]"
        >
          View Projects
        </a>

        <a
          href={profile.resumeUrl}
          download
          className="rounded-lg border border-[#D6D3D1] bg-white px-4 py-2.5 text-[16px] font-medium text-[#1C1917] hover:border-[#2F5DA8] hover:underline dark:border-[#44403C] dark:bg-[#1C1917] dark:text-[#F5F5F4] dark:hover:border-[#7AA8E8]"
        >
          Download Resume
        </a>

        <div className="flex items-center gap-4 pl-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-medium text-[#2F5DA8] underline-offset-4 hover:underline dark:text-[#7AA8E8]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-medium text-[#2F5DA8] underline-offset-4 hover:underline dark:text-[#7AA8E8]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

