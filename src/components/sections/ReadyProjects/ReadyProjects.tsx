import styles from './ReadyProjects.module.scss'

const ReadyProjects = () => {
	return (
		<section className={styles.ReadyProjects}>
			<div className={`${styles.container} container`}>
				<h2 className={`${styles.title} def-title`}>
					Наши фасады в готовых проектах
				</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<p className={styles.text}>Фрезеровка + матовая покраска</p>
					</li>
					<li className={styles.item}>
						<p className={styles.text}>Проект по чертежам дизайнера</p>
						<button>Запросить образцы</button>
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
