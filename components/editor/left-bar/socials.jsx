import { useRouter } from 'next/router'
import { FaGithub, FaPatreon, FaTwitter, FaUsers, FaVk } from 'react-icons/fa'

import ModalMini from '@/components/elements/modalMini'
import OuterLink from '@/components/outerLink'
import en from '@/locales/en/pages/editor/left-bar/socials'
import ru from '@/locales/ru/pages/editor/left-bar/socials'
import styles from '@/styles/elements/socials.module.css'

import { LeftSection } from '../createSection'

function Icon({ className, onClick }) {
  return (
    <div onClick={onClick}>
      <FaUsers className={className} />
    </div>
  )
}

export default function SocialSection() {
  const router = useRouter()

  const t = router.locale === 'ru' ? ru : en

  return (
    <LeftSection name="Social" icon={Icon}>
      <ModalMini title={t.title} page="Social">
        <div className={styles.content}>
          <OuterLink name="VKontakte" href="https://vk.com/thefluffies">
            <FaVk className="border-blue-500 hover:text-blue-500" />
          </OuterLink>
          
          <OuterLink
            name="GitHub"
            href="https://github.com/Electrum18/The-Fluffies"
          >
            <FaGithub className="border-gray-400 hover:text-gray-400" />
          </OuterLink>
        </div>
      </ModalMini>
    </LeftSection>
  )
}
