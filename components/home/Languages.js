import styles from './languages.module.css'

export default function Langauages() {
	return (
		<div className='margin'>
			<div className={styles['languages']}>
				<div className={styles['header-wrapper']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src='/images/language.png' />
						<h3 className='word-heading'>Languages</h3>
					</div>
					<h2 className='mt-3 mb-4'>I speak and understand</h2>
					<p className='section-description'>Congue vulputate ut consequat nunc elementum amet</p>
				</div>
				<div className={styles['cards-grid']}>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['english']}>
							<img src='/icons/english.svg' />
						</div>
						<span className={styles['language-title']}>English</span>
						<span className={styles['language-description']}>Fluent</span>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['malayalam']}>
							<img src='/icons/malayalam.svg' />
						</div>
						<span className={styles['language-title']}>Malayalam</span>
						<span className={styles['language-description']}>Native</span>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['hindi']}>
							<img src='/icons/hindi.svg' />
						</div>
						<span className={styles['language-title']}>Hindi</span>
						<span className={styles['language-description']}>Limited</span>
					</div>
				</div>
			</div>
		</div>
	)
}
