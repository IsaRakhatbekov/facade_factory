import Header from '../components/Header/Header'
import AboutUs from '../components/sections/AboutUs/AboutUs'
import Hero from '../components/sections/Hero/Hero'

export default function Home() {
	return (
		<div className='page-layout'>
			<Header />
			<main>
				<Hero />
				<AboutUs />
				{/* <OurClients /> */}
				{/* <Production /> */}
				{/* <WorkProcess /> */}
				{/* <WhyWe /> */}
				{/* <ReadyProjects /> */}
				{/* <SpecialConditions /> */}
				{/* <Form /> */}
			</main>
			{/* <Footer /> */}
		</div>
	)
}
