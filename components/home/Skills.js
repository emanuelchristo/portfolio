import Button from 'components/common/Button'

import styles from './skills.module.css'

export default function Skills() {
	return (
		<div className='margin'>
			<div className={styles['skills']}>
				<div className={styles['header-wrapper']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src='/images/skills.png' />
						<h3 className='word-heading'>Skills</h3>
					</div>
					<h2 className='mt-3 mb-4'>Things I can do</h2>
					<p className='section-description'>Learning new things everyday...</p>
				</div>
				<div className={styles['cards-grid']}>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['frontend']}>
							<img src='/icons/star.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Frontend Development</span>
							<span className={styles['skill-description']}>Develop beautiful websites</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['backend']}>
							<img src='/icons/settings.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Backend Development</span>
							<span className={styles['skill-description']}>Develop &amp; deploy web servers</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['uiux']}>
							<img src='/icons/category.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>UI/UX Design</span>
							<span className={styles['skill-description']}>
								Plan &amp; design web/app interfaces
							</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['graphic-design']}>
							<img src='/icons/edit.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Graphic Design</span>
							<span className={styles['skill-description']}>Design posters, brochures etc.</span>
						</div>
					</div>
				</div>
				<button className='flex items-center justify-center gap-2 w-[180px] mx-auto mt-[64px]'>
					Projects <img src='/icons/right-arrow.svg' />
				</button>
			</div>
		</div>
	)
}
