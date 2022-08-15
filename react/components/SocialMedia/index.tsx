import React from 'react'

import { SocialMediaItem } from '../SocialMediaItem'
import { socialMediaItems } from './menuItems'

import styles from './styles.css'

export const SocialMedia = () => {
  return (
    <nav className={styles.socialMediaContainer}>
      {socialMediaItems.map(item => (
        <SocialMediaItem
          key={item.href}
          alt={item.alt}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </nav>
  )
}