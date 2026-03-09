'use client'
import { scrollToForm } from '@/utils/scroll'
import styles from './OurClients.module.scss'

const OurClients = () => {
	return (
		<section id='clients' className={styles.OurClients}>
			<div className={`${styles.container} container`}>
				<div className={styles.titleWrapper}>
					<div className={styles.titleInner}>
						<h2 className={`${styles.title} def-title`}>Наши клиенты</h2>
						<div className={styles.titleLine}></div>
					</div>
					<p className={styles.subtitle}>
						Мы работаем для тех, кому важен результат
					</p>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<h3 className={styles.cardTitle}>Мебельным производствам</h3>
						<p className={styles.text}>
							Стабильное качество, повторяемость партий, соблюдение сроков
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.cardTitle}>Дизайнерам и архитекторам</h3>
						<p className={styles.text}>
							Реализация сложных идей, нестандартные фасады, точное попадание в
							цвет
						</p>
					</li>
					<li className={styles.item}>
						<h3 className={styles.cardTitle}>Частным клиентам</h3>
						<p className={styles.text}>
							Индивидуальный подход и фасады «как в проекте, а не как получилось
						</p>
					</li>
					<li className={`${styles.item} ${styles.itemBtn}`}>
						<a
							className={styles.itemBtnLink}
							href='#form'
							onClick={e => {
								e.preventDefault()
								scrollToForm()
							}}
						>
							Оставить заявку
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default OurClients
