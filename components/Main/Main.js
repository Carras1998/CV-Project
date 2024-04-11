import './Main.css'
import { AboutMe } from '../AboutMe/AboutMe'
import Education from '../Education/Education'
import Experience from '../WorkExperience/WorkExperience'
import Projects from '../Projects/Projects'

const contenidoPrincipal = {
  educacion: Education(),
  experiencia: Experience()
}

let mostrar = 'experiencia'

const plantilla = () => {
  return `
    <main>
      ${AboutMe()}
      <div class="change-container">
        <button id="change">Mostrar ${mostrar}</button>
      </div>
      <div id="content">
        ${contenidoPrincipal[mostrar]}
      </div>
      ${Projects()}
    </main>
  `
}

export const Main = () => {
  return plantilla()
}

export const addMainListeners = () => {
  const boton = document.querySelector('#change')

  boton.addEventListener('click', () => {
    mostrar = mostrar === 'experiencia' ? 'educacion' : 'experiencia'
    boton.textContent = `Mostrar ${mostrar}`
    document.querySelector('#content').innerHTML = contenidoPrincipal[mostrar]
  })
}
