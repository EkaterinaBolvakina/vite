import { FC } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../utils/constants'

const Header: FC = () => {
    return (
        <>
            <header className='header'>
            {navItems.map(item => (
        <Link key={item} to={`/${item.toLowerCase()}`}>
          <button className='navBtn'>
            {item}
          </button>
        </Link>
      ))}
            </header>
        </>
    )
}

export default Header
