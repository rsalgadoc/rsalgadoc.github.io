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
							title: 'API RESTful utilizando Spring Boot',
							description: 'Implementa un endpoint para la autenticación de usuarios utilizando JWT, Implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las tareas',
							techDetails: ['Java 17', 'Spring Boot 3.4', 'base de datos H2', 'JPA', 'JWT (JSON Web Token)', 'OpenAPI y Swagger'],
							image: '/code.jpg',
						},
						{
							title: 'Real-time Collaboration Platform',
							description: 'WebSocket-based platform with conflict resolution',
							metrics: {
								performance: 95,
								accessibility: 98,
								seo: 100,
							},
							techDetails: ['WebSocket optimization', 'CRDT implementation', 'Custom state management', 'WebRTC integration'],
							image: '/code.jpg',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

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
