import data from '../../data/data'
import './WorkExperience.css'

const generateExperienceItem = (item) => {
  const { startDate, endDate, company, position, description } = item

  return `
    <li>
      <h3>${startDate} - ${endDate}</h3>
      <h4>${company}</h4>
      <h4>${position}</h4>
      <p>${description}</p>
    </li>
  `
}

const generateTemplate = (workExperience) => {
  if (!workExperience || workExperience.length === 0) {
    return ''
  }

  return `
    <section class="experience" id="experience">
      <h2>Experiencia</h2>
      <ul>
        ${workExperience.map(generateExperienceItem).join('')}
      </ul>
    </section>
  `
}

const Experience = () => {
  return generateTemplate(data.workExperience)
}

export default Experience
