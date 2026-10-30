import { projects } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              01
            </span>
          </div>
          <h2
            id="projects-heading"
            className="mt-3 font-serif text-4xl font-normal text-ink sm:text-5xl"
          >
            Projects
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {projects.map((project, index) => {
            const formattedNumber = String(index + 1).padStart(2, '0')
            return (
              <Reveal key={project.title} delay={index * 100}>
                <article className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent sm:p-9">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-5">
                      <span
                        aria-hidden="true"
                        className="font-serif text-3xl italic text-accent/35 transition-colors duration-300 group-hover:text-accent sm:text-4xl"
                      >
                        {formattedNumber}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl font-normal text-ink sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {project.period}
                        </p>
                      </div>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition-opacity duration-200 hover:underline"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>

                  <p className="mt-5 text-base leading-[1.7] text-ink/90 sm:text-[17px]">
                    {project.summary}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm leading-[1.7] text-muted sm:text-base">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3.5">
                        <span
                          aria-hidden="true"
                          className="mt-3 h-px w-3.5 shrink-0 bg-accent"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-line pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-surface2 px-4 py-1.5 text-xs font-medium tracking-wide text-ink/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
