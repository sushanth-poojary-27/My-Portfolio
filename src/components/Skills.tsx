import { skillGroups } from '../data/portfolio'

// Skills section: simple labeled lists without progress bars or percentages.
export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-8 border-t border-[#E7E5E4] py-12 dark:border-[#292524]"
    >
      <h2
        id="skills-heading"
        className="text-2xl font-semibold text-[#1C1917] dark:text-[#F5F5F4]"
      >
        Skills
      </h2>

      <dl className="mt-6 space-y-4">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <dt className="w-40 shrink-0 text-[17px] font-semibold text-[#1C1917] dark:text-[#F5F5F4]">
              {group.label}:
            </dt>
            <dd className="text-[17px] leading-[1.65] text-[#44403C] dark:text-[#D6D3D1]">
              {group.items.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

