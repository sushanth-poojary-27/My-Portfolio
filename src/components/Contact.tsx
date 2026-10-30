import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              04
            </span>
          </div>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-4xl font-normal text-ink sm:text-5xl"
          >
            Contact
          </h2>

          <p className="mt-6 max-w-3xl font-serif text-2xl leading-[1.4] text-ink sm:text-3xl lg:text-4xl">
            {profile.contactNote}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-7 py-3.5 text-xs font-semibold tracking-wider text-accent-ink transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 sm:text-sm"
            >
              {profile.email}
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-surface px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-surface px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
