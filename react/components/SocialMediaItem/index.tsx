import React from 'react'
import styles from './styles.css'

export interface ISocialMediaItem {
  alt: string
  href: string
  icon: string
}

export const SocialMediaItem = ({ alt, href, icon }: ISocialMediaItem) => {
  return (
    <div className={styles.socialMediaItemWrapper}>
      <a href={href}>
        <img src={icon} alt={alt} />
      </a>
    </div>
  )
}