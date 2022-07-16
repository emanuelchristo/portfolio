import { education } from 'data/education'

import styles from './education.module.css'

export default function Education() {
	return (
		<div className='margin'>
			<div className={styles['education']}>
				<div className={styles['header-wrapper']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src='/images/projects.png' />
						<h3 className='word-heading'>Education</h3>
					</div>
					<h2 className='mt-3 mb-4 smaller-h2'>Where I learned stuff</h2>
					<p className='section-description'>Apart from the internet of course!</p>
				</div>
				<div className={styles['cards-grid']}>
					{education.map((e, index) => (
						<EducationCard
							key={index}
							title={e.title}
							description={e.description}
							year={e.year}
							imageUrl={e.imageUrl}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

function EducationCard({ title, description, year, imageUrl }) {
	return (
		<div className={styles['education-card']}>
			<div className={styles['image-wrapper']}>
				<img src={imageUrl} />
			</div>
			<h4 className={styles['education-title']}>{title}</h4>
			<p className={styles['education-description']}>{description}</p>
			<span className={styles['education-year']}>{year}</span>
		</div>
	)
}
