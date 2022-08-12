import React from 'react'

import { NavigationMenuItem } from '../NavigationMenuItem'
import { navigationMenuItems } from './menuItems'

import styles from './styles.css'

export const NavigationMenu = () => {
  return (
    <nav className={styles.navigationMenuContainer}>
      {navigationMenuItems.map(item => (
        <NavigationMenuItem
          key={item.href}
          text={item.text}
          href={item.href}
        />
      ))}
    </nav>
  )
}