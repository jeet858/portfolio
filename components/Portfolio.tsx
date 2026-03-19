"use client";

import projects from "@/constants/project";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


interface project {
    id: number;
    category: string;
    icon: string;
    name: string;
    tech: string;
    title: string;
    catLabel: string;
    colorClass: string;
    link: string;
}
const filters = [
	{ value: "all", label: "All" },
	{ value: "web", label: "Web Development" },
	{ value: "app", label: "App Development" },
	{ value: 'Others', label: 'Others' },
];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("all");
	const [filtered, setFiltered] = useState(projects);
	const [openProject, setOpenProject] = useState<project | null>(null);
	

	useEffect(()=>{
		const filtered = projects.filter((p) => activeFilter === "all" || p.category === activeFilter);
		setFiltered(filtered);

		// Re-observe the new elements so they get the 'active' class for the fade-up animation
		setTimeout(() => {
			const fadeElements = document.querySelectorAll('.portfolio-item.fade-up');
			const observer = new IntersectionObserver(
				(entries, observerInstance) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('active');
							observerInstance.unobserve(entry.target);
						}
					});
				},
				{ threshold: 0.1 }
			);
			fadeElements.forEach((el) => observer.observe(el));
		}, 50);
	},[activeFilter])

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
								{/* <button onClick={() => setOpenProject(project)} className="portfolio-link mb-4!">
									View Details <i className="fas fa-arrow-right"></i>
								</button> */}
								<Link href={project.link} target="_blank" className="portfolio-link">
									View Project <i className="fas fa-arrow-right"></i>
								</Link>
							</div>
							{openProject && <ProjectCard project={project} />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
