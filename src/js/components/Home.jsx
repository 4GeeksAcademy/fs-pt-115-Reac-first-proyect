import  Personajes  from "./Personajes"
import React from 'react'

const Home = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">WoW</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Todos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Heal</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Tank</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Dps</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="p-5 mb-4 bg-light rounded-3">
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold justify-content-center">World Of Warcraft</h1>
					<p className="col-md-8 fs-4">
						La Guerra Interna es la última expansión de World of Warcraft, revelada el 3 de noviembre de 2023 y con lanzamiento previsto para el 26 de agosto de 2024. Esta es la décima expansión de WoW e introduce nuevas características como Excavaciones , Bandas de Guerra , árboles de talentos de héroe específicos de cada clase, la nuevaraza aliada terrestre , Skyriding y 4 nuevas zonas . Aquí tienes una recopilación de todas las novedades de la expansión La Guerra Interna.
					</p>

				</div>
			</div>
			<div className="row">
				<Personajes
					rol="DPS"
					funciones="Se encarga de hacer el daño"
					clases=" Algunas clases como Picaro, Cazador, Mago."
					imagen="https://i.pinimg.com/736x/aa/ef/97/aaef9722812628a2bb1500b2868b5b00.jpg"
				/>
				<Personajes
					rol="Heal"
					funciones="Se encarga de curar al equipo"
					clases="Algunas clases como Sacerdote , Chaman, Druida"
					imagen="https://c0.klipartz.com/pngpicture/655/150/gratis-png-world-of-warcraft-warcraft-iii-reinado-del-caos-mazmorras-y-dragones-arte-sacerdote-wow.png"
				/>
				<Personajes
					rol="Tanke"
					funciones="Se encarga de mantener el agro de los npc"
					clases="Algunas clases como Paladin, Guerrero, Caballero de la Muerte"
					imagen="https://i.pinimg.com/736x/1f/0b/c8/1f0bc8fa3a7c610734149fdc2abab940.jpg"
				/>
			</div>

		</>
	);
};

export default Home;