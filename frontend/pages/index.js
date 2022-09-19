import Head from "next/head";
import Image from "next/image";
import fpvimg from "../public/assets/images/benedikt-zinn-8ylosSJMIKQ-unsplash.jpg";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdAlternateEmail, MdPhonelinkRing } from "react-icons/md";

export default function Home() {
	return (
		<>
			<h1 className="title">PropWash - FPV Drone Movies</h1>
			<h2 className="subtitle">. . . Strona w budowie . . .</h2>
			<div className="container">
				<p className="paragraph">
					Nasza firma zajmuje się profesionalnym filmowaniem dronami zarówno FPV
					jak i tradycyjnymi.
				</p>
				<p className="paragraph">
					Świadczymy również usługi audiowizualnej obróbki nagranych materiałów
					w specjalistycznych programach.
				</p>
				<p className="paragraph">
					Posiadamy pełne uprawnienia do wykonywania lotów bezzałogowymi
					statkami powietrznymi we wszystkich kategoriach.
				</p>
			</div>

			<section className="home">
				<Head>
					<title>PropWash - FPV Drone Movies</title>
					<meta
						name="description"
						content="Wykonujemy profesionalne nagrania dronami FPV oraz tradycyjnymi. Oferujemy również profesionalną obróbkę audiowizualną nagrań"
					/>
					<meta
						name="keywords"
						content="fpv, nagrania fpv, nagrania dronem, filmy dronem, filmy z drona, nagrania z drona, filmy z drona fpv, filmy fpv, filmowanie fpv, usługi dronem, usługi filmowania dronem, Lublin, lubelskie, podkarpackie, Rzeszów, Kraków, mazowieckie, Warszawa "
					/>
					<meta name="robots" content="noindex,nofollow" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="contact-card">
					<h3 className="card-title">Kontakt</h3>

					<a className="card-phone" href="tel:+48662038866">
						<MdPhonelinkRing /> +48 662 038 866
					</a>
					<a className="card-email" href="mailto:propwash.info@gmail.com">
						<MdAlternateEmail /> propwash.info@gmail.com
					</a>
				</div>
				<div className="contact-card">
					<h3 className="card-title">
						Zobacz nasze <br /> ujęcia
					</h3>
					<a
						href="https://www.youtube.com/user/aswertyui"
						className="card-youtube-icon"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillYoutube />
					</a>
				</div>
				<div className="contact-card">
					<h3 className="card-title">Sprawdź naszego Facebooka</h3>
					<a href="" className="card-facebook-icon" target="_blank">
						<BsFacebook />
					</a>
				</div>
				{/* <Image
				src={fpvimg}
				alt="drone fpv photo"
				width="400px"
				height="100%"
				layout="responsive"
				objectFit="contain"
			/> */}
			</section>
		</>
	);
}
