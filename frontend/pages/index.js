import Head from "next/head";
import Image from "next/image";
import fpvimg from "../public/assets/images/benedikt-zinn-8ylosSJMIKQ-unsplash.jpg";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TbLanguage } from "react-icons/tb";
import {
	MdAlternateEmail,
	MdPhonelinkRing,
	MdConstruction,
} from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { useRouter } from "next/router";
import en from "../lang/en";
import pl from "../lang/pl";

export default function Home() {
	//i18n language change
	const router = useRouter();
	const { locale } = router;
	const tl = locale === "pl" ? pl : en;

	//function to change language depend on value from html select field
	const changeLang = (e) => {
		const locale = e.target.value;
		router.push("/", "/", { locale });
	};

	return (
		<>
			<div className="lang-select">
				<label htmlFor="lang">
					<TbLanguage />
				</label>
				<select onChange={changeLang} defaultValue={locale} name="lang">
					<option value="pl">PL</option>
					<option value="en">EN</option>
				</select>
			</div>

			<h1 className="title">
				PropWash - FPV Drone Movies
				<br />
				<TbDrone style={{ fontSize: "5rem", marginTop: "1rem" }} />
			</h1>
			<h2 className="subtitle">
				{tl.subtitle}
				<MdConstruction />
			</h2>
			<div className="container">
				<p className="paragraph">{tl.paragraph1}</p>
				<p className="paragraph">{tl.paragraph2}</p>
				<p className="paragraph">{tl.paragraph3}</p>
			</div>

			<section className="home">
				{/* ------------  HEAD SECTION WITH META -------------*/}
				<Head>
					<title>PropWash - FPV Drone Movies</title>
					<meta name="description" content={tl.metaDescription} />
					<meta name="keywords" content={tl.metaKeywords} />
					<meta name="robots" content="noindex,nofollow" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className="contact-card">
					<h3 className="card-title">{tl.contact}</h3>

					<a className="card-phone" href="tel:+48662038866">
						<MdPhonelinkRing /> +48 662 038 866
					</a>
					<a className="card-email" href="mailto:propwash.info@gmail.com">
						<MdAlternateEmail /> propwash.info@gmail.com
					</a>
				</div>
				<div className="contact-card">
					<h3 className="card-title">{tl.youtube}</h3>
					<a
						href="https://www.youtube.com/user/aswertyui"
						className="card-youtube-icon"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillYoutube />
					</a>
				</div>
				{/* <div className="contact-card">
					<h3 className="card-title">Sprawdź naszego Facebooka</h3>
					<a href="" className="card-facebook-icon" target="_blank">
						<BsFacebook />
					</a>
				</div> */}
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
