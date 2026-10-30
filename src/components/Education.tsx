import { activitiesList, educationList } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-20 border-t border-line py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1140px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              03
            </span>
          </div>
          <h2
            id="education-heading"
            className="mt-3 font-serif text-4xl font-normal text-ink sm:text-5xl"
          >
            Education
          </h2>
        </Reveal>

        {/* Vertical timeline */}
        <div className="mt-12 ml-2 border-l border-line pl-6 sm:ml-3 sm:pl-9">
          <div className="space-y-8">
            {educationList.map((item, index) => (
              <Reveal key={item.degree} delay={index * 90}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-7 -left-[29px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[41px]"
                  />
                  <div className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/60 sm:p-8">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                      <h3 className="font-serif text-2xl font-normal text-ink">
                        {item.degree}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-base text-muted">
                      {item.institution}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                        {item.score}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Activities */}
        <Reveal className="mt-20">
          <h3 className="font-serif text-3xl font-normal text-ink sm:text-4xl">
            Activities
          </h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {activitiesList.map((activity, index) => (
            <Reveal key={activity.role} delay={index * 90} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent sm:p-7">
                <div
                  aria-hidden="true"
                  className="mb-5 h-0.5 w-8 bg-accent"
                />
                <p className="text-base leading-[1.7] text-muted">
                  <strong className="font-semibold text-ink">
                    {activity.role}:
                  </strong>{' '}
                  {activity.details}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
