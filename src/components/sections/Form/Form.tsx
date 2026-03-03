import styles from './Form.module.scss'

const Form = () => {
	return (
		<section id="form" className={styles.Form}>
			<div className={`${styles.container} container`}>
				<h2 className={`${styles.title} def-title`}>Рассчитаем ваш заказ</h2>
				<p className={styles.text}>
					Оставьте заявку на расчет, и Мы свяжемся с вами и уточним детали, без
					навязчивых звонков. Подготовим для вас индивидуальное предложение с
					учетом всех пожеланий по дизайну, материалам и бюджету.
				</p>

				<form className={styles.form}>
					<div className={styles.formGroup}>
						<input
							className={styles.formInput}
							type='text'
							id='name'
							name='name'
							placeholder='Имя*'
						/>
					</div>
					<div className={styles.formGroup}>
						<input
							className={styles.formInput}
							type='email'
							id='email'
							name='email'
							placeholder='Телефон / WhatsApp*'
						/>
					</div>
					<div className={styles.formGroup}>
						<textarea
							className={`${styles.formTextarea} ${styles.formInput}`}
							id='message'
							name='message'
							placeholder='Комментарий: Что нужно просчитать?'
						></textarea>
					</div>

					<div className={styles.roleWrapper}>
						<h5 className={styles.roleTitle}>Кого вы представляете?*</h5>
						<div className={styles.roleInner}>
							<button className={`${styles.roleBtn} ${styles.roleBtnActive}`}>
								Производство
							</button>
							<button className={styles.roleBtn}>Дизайнер</button>
							<button className={styles.roleBtn}>Частный заказ</button>
						</div>
					</div>

					<p className={styles.agreementText}>
						Нажимая на кнопку, вы соглашаетесь на обработку персональных данных
					</p>
					<button className={styles.formBtn}>Оставить заявку</button>
				</form>
			</div>
		</section>
	)
}

export default Form
