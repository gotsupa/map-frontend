import { NavLink } from 'react-router-dom'

import { Styled } from './HeaderBar.styled'

const ROUTES = [
  {
    page: 'main',
    link: '/',
  },
  {
    page: 'calculation',
    link: 'test',
  },
]

const HeaderBar = () => {
  return (
    <Styled id='header-bar'>
      <ul>
        {ROUTES.map(({ page, link }) => (
          <li key={page}>
            <NavLink to={link}>{page}</NavLink>
          </li>
        ))}
      </ul>
    </Styled>
  )
}

export default HeaderBar
