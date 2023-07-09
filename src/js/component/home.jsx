import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import NavBar from "./NavBar";
import WarmWelcome from "./WarmWelcome";
import Card from "./Card";
import Footer from "./Footer";
//create your first component
const Home = () => {
	let cardInformation = [
		{
			image: "https://okdiario.com/look/img/2021/05/20/lapiz-labial-o-tinte-de-labios-como-elegir-segun-la-ocasion-655x368.jpg",
			title: "Lápiz labial",
			text: "Intensifica tu look con nuestro seductor lápiz labial rojo, una joya imprescindible en tu colección de maquillaje. "
		},
		{
			image: "https://elcomercio.pe/resizer/gwUnboC7wmt2i1pCjkuWijZGQlE=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/T52YVMGFBVHWXPMWNHT3FCEAVQ.png",
			title: "Rubor líquido",
			text: "¡Dale un toque de frescura y luminosidad a tus mejillas con nuestro increíble rubor líquido! Te dará aspecto radiante. "
		},
		{
			image: "https://down-mx.img.susercontent.com/file/1671ab6d73646eda53e4e0f8fc4b3bca_tn",
			title: "Crema de cejas",
			text: "Nuestra crema de cejas es el producto perfecto para obtener unas cejas definidas, esculpidas y de aspecto natural."
		},
		{
			image: "https://beautyblog.es/wp-content/uploads/falsies-lift-pestanas.jpg",
			title: "Máscara de pestañas",
			text: "Nuestra máscara de pestañas es el secreto para conseguir unas pestañas deslumbrantes y voluminosas."
		}
	]
	return (
		<>
			<NavBar/>
			<div className="container body-container">
			<WarmWelcome/>
			<div className="cards-container">
			{
				cardInformation.map((value,index)=>{
					return <Card image={value.image} title={value.title} text={value.text} key={index}/>
				})
			}
			</div>
			
			</div>
			<Footer/>
		</>
	);
};

export default Home;
