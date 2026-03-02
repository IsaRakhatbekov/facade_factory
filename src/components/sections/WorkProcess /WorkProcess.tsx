import styles from './WorkProcess.module.scss'

const WorkProcess = () => {
	return (
		<section className={styles.WorkProcess}>
			<div className={`${styles.container} container`}>
				<div className={styles.upTitle}>просто и прозрачно</div>
				<h2 className={`${styles.title} def-title`}>Как мы работаем</h2>
				<h3 className={styles.subtitle}>
					Поняткий процесс — предсказуемый результат
				</h3>

				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.inner}>
							<span className={styles.step}>ШАГ 1</span>
							<div className={styles.stepContent}>
								<h4 className={styles.stepTitle}>
									Вы отправляете проект / размеры
								</h4>
								<p className={styles.stepText}>
									Чертёж, эскиз или фото — подойдёт любой формат.
								</p>
								<span className={styles.arrow}>
									<svg
										width='9'
										height='5'
										viewBox='0 0 9 5'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.499759 0.500122L4.18616 4.18652L7.87256 0.500122'
											stroke='white'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
							</div>
						</div>
						<span className={styles.stepTime}>1 час</span>
					</li>
					<li className={styles.item}>
						<div className={styles.inner}>
							<span className={styles.step}>ШАГ 2</span>
							<div className={styles.stepContent}>
								<h4 className={styles.stepTitle}>
									Мы рассчитываем стоимость и сроки
								</h4>
								<p className={styles.stepText}>
									Считаем быстро и фиксируем сроки до запуска.
								</p>
								<span className={styles.arrow}>
									<svg
										width='9'
										height='5'
										viewBox='0 0 9 5'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.499759 0.500122L4.18616 4.18652L7.87256 0.500122'
											stroke='white'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
							</div>
						</div>
						<span className={styles.stepTime}>1-2 часа</span>
					</li>
					<li className={styles.item}>
						<div className={styles.inner}>
							<span className={styles.step}>ШАГ 3</span>
							<div className={styles.stepContent}>
								<h4 className={styles.stepTitle}>
									Изготавливаем фасады на ЧПУ оборудовании
								</h4>
								<p className={styles.stepText}>
									Точная фрезеровка, чистые края, стабильная геометрия.
								</p>
								<span className={styles.arrow}>
									<svg
										width='9'
										height='5'
										viewBox='0 0 9 5'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.499759 0.500122L4.18616 4.18652L7.87256 0.500122'
											stroke='white'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
							</div>
						</div>
						<span className={styles.stepTime}>1 день</span>
					</li>
					<li className={styles.item}>
						<div className={styles.inner}>
							<span className={styles.step}>ШАГ 4</span>
							<div className={styles.stepContent}>
								<h4 className={styles.stepTitle}>
									Красим и контролируем качество
								</h4>
								<p className={styles.stepText}>
									Ровное покрытие и проверка на каждом этапе.
								</p>
								<span className={styles.arrow}>
									<svg
										width='9'
										height='5'
										viewBox='0 0 9 5'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.499759 0.500122L4.18616 4.18652L7.87256 0.500122'
											stroke='white'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								</span>
							</div>
						</div>
						<span className={styles.stepTime}>1 день</span>
					</li>
					<li className={styles.item}>
						<div className={styles.inner}>
							<span className={styles.step}>ШАГ 5</span>
							<div className={styles.stepContent}>
								<h4 className={styles.stepTitle}>
									Упаковываем и передаём заказ
								</h4>
								<p className={styles.stepText}>
									Надёжная упаковка, чтобы фасады доехали без повреждений.
								</p>
							</div>
						</div>
						<span className={styles.stepTime}>1 день</span>
					</li>
				</ul>

				<button className={styles.btn}>Рассчитать стоимость</button>
			</div>
		</section>
	)
}

export default WorkProcess
