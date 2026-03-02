import Image from 'next/image'
import styles from './Header.module.scss'

import logo from '@/public/images/logo.png'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={`${styles.container} container`}>
				<nav className={styles.nav}>
					<div className={styles.logoWrapper}>
						<Image src={logo} alt='ФАБРИКА ФАСАДОВ' />
					</div>
					<ul className={styles.list}>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								О нас
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								Наши клиенты
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								Что производим
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								Как работаем
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								Преимущества
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								Портфолио
							</a>
						</li>
						<li className={styles.item}>
							<a className={styles.link} href='#'>
								Партнёрам
							</a>
						</li>
					</ul>

					<button className={styles.btn}>Рассчитать стоимость</button>
				</nav>
			</div>
		</header>
	)
}

export default Header
