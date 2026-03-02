import styles from './OurClients.module.scss'

const OurClients = () => {
	return (
		<section className={styles.OurClients}>
			<div className={`${styles.container} container`}>
				<div className={styles.titleWrapper}>
					<h2 className={`${styles.title} def-title`}>Наши клиенты</h2>
					<div className={styles.titleInner}>
						<div className={styles.titleLine}></div>
						<h3 className={styles.subtitle}>
							Мы работаем для тех, кому важен результат
						</h3>
					</div>
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
						<a className={styles.itemBtnLink} href='#'>
							Оставить заявку
						</a>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default OurClients
