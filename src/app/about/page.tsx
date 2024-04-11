import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function AboutPage() {
	return (
		<div className='bg-zinc-950 w-full flex flex-col justify-center items-center overflow-hidden'>
			<Header />
			<About />
			<Footer />
		</div>
	)
}
