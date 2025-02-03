const skills = {
  'Design Tools': [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 85 },
    { name: 'Sketch', level: 80 },
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'Adobe Illustrator', level: 85 },
  ],
  'UX/UI Design': [
    { name: 'Wireframing', level: 90 },
    { name: 'Prototyping', level: 85 },
    { name: 'User Research', level: 80 },
    { name: 'Interaction Design', level: 85 },
    { name: 'Accessibility', level: 75 },
  ],
  'Tools & Collaboration': [
    { name: 'Miro', level: 85 },
    { name: 'Notion', level: 80 },
    { name: 'Slack', level: 90 },
    { name: 'Jira', level: 75 },
  ],
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <div className="space-y-6">
                {skillList.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface SkillBarProps {
  name: string
  level: number
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-purple-800 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
