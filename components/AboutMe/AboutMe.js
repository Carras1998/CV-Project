import data from '../../data/data'
import './AboutMe.css'

const generateSkillsList = (skills) => {
  return skills.map((skill) => `<li><p>${skill}</p></li>`).join('')
}

const generateTemplate = (data) => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>Acerca de mí</h2>
      <img class="avatar" src="${data.avatar}" alt="${data.name}" />
      <ul>${generateSkillsList(data.skills)}</ul>
      <p>${data.aboutMe}</p>
      <p>${data.address}</p>
      <a href="mailto:${data.email}">¡Contáctame!</a>
    </section>
  `
}

export const AboutMe = () => {
  return generateTemplate(data)
}

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar')

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'))
}
