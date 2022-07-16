import { socialLinks } from 'data/social-links'

import styles from './contact.module.css'

export default function Contact() {
	return (
		<div className='margin'>
			<div className={styles['languages']}>
				<div className={styles['header-wrapper']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src='/images/contact.png' />
						<h3 className='word-heading'>Contact</h3>
					</div>
					<h2 className='mt-3 mb-4'>Let&apos;s talk</h2>
					<p className='section-description'>Wanna hire me? Or got some questions?</p>
				</div>
				<a href='mailto:'>
					<div className='my-[64px] mx-auto flex items-center w-fit'>
						<div className={styles['email-icon-wrapper']}>
							<img src='/icons/email.svg' />
						</div>
						<span className={styles['email']}>hello@ecris.in</span>
					</div>
				</a>
				<div className={styles['social-wrapper']}>
					<a href={socialLinks.github} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['github']}>
							<img src='/icons/github.svg' />
						</div>
					</a>
					<a href={socialLinks.linkedin} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['linkedin']}>
							<img src='/icons/linkedin.svg' />
						</div>
					</a>
					<a href={socialLinks.instagram} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['instagram']}>
							<img src='/icons/instagram.svg' />
						</div>
					</a>
					<a href={socialLinks.dribbble} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['dribbble']}>
							<img src='/icons/dribbble.svg' />
						</div>
					</a>
					<a href={socialLinks.whatsapp} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['whatsapp']}>
							<img src='/icons/whatsapp.svg' />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
