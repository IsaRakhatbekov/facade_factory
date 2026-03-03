import styles from './Hero.module.scss'
const Hero = () => {
	return (
		<section className={styles.Hero}>
			<div className={`${styles.container} container`}>
				<div className={styles.heroContent}>
					<h1 className={styles.title}>
						<div className={styles.titleInner}>
							<span className={styles.titleFirst}>Фасады</span>
							<span className={styles.titleLine}></span>
						</div>
						<span className={styles.titleSecond}> для мебели</span>
					</h1>
					<h2 className={styles.subtitle}>
						<span>Точно</span> <span>Красиво</span> <span>В срок</span>
					</h2>
					<div className={styles.btnWrapper}>
						<button className={`${styles.btn} ${styles.btnPrimary}`}>
							Рассчитать стоимость
						</button>
						<button className={`${styles.btn} ${styles.btnTransparent}`}>
							Получить консультацию
						</button>
					</div>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<span className={styles.circle}></span>
						<p className={styles.text}>
							Производство мебельных фасадов на ЧПУ с профессиональной покраской
						</p>
					</li>
					<li className={styles.item}>
						<span className={styles.circle}></span>
						<p className={styles.text}>
							Изготавливаем фасады кухонь, шкафов и другой мебели
						</p>
					</li>
					<li className={styles.item}>
						<span className={styles.circle}></span>
						<p className={styles.text}>
							Работаем с мебельными производствами, дизайнерами и частными
							заказами
						</p>
					</li>
					<li className={styles.item}>
						<span className={styles.circle}></span>
						<p className={styles.text}>
							Фасады от производителей без лишних наценок
						</p>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Hero
