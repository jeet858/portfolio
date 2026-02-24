"use client";

import { useState } from "react";

const projects = [
	{
		id: 1,
		category: "web",
		icon: "fas fa-globe",
		name: "Quranium Main Website",
		tech: "Next.js, Tailwind CSS, Axios, SEO",
		title: "Quranium Main Website",
		catLabel: "Web Development",
		colorClass: "portfolio-item-1",
	},
	{
		id: 2,
		category: "web",
		icon: "fas fa-search",
		name: "QRNScan Blockchain Explorer",
		tech: "Next.js, Tailwind CSS, Axios, Blockchain APIs",
		title: "QRNScan",
		catLabel: "Web Development",
		colorClass: "portfolio-item-2",
	},
	{
		id: 3,
		category: "web",
		icon: "fas fa-share-alt",
		name: "SocialFi Platform",
		tech: "Next.js, Tailwind CSS, Axios",
		title: "SocialFi",
		catLabel: "Web Development",
		colorClass: "portfolio-item-3",
	},
	{
		id: 4,
		category: "web",
		icon: "fas fa-wallet",
		name: "Q-Safe Wallet Extension",
		tech: "Vue.js, Web3, Smart Contracts",
		title: "Q-Safe Wallet",
		catLabel: "Web3 Development",
		colorClass: "portfolio-item-4",
	},
	{
		id: 5,
		category: "app",
		icon: "fas fa-mobile-alt",
		name: "QINFI Super App",
		tech: "React Native, NestJS, TypeORM, Blockchain RPC",
		title: "QINFI",
		catLabel: "App Development",
		colorClass: "portfolio-item-5",
	},
	{
		id: 6,
		category: "app",
		icon: "fas fa-tools",
		name: "Subidha Services App",
		tech: "Flutter, Razorpay, Authentication",
		title: "Subidha",
		catLabel: "App Development",
		colorClass: "portfolio-item-6",
	},
	{
		id: 7,
		category: "app",
		icon: "fas fa-comments",
		name: "Lyk Social Media App",
		tech: "Flutter, Cross-Platform UI",
		title: "Lyk",
		catLabel: "App Development",
		colorClass: "portfolio-item-7",
	},
	{
		id: 8,
		category: "app",
		icon: "fas fa-taxi",
		name: "GoRide Cab Booking App",
		tech: "Flutter, Real-Time Booking",
		title: "GoRide",
		catLabel: "App Development",
		colorClass: "portfolio-item-8",
	},
	{
		id: 9,
		category: "web",
		icon: "fas fa-file-medical",
		name: "Prescription Generator Website",
		tech: "Next.js, TypeScript, Tailwind CSS, tRPC",
		title: "Prescription Generator",
		catLabel: "Web Development",
		colorClass: "portfolio-item-9",
	},
];

const filters = [
	{ value: "all", label: "All" },
	{ value: "web", label: "Web Development" },
	{ value: "app", label: "App Development" },
	// { value: 'ui', label: 'UI/UX Design' },
];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("all");

	const filtered = projects.filter((p) => activeFilter === "all" || p.category === activeFilter);

	return (
		<section className="portfolio section" id="portfolio">
			<div className="container">
				<h2 className="section-title fade-up">My Portfolio</h2>
				<p className="section-subtitle fade-up">Explore my recent projects showcasing creativity, technical expertise, and problem-solving skills</p>
				<div className="portfolio-filter fade-up">
					{filters.map((f) => (
						<button key={f.value} className={`filter-btn${activeFilter === f.value ? " active" : ""}`} onClick={() => setActiveFilter(f.value)}>
							{f.label}
						</button>
					))}
				</div>
				<div className="portfolio-grid">
					{filtered.map((project) => (
						<div key={project.id} className="portfolio-item fade-up">
							<div className={project.colorClass}>
								<div className="portfolio-content">
									<i className={`${project.icon} portfolio-icon`}></i>
									<h3 className="portfolio-name">{project.name}</h3>
									<p className="portfolio-tech">{project.tech}</p>
								</div>
							</div>
							<div className="portfolio-overlay">
								<h3 className="portfolio-title">{project.title}</h3>
								<p className="portfolio-category">{project.catLabel}</p>
								<a href="#" className="portfolio-link">
									View Project <i className="fas fa-arrow-right"></i>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
