import whyWe1 from '@/public/images/whyWe1.png'
import Image from 'next/image'
import styles from './WhyWe.module.scss'
const WhyWe = () => {
	return (
		<section className={styles.WhyWe}>
			<div className={`${styles.container} container`}>
				<div className={styles.top}>
					<h2 className={`${styles.title} def-title`}>
						Почему выбирают именно нас
					</h2>
					<ul className={styles.list}>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<p className={styles.text}>ЧПУ-оборудование нового поколения</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<p className={styles.text}>
								Реалистичная фрезеровка без «замыленных» краёв
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<p className={styles.text}>
								Ровная покраска без шагрени,пыли и дефектов
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<p className={styles.text}>Чёткие сроки — без «ещё пару дней»</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<p className={styles.text}>
								Мы говорим на одном языке с мебельщиками и дизайнерами
							</p>
						</li>
						<li className={styles.item}>
							<Image src={whyWe1} alt='whyWe1' />
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default WhyWe
