//import { t } from "i18next";
import { ArrowLeft, House } from "lucide-react";
import { MenuButton } from "../../components/buttons/menu-button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export function ServicesPage() {
	//Variavél navigate recebendo o useNavigate do react-router-dom
	const navigate = useNavigate();
	//Função homePage para navegar da blogPage para a homePage ao clicar no evento onclick{homePage}
	function homePage() {
		navigate("/"); //Navegar para a página home
	}

	//Esse código utiliza React para detectar quando o usuário rola a página mais de 50px e ajusta o estado isScrolled de acordo
	const [isScrolled, setIsScrolled] = useState(false);

	//O listener é removido no cleanup do useEffect quando o componente é desmontado para evitar vazamentos de memória
	useEffect(() => {
		const handleScroll = () => {
			//Função que verifica se window.scrollY é maior que 50px. Se sim, isScrolled é definido como true; caso contrário, false
			//Verifica se o usuário rolou mais de 50px da página
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		//significa que um "listener" (ouvinte) de evento está sendo registrado para o evento de rolagem ("scroll") da janela (window)
		window.addEventListener("scroll", handleScroll);

		// Limpar o event listener quando o componente for desmontado
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	return (
		<div>
			<div
				className={` h-20 bg-slate-500 text-slate-950 flex flex-wrap items-center justify-around font-medium text-xl ${
					isScrolled ? "-translate-y-10" : "translate-y-0"
				}`}
			>
				<div className="flex items-center justify-between">
					<div>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button className="flex items-center gap-3" onClick={homePage}>
							<ArrowLeft className="size-6" />
							<p className="text-2xl font-normal">
								<House />
							</p>
						</button>
					</div>
				</div>
					<MenuButton />
			</div>
			<div>
				
				<div className="flex flex-wrap gap-2 mb-44">
					<div>
						<div className="w-10/12 leading-loose flex flex-col gap-4 mx-auto">
							<h1 className="text-4xl flex items-start justify-between text-slate-950 py-2 mt-12 font-normal">
								Solicite nossos serviços
								<p>
									{/**<LanguageModal /> */}
								</p>
							</h1>
							<p className="text-lg text-slate-900">
								<figure className="flex flex-1 bg-slate-500 py-2 px-2">
									<div>
										<img className="rounded-2xl w-72" src="/service1.jpg" alt="" />
									</div>
									<div>
										<p>
											Controle de Pragas Urbanas
										</p>
										<p>
											Dedetização: Eliminação de insetos como baratas, formigas, cupins, moscas, mosquitos, pulgas e percevejos.
											Desratização: Controle de ratos, camundongos e outras espécies de roedores.
											Descupinização: Tratamento específico para combater cupins em móveis, estruturas de madeira e construções.
											{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
											<button>
												Solicitar
											</button>
										</p>
									</div>
								</figure>
							</p>
						</div>
					</div>
				</div>
			</div>
			
			<footer
				className={`queryFooterBlog flex py-3 gap-3 items-center flex-wrap justify-around fixed bottom-0 left-0 w-full transition-transform duration-500 ease-in-out bg-slate-500 ${
					isScrolled ? "translate-y-0" : "translate-y-full"
				}`}
			>

				{/** <ProfileModal /> */}
				<button type="button" className="flex items-center gap-3 text-slate-950" onClick={homePage}>
					<ArrowLeft className="size-6" />
					<p className="text-2xl font-normal">
						<House />
					</p>
				</button>
				
				<div className="flex gap-4">
				<MenuButton />
				
					{/**
					 <div className="w-px h-12 bg-buttonColor2"></div>
					*/}
					
				</div>
			</footer>
		</div>
	);
}