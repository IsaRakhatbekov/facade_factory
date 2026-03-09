'use client'
import { scrollToForm } from '@/utils/scroll'
import styles from './ReadyProjects.module.scss'

const ReadyProjects = () => {
	return (
		<section id='portfolio' className={styles.ReadyProjects}>
			<div className={`${styles.container} container`}>
				<div className={styles.titleWrapper}>
					<h2 className={`${styles.title} def-title`}>
						Наши фасады в готовых проектах
					</h2>
					<div className={styles.titleLine}></div>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<p className={styles.text}>Фрезеровка + матовая покраска</p>
					</li>
					<li className={styles.item}>
						<p className={styles.text}>Проект по чертежам дизайнера</p>
						<button type='button' onClick={scrollToForm}>
							Запросить образцы
						</button>
					</li>
					<li className={styles.item}>
						<p className={styles.text}>Индивидуальный профиль</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default ReadyProjects
