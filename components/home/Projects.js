import { projects } from 'data/projects'

import styles from './projects.module.css'

export default function Projects() {
	return (
		<div className='margin'>
			<div className={styles['projects']}>
				<div className={styles['header-wrapper']}>
					<div className='flex items-center'>
						<img className={styles['header-image']} src='/images/projects.png' />
						<h3 className='word-heading'>Projects</h3>
					</div>
					<h2 className='mt-3 mb-4 smaller-h2'>Take a look at my works</h2>
					<p className='section-description'>Suspendisse tellus dictum urna ut netus</p>
				</div>
				<div className={styles['cards-grid']}>
					{projects.map((p, index) => (
						<ProjectCard
							key={index}
							title={p.title}
							description={p.description}
							tag={p.tag}
							link={p.link}
							imageUrl={p.imageUrl}
							buttonText={p.buttonText}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

function ProjectCard({ title, description, tag, link, imageUrl, buttonText }) {
	return (
		<div className={styles['project-card']}>
			<div
				className={styles['project-image']}
				style={{ backgroundImage: `url('${imageUrl}')` }}
			></div>
			<div className={styles['content-wrapper']}>
				<span className={styles['tag']}>{tag}</span>
				<h4 className={styles['card-title']}>{title}</h4>
				<p className={styles['card-description']}>{description} </p>
				<a href={link} rel='noreferrer noopener' target='_blank'>
					<button className={styles['button']}>
						{buttonText || 'Visit site'}
						<img src='/icons/arrow-right-up.svg' />
					</button>
				</a>
			</div>
		</div>
	)
}
