import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Intro() {
  const nameParts = profile.name.trim().split(' ')
  const firstName = nameParts.slice(0, -1).join(' ')
  const lastName = nameParts[nameParts.length - 1] ?? ''

  return (
    <section
      aria-labelledby="intro-heading"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 md:py-28 lg:pt-36"
    >
      {/* Soft blurred accent glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] sm:h-[460px] sm:w-[540px]"
      />

      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left column */}
          <Reveal className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {profile.location}
              </p>
            </div>

            <h1
              id="intro-heading"
              className="mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]"
            >
              {firstName}{' '}
              <span className="italic text-accent">{lastName}</span>
            </h1>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-ink/90 sm:text-sm">
              {profile.title}
            </p>

            <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted sm:text-[17px]">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-ink transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                View Projects
              </a>

              <a
                href={profile.resumeUrl}
                download
                className="rounded-full border border-line bg-surface px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-7 flex items-center gap-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-muted transition-colors duration-200 hover:text-accent"
              >
                GitHub
              </a>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.22em] text-muted transition-colors duration-200 hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Right column: Balanced editorial portrait frame with offset accent outline */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[400px] lg:ml-auto lg:mr-2">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/60 sm:translate-x-3.5 sm:translate-y-3.5"
              />
              <div className="relative aspect-[5/6] overflow-hidden rounded-2xl border border-line bg-surface">
                <img
                  src={profile.photoUrl}
                  alt="Portrait of Sushanth Poojary"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
