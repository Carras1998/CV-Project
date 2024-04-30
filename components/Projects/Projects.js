import data from '../../data/data'
import './Projects.css'

const { projects } = data

const generateProjectList = () => {
  return projects
    .map(
      (project) => `
    <li>
      <img src="${project.preview}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Conocer más...</a>
    </li>
  `
    )
    .join('')
}

const template = () => `
  <section class="projects" id="projects">
    <h2>Proyectos</h2>
    <ul>
      ${generateProjectList()}
    </ul>
  </section>
`

const Projects = () => template()

export default Projects
