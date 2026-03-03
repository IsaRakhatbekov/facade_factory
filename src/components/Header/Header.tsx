'use client'
import Image from 'next/image'
import styles from './Header.module.scss'

import logo from '@/public/images/logo.svg'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		const handleResize = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false)
			}
		}
		window.addEventListener('resize', handleResize)

		return () => {
			document.body.style.overflow = ''
			window.removeEventListener('resize', handleResize)
		}
	}, [isOpen])

	const handleOpen = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

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
					<button className={styles.burger} onClick={handleOpen}>
						<span
							className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}
						></span>
					</button>
					<div className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}>
						<ul className={styles.burgerList}>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									О нас
								</a>
							</li>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									Наши клиенты
								</a>
							</li>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									Что производим
								</a>
							</li>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									Как работаем
								</a>
							</li>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									Преимущества
								</a>
							</li>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									Портфолио
								</a>
							</li>
							<li className={styles.item}>
								<a className={styles.link} href='#' onClick={closeMenu}>
									Партнёрам
								</a>
							</li>
							<li className={styles.burgerBtnsWrapper}>
								<button
									className={`${styles.burgerBtn} ${styles.burgerBtnPrimary}`}
									onClick={closeMenu}
								>
									Рассчитать стоимость
								</button>
								<button
									className={`${styles.burgerBtn} ${styles.burgerBtnTransparent}`}
									onClick={closeMenu}
								>
									Получить консультацию
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
