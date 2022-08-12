import React from 'react'
import styles from './styles.css'

export interface INavigationMenuItem {
  text: string
  href: string
}

export const NavigationMenuItem = ({ text, href }: INavigationMenuItem) => {
  return (
    <div className={styles.navigationMenuItemWrapper}>
      <a href={href}>{text}</a>
    </div>
  )
}