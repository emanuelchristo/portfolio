import Head from 'next/head'
import Skills from 'components/home/Skills'
import Projects from 'components/home/Projects'
import Education from 'components/home/Education'
import Langauages from 'components/home/Languages'
import Contact from 'components/home/Contact'
import Footer from 'components/home/Footer'
import Coding from 'components/home/Coding'

export default function Home() {
	return (
		<>
			<Head>
				<title>Emanuel Christo - Full Stack Developer, UI/UX Designer &amp; Graphic Designer</title>
				<meta
					name='description'
					content='Emanuel Christo - Full Stack Developer, UI/UX Designer &amp; Graphic Designer'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='pt-[120px] flex flex-col gap-[220px] md:gap-[160px]'>
				<Skills />
				<Coding />
				<Projects />
				<Education />
				<Langauages />
				<Contact />
				<Footer />
			</div>
		</>
	)
}
