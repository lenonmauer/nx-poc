import Link from 'next/link'

import { styles } from './styles'

type Props = {
  children: any
}

const menus = [
  {
    url: '/',
    label: 'Home Page',
  },
  {
    url: '/credit',
    label: 'Credit Page',
  },
  {
    url: '/debts',
    label: 'Debts Page',
  },
]

export function Layout(props: Props) {
  const { children } = props

  return (
    <>
      <header className="header">
        {menus.map((menu) => (
          <Link href={menu.url} key={menu.url}>
            <a>{menu.label}</a>
          </Link>
        ))}
      </header>

      <main>{children}</main>

      <style jsx>{styles}</style>
    </>
  )
}

export default Layout
