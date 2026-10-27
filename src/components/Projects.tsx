import { projects } from '../data/portfolio'

// Projects section: plain 1px border cards with 8px radius, no shadows or glows.
export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-8 border-t border-[#E7E5E4] py-12 dark:border-[#292524]"
    >
      <h2
        id="projects-heading"
        className="text-2xl font-semibold text-[#1C1917] dark:text-[#F5F5F4]"
      >
        Projects
      </h2>

      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-[#E7E5E4] bg-white p-5 transition-colors hover:border-[#A8A29E] dark:border-[#292524] dark:bg-[#1C1917] dark:hover:border-[#57534E] sm:p-6"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-[20px] font-semibold text-[#1C1917] dark:text-[#F5F5F4]">
                {project.title}
              </h3>
              <span className="text-[15px] text-[#57534E] dark:text-[#A8A29E]">
                {project.period}
              </span>
            </div>

            <p className="mt-2 text-[17px] leading-[1.65] text-[#292524] dark:text-[#E7E5E4]">
              {project.summary}
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.65] text-[#44403C] dark:text-[#D6D3D1]">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F5F4] pt-4 dark:border-[#292524]">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[#E7E5E4] bg-[#FAFAF9] px-2.5 py-0.5 text-[14px] text-[#44403C] dark:border-[#44403C] dark:bg-[#141413] dark:text-[#D6D3D1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[#2F5DA8] underline-offset-4 hover:underline dark:text-[#7AA8E8]"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

