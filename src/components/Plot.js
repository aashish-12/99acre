import React from "react";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpeg";
import image5 from "../images/img5.jpg";
import Header from "./Header";

const plots = [
  {
    logo: image1,
    name: "Godrej Prima",
    flat: "1, 2, 3, 4 BHK Apartment in Okhla, South Delhi",
    nearby: "Okhla Estate Marg",
    price: 3.37,
    id: 1,
  },
  {
    logo: image2,
    name: "Godrej Prima",
    flat: "1, 2, 3, 4 BHK Apartment in Okhla, South Delhi",
    nearby: "Okhla Estate Marg",
    price: 3.24,
    id: 2,
  },
  {
    logo: image3,
    name: "Godrej Prima",
    flat: "1, 2, 3, 4 BHK Apartment in Okhla, South Delhi",
    nearby: "Okhla Estate Marg",
    price: 2.34,
    id: 3,
  },
  {
    logo: image4,
    name: "Godrej Prima",
    flat: "1, 2, 3, 4 BHK Apartment in Okhla, South Delhi",
    nearby: "Okhla Estate Marg",
    price: 4.5,
    id: 4,
  },
  {
    logo: image5,
    name: "Godrej Prima1",
    flat: "1, 2, 3, 4 BHK Apartment in Okhla, South Delhi",
    nearby: "Okhla Estate Marg",
    price: 5.0,
    id: 5,
  },
];
const Plot = () => {
  const items = plots.map((plot, index) => (
    <Header
      logo={plot.logo}
      name={plot.name}
      flat={plot.flat}
      nearby={plot.nearby}
      price={plot.price}
      key={plot.id}
    />
  ));
  return <>{items}</>;
};

export default Plot;
