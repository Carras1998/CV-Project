import data from '../../data/data'
import './Education.css'

const generateCoursesList = (courses) => {
  return courses.map((course) => `<li><p>${course}</p></li>`).join('')
}

const generateTemplate = ({ education }) => {
  const { degree, university, graduationYear, relevantCourses } = education

  return `
    <section class="education" id="education">
      <h2>Educación</h2>
      <h3>${degree}</h3>
      <h4>${university}</h4>
      <p>${graduationYear}</p>
      <ul>
        ${generateCoursesList(relevantCourses)}
      </ul>
    </section>
  `
}

const Education = () => {
  if (!data.education) {
    return ''
  }

  return generateTemplate(data)
}

export default Education
