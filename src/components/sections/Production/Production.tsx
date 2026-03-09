import production1 from '@/public/images/production1.webp'
import production2 from '@/public/images/production2.webp'
import production3 from '@/public/images/production3.webp'
import production4 from '@/public/images/production4.webp'
import production5 from '@/public/images/production5.webp'

import Image from 'next/image'
import styles from './Production.module.scss'

const Production = () => {
	return (
		<section id='production' className={styles.Production}>
			<div className={`${styles.container} container`}>
				<div className={styles.titleWrapper}>
					<div className={styles.titleInner}>
						<div className={styles.titleLine}></div>
						<h2 className={`${styles.title} def-title`}>Что мы производим</h2>
					</div>
					<h3 className={styles.subtitle}>
						Изготавливаем фасады под ваш проект
					</h3>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.itemImg}>
							<Image src={production1} alt='' />
						</div>
						<h4 className={styles.itemTitle}>Фасады МДФ</h4>
						<p className={styles.itemText}>МДФ, эмаль матовая</p>
					</li>
					<li className={styles.item}>
						<div className={styles.itemImg}>
							<Image src={production2} alt='' />
						</div>
						<h4 className={styles.itemTitle}>
							Фрезерованные фасады любой сложности
						</h4>
						<p className={styles.itemText}>МДФ, эмаль матовая</p>
					</li>
					<li className={styles.item}>
						<div className={styles.itemImg}>
							<Image src={production3} alt='' />
						</div>
						<h4 className={styles.itemTitle}>Гладкие и классические фасады</h4>
						<p className={styles.itemText}>МДФ, эмаль матовая</p>
					</li>
					<li className={styles.item}>
						<div className={styles.itemImg}>
							<Image src={production4} alt='' />
						</div>
						<h4 className={styles.itemTitle}>Крашеные фасады </h4>
						<p className={styles.itemText}>Mат, шелк, глянец</p>
					</li>
					<li className={styles.item}>
						<div className={styles.itemImg}>
							<Image src={production5} alt='' />
						</div>
						<h4 className={styles.itemTitle}>Нестандартные размеры и формы</h4>
						<p className={styles.itemText}>МДФ, эмаль матовая</p>
					</li>
					<li className={`${styles.item} ${styles.itemLast}`}>
						<div className={styles.itemImg}>
							<div className={styles.iconWrapper}>
								<svg
									width='20'
									height='20'
									viewBox='0 0 20 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.25402 15.3751C5.25402 15.5976 5.18804 15.8151 5.06442 16.0001C4.94081 16.1851 4.76511 16.3293 4.55954 16.4144C4.35397 16.4996 4.12777 16.5219 3.90954 16.4785C3.69131 16.435 3.49086 16.3279 3.33353 16.1706C3.17619 16.0132 3.06905 15.8128 3.02564 15.5946C2.98223 15.3763 3.00451 15.1501 3.08966 14.9446C3.1748 14.739 3.319 14.5633 3.504 14.4397C3.68901 14.3161 3.90652 14.2501 4.12902 14.2501C4.42739 14.2501 4.71354 14.3686 4.92452 14.5796C5.13549 14.7906 5.25402 15.0767 5.25402 15.3751ZM19.504 13.1429V18.0001C19.504 18.3979 19.346 18.7794 19.0647 19.0607C18.7834 19.342 18.4018 19.5001 18.004 19.5001H4.12902C3.87953 19.5002 3.63048 19.4789 3.38465 19.4363C2.31217 19.2407 1.36076 18.6284 0.738363 17.7333C0.115961 16.8383 -0.126819 15.7333 0.0630825 14.6598L2.40683 1.24132C2.44015 1.04743 2.51142 0.862028 2.61656 0.695747C2.72169 0.529465 2.85863 0.38558 3.01951 0.272346C3.18039 0.159113 3.36204 0.0787602 3.55405 0.0358981C3.74605 -0.00696392 3.94463 -0.0114917 4.1384 0.0225749L9.27027 0.937575C9.66075 1.00795 10.0074 1.23016 10.2345 1.55556C10.4615 1.88097 10.5503 2.28306 10.4815 2.67383L9.34902 9.14257L15.7062 6.84383C16.0789 6.70922 16.4896 6.72753 16.8488 6.89475C17.208 7.06197 17.4865 7.36451 17.6234 7.73632L19.4103 12.6273C19.4677 12.7933 19.4993 12.9672 19.504 13.1429ZM6.66027 15.8316L9.00402 2.4132L3.8909 1.50007L1.54715 14.9157C1.42478 15.5981 1.57732 16.3011 1.97146 16.8714C2.3656 17.4417 2.96933 17.833 3.6509 17.9598C3.98454 18.0196 4.32675 18.0125 4.65764 17.939C4.98854 17.8654 5.30151 17.7269 5.5784 17.5313C5.86235 17.3338 6.10423 17.0819 6.28995 16.7901C6.47568 16.4983 6.60156 16.1725 6.66027 15.8316ZM7.95215 16.7813L18.004 13.1354L16.2153 8.25008L9.0509 10.8469L8.13402 16.0894C8.09326 16.3248 8.03241 16.5563 7.95215 16.7813ZM18.004 14.7301L8.97964 18.0001H18.004V14.7301Z'
										fill='#1F1F1F'
									/>
								</svg>
							</div>
							<p className={styles.itemText}>
								Работаем по чертежам, эскизам и фотографиям
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Production
