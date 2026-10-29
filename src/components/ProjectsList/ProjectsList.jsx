import { useEffect, useState } from 'react'
import './ProjectsList.css'

// Assets
import LikePreenchido from '../../assets/like-preenchido.svg'
import LikeVazio from '../../assets/like.svg'

// UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsResponse = await getApiData('projects')
        setProjects(projectsResponse)
      } catch {
        setProjects([])
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="projects-section">

      <div className="projects-hero">
        <h1>Follow Our Projects</h1>

        <p>
          It is a long established fact that a reader will be distracted by
          the of readable content of page lookings at its layouts points.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => {
  console.log(project.thumbnail)

  return (
    <div
      className="projects-card d-flex jc-center al-center fd-column"
      key={project.id}
    >
      <div
        className="thumb tertiary-background"
        style={{
          backgroundImage: `url(${project.thumbnail})`
        }}
      ></div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <img
        src={LikePreenchido}
        height="24px"
        alt="Like"
      />
    </div>
  )
})}

      </div>

    </div>
  )
}

export default ProjectsList