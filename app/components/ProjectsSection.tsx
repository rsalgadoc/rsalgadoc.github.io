import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Ejemplo de mi trabajo</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Next.js & Spring Boot',
							description: 'Aplicación para el manejo de tareas, usando Next.js + Spring Boot, con Spring Security y JWT',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/task-app' },
								{ name: 'Demo (AWS EC2 Docker)', value: 'http://ec2-44-201-227-174.compute-1.amazonaws.com/frontend-next-app/' },
							],
							techDetails: ['Java 17', 'Spring Boot 3.4.6', 'Next.js 15', 'Base de datos H2', 'JPA', 'JWT (JSON Web Token)'],
							image: '/frontend-next-app.png',
						},
						{
							title: 'Angular & Spring Boot',
							description: 'Aplicación para el manejo de usuario(CRUD), usando Angular + Spring Boot, con Spring Security y JWT',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/users-app' },
								{ name: 'Demo (AWS S3 & EC2 Docker)', value: 'http://frontend-angular-admin.s3-website.us-east-2.amazonaws.com/' },
							],
							techDetails: ['Java 17', 'Spring Boot 3.4.5', 'Angular 19', 'Base de datos H2', 'JPA', 'JWT (JSON Web Token)'],
							image: '/angular-spring-boot.png',
						},
						{
							title: 'MongoDB, Express.js, Angular y Node.js',
							description: 'Todo List Application using MEAN Stack',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/todo-list-app-mean' },
								{ name: 'Demo (AWS S3 & EC2 Docker)', value: 'http://rsalgadoc-todo-list-app-mean.s3-website-us-east-1.amazonaws.com/' },
							],
							techDetails: ['MongoDB 8.0.9', 'Express.js 5.1.0', 'Angular 19', 'Node.js 22.15.0'],
							image: '/todo-list-app-mean.png',
						},
						{
							title: 'Angular Admin Template',
							description: 'Plantilla de panel de administración para proyecto Angular',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/dashboard-angular' },
								{ name: 'Demo (AWS S3 Bucket)', value: 'http://rsalgadoc-dashboard-angular.s3-website-us-east-1.amazonaws.com' },
							],
							techDetails: ['Angular 19'],
							image: '/dashboard-angular.png',
						},
						{
							title: 'Next.js Admin Dashboard - Xtreme Nextjs Admin',
							description: 'Plantilla de panel de administración para proyecto Next.js',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/dashboard-next' },
								{ name: 'Demo (AWS S3 Bucket)', value: 'http://rsalgadoc-dashboard-next.s3-website-us-east-1.amazonaws.com/' },
							],
							techDetails: ['Next.js 15'],
							image: '/dashboard-next.png',
						},
						{
							title: 'Next.js Admin Dashboard - Dash UI NextJS',
							description: 'Plantilla de panel de administración para proyecto Next.js',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/dashboard-next2' },
								{ name: 'Demo (AWS S3 Bucket)', value: 'http://rsalgadoc-dashboard-next2.s3-website-us-east-1.amazonaws.com/' },
							],
							techDetails: ['Next.js 15'],
							image: '/dashboard-next2.png',
						},
						{
							title: 'Next.js Financial Dashboard',
							description: 'Panel de administración para proyecto Next.js',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/financial-dashboard-next' },
								{ name: 'Demo (Vercel)', value: 'https://financial-dashboard-next-six.vercel.app/login' },
							],
							techDetails: ['Next.js 15'],
							image: '/financial-dashboard-next.png',
						},
						{
							title: 'API RESTful utilizando Spring Boot',
							description: 'Implementa un endpoint para la autenticación de usuarios utilizando JWT, Implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las tareas',
							links: [
								{ name: 'Código fuente', value: 'https://github.com/rsalgadoc/desafio-spring-boot' },
								{ name: 'Demo (AWS EC2 Docker)', value: 'http://ec2-44-201-227-174.compute-1.amazonaws.com/taskmanagement/backend/swagger-ui/index.html' },
							],
							techDetails: ['Java 17', 'Spring Boot 3.4.3', 'Base de datos H2', 'JPA', 'JWT (JSON Web Token)', 'OpenAPI y Swagger'],
							image: '/code.png',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>
									{/* Code Links */}
									<div className="flex flex-wrap justify-center gap-3">
										{project.links.map((link) => (
										<a
											href={link.value}
											target="_blank"
											rel="noopener noreferrer"
											key={link.name} 
											className="group relative inline-flex px-6 sm:px-8 py-3 bg-[#2D333B] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
										>
										  {link.name}
										</a>
										))}
									</div>
									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
