import Head from "next/head";
import Image from "next/image";
import fpvimg from "../public/assets/images/benedikt-zinn-8ylosSJMIKQ-unsplash.jpg";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { MdAlternateEmail, MdPhonelinkRing } from "react-icons/md";

export default function Home() {
	return (
		<>
			<h1 className="title">FPV DRONE</h1>
			<h2 className="subtitle">. . . Strona w budowie . . .</h2>
			<p className="paragraph">
				Nasza firma zajmuje się profesionalnym filmowaniem dronami zarówno FPV
				jak i tradycyjnymi. <br /> Świadczymy również usługi audiowizualnej
				obróbki nagranych materiałów w specjalistycznych programach. <br />{" "}
				Posiadamy pełne uprawnienia do wykonywania lotów bezzałogowymi statkami
				powietrznymi we wszystkich kategoriach.
			</p>
			<section className="home">
				<Head>
					<title>Nazwa firmy</title>
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

					<a className="card-phone" href="tel:+48123456789">
						<MdPhonelinkRing /> +48 123 456 789
					</a>
					<a className="card-email" href="mailto:drony@gmail.com">
						<MdAlternateEmail /> adres email
					</a>
				</div>
				<div className="contact-card">
					<h3 className="card-title">Zobacz nasze ujęcia</h3>
					<a
						href="https://www.youtube.com/user/aswertyui"
						className="card-youtube-icon"
						target="_blank"
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
