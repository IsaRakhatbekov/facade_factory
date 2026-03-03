import specialConditionsImg from '@/public/images/specialConditionsImg.webp'
import Image from 'next/image'
import styles from './SpecialConditions.module.scss'
const SpecialConditions = () => {
	return (
		<section id="partners" className={styles.SpecialConditions}>
			<div className={`${styles.container} container`}>
				<div className={styles.titleWrapper}>
					<div className={styles.titleLine}></div>
					<div className={styles.titleInner}>
						<h2 className={`${styles.title} def-title`}>
							Специальные условия для дизайнеров и партнёров
						</h2>
						<h3 className={styles.subtitle}>
							Мы открыты к долгосрочному сотрудничеству с мебельными
							производствами и дизайн-бюро.
						</h3>
					</div>
				</div>

				<div className={styles.wrapper}>
					<div className={styles.imgWrapper}>
						<Image src={specialConditionsImg} alt='Special conditions' />
					</div>
					<ul className={styles.content}>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<h4 className={styles.itemTitle}>СКИДКА - 10% НА ПЕРВЫЙ ЗАКАЗ</h4>
							<p className={styles.itemText}>
								Гибкая ценовая политика оптовым заказчикам. Для наших дилеров и
								постоянных клиентов специальные выгодные условия сотрудничества
								и скидки
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<h4 className={styles.itemTitle}>СРОКИ ИЗГОТОВЛЕНИЯ</h4>
							<p className={styles.itemText}>
								Благодаря квалифицированному персоналу, собственному
								оборудованию и профессиональному подходу, возможность делать
								фасады от 2х дней
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<h4 className={styles.itemTitle}>ПЕРСОНАЛЬНЫЙ МЕНЕДЖЕР</h4>
							<p className={styles.itemText}>
								Расчет заказа за 1 день. Наши специалисты подробно обсудят все
								детали оптовой заявки и решат все возникшие вопросы
							</p>
						</li>
						<li className={styles.item}>
							<span className={styles.circle}></span>
							<h4 className={styles.itemTitle}>ГАРАНТИЯ КАЧЕСТВА</h4>
							<p className={styles.itemText}>
								Мы гарантируем высокое качество изделий. Гарантийный срок 12
								месяцев со дня готовности заказа
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default SpecialConditions
