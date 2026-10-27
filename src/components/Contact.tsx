import { profile } from '../data/portfolio'

// Contact section: short availability sentence and plain text links for email, LinkedIn, and GitHub.
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-8 border-t border-[#E7E5E4] py-12 dark:border-[#292524]"
    >
      <h2
        id="contact-heading"
        className="text-2xl font-semibold text-[#1C1917] dark:text-[#F5F5F4]"
      >
        Contact
      </h2>

      <p className="mt-4 text-[17px] leading-[1.65] text-[#44403C] dark:text-[#D6D3D1] sm:text-[18px]">
        {profile.contactNote}
      </p>

      <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-[17px]">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-[#2F5DA8] underline-offset-4 hover:underline dark:text-[#7AA8E8]"
          >
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2F5DA8] underline-offset-4 hover:underline dark:text-[#7AA8E8]"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2F5DA8] underline-offset-4 hover:underline dark:text-[#7AA8E8]"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  )
}

