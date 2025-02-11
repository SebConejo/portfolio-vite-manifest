import Manifest from '@mnfst/sdk'
import { ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Project } from '../../types/types'
import { FadeIn } from '../animations/FadeIn'

export function Work() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      const manifest = new Manifest('http://localhost:1111')
      const paginator = await manifest
        .from('projects')
        .orderBy('date', { desc: true })
        .find()
      const projects = paginator.data as Project[]
      setProjects(projects)
    }
    fetchProjects()
  }, [])
  return (
    <section id="work" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Selected Work
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group">
                <div
                  className={`grid md:grid-cols-3 gap-12 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div
                    className={`md:col-span-2 ${
                      index % 2 === 1 ? 'md:col-start-2' : ''
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                      <Link to={`/project/${index}`} className="block">
                        <img
                          src={project.photo.large || project.photo.small}
                          alt={project.title}
                          className="w-full h-full object-cover bg-slate-100 transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="text-lg font-medium">{project.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="text-lg font-medium">{project.date}</p>
                      </div>
                      <a
                        href={project.url}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Case Study <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
