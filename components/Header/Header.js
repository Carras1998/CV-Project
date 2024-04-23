import './Header.css'

document.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.querySelector('header h1')
  titleElement.addEventListener('click', () => {
    location.reload()
  })

  const menuLinks = document.querySelectorAll('header nav ul li a')
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetSection = document.getElementById(targetId)
      targetSection.scrollIntoView({ behavior: 'smooth' })
    })
  })
})

const menuItems = [
  { id: 'aboutme', label: 'Acerca de mi' },
  { id: 'education', label: 'Educación' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' }
]

const generateMenuItems = () => {
  return menuItems
    .map(
      (item) =>
        `<li><a href="#${item.id}" target="_blank">${item.label}</a></li>`
    )
    .join('')
}

const generateTemplate = () => {
  return `
    <header>
      <h1>Sergio Mejías</h1>
      <nav>
        <ul>${generateMenuItems()}</ul>
      </nav>
    </header>
  `
}

const Header = () => {
  return generateTemplate()
}

export default Header
