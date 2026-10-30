import React, { useState, useEffect } from 'react';
import './ProjectsList.css'


// Assets
import LikePreenchido from '../../assets/like-preenchido.svg'
import LikeVazio from '../../assets/like.svg'
import ImagemCard from '../../assets/imgcard.jpg'

// UTILS
import { getApiData } from '../../services/apiServices'

function ProjectsList(props) {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
              const projectsResponse = await getApiData('projects')
              console.log(projectsResponse)
              setProjects(projectsResponse)
      } catch {
        setProjects([])
      }
    }

    fetchData()
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
       
      {projects.map(project => (
  <div className="project-card d-flex jc-center al-center fd-column" key={project.id} >
 <img
className="thumb"
src={ImagemCard}
alt={project.title}
/>
    <h3>{project.title}</h3>
    <p>{project.subtitle}</p>
    <img src={LikePreenchido} height="24px" />
  </div> 
))}


      </div>

    </div>
  )
}

export default ProjectsList