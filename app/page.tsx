import Preloader from "@/components/Preloader";
import ScrollEffects from "@/components/ScrollEffects";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Preloader />
			<ScrollEffects />
			<Header />
			<main>
				<Hero />
				<About />
				<Services />
				<Portfolio />
				{/* <Testimonials /> */}
				<Contact />
			</main>
			<Footer />
		</>
	);
}
