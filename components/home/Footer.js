import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className='margin flex items-center justify-between'>
				<img src='/logo.svg' className={styles['logo']} />
				<span className={styles['copy']}>&copy; {new Date().getFullYear()} Emanuel Christo</span>
			</div>
		</footer>
	)
}
