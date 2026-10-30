import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-t border-line bg-surface/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              02
            </span>
          </div>
          <h2
            id="skills-heading"
            className="mt-3 font-serif text-4xl font-normal text-ink sm:text-5xl"
          >
            Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 80} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/60 sm:p-8">
                <h3 className="font-serif text-2xl font-normal text-ink">
                  {group.label}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-surface2 px-4 py-1.5 text-sm font-medium text-ink/90 transition-colors duration-200 hover:border-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
