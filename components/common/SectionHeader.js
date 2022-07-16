import styles from './section-header.module.css'

export default function SectionHeader({ imageUrl, tag, title, description, type = 'center' }) {
	return (
		<>
			{type === 'center' && (
				<div className={styles['header-wrapper'] + ' ' + styles['center']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src={imageUrl} />
						<h3 className='word-heading'>{tag}</h3>
					</div>
					<h2 className='mt-3 mb-4'>{title}</h2>
					<p className='section-description'>{description}</p>
				</div>
			)}

			{type === 'left' && (
				<div className={styles['header-wrapper']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src={imageUrl} />
						<h3 className='word-heading'>{tag}</h3>
					</div>
					<h2 className='mt-3 mb-4 smaller-h2'>{title}</h2>
					<p className='section-description'>{description}</p>
				</div>
			)}
		</>
	)
}
