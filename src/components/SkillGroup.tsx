import type { SkillGroup as SkillGroupData } from '../data/skills'

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="skill-group">
      <p className="skill-group__label">{group.category}</p>
      <ul className="tags">
        {group.items.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
