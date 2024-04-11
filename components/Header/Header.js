import './Header.css'

document.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.querySelector('header h1')
  titleElement.addEventListener('click', () => {
    location.reload() // Recargar la página
  })

  const menuLinks = document.querySelectorAll('header nav ul li a')
  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      location.reload() // Recargar la página
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
    .map((item) => `<li><a href="#${item.id}">${item.label}</a></li>`)
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
