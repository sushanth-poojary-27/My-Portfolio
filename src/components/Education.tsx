import { activitiesList, educationList } from '../data/portfolio'

// Education & Activities section: clean list of academic history and college involvement.
export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-8 border-t border-[#E7E5E4] py-12 dark:border-[#292524]"
    >
      <h2
        id="education-heading"
        className="text-2xl font-semibold text-[#1C1917] dark:text-[#F5F5F4]"
      >
        Education
      </h2>

      <div className="mt-6 space-y-5">
        {educationList.map((item) => (
          <div
            key={item.degree}
            className="rounded-lg border border-[#E7E5E4] bg-white p-5 dark:border-[#292524] dark:bg-[#1C1917]"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-[18px] font-semibold text-[#1C1917] dark:text-[#F5F5F4]">
                {item.degree}
              </h3>
              <span className="text-[15px] text-[#57534E] dark:text-[#A8A29E]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-[17px] text-[#44403C] dark:text-[#D6D3D1]">
              {item.institution}
            </p>
            <p className="mt-1 text-[16px] font-medium text-[#1C1917] dark:text-[#E7E5E4]">
              {item.score}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-xl font-semibold text-[#1C1917] dark:text-[#F5F5F4]">
        Activities
      </h3>

      <ul className="mt-4 list-disc space-y-3 pl-5 text-[17px] leading-[1.65] text-[#44403C] dark:text-[#D6D3D1]">
        {activitiesList.map((activity) => (
          <li key={activity.role}>
            <span className="font-semibold text-[#1C1917] dark:text-[#F5F5F4]">
              {activity.role}:
            </span>{' '}
            {activity.details}
          </li>
        ))}
      </ul>
    </section>
  )
}

