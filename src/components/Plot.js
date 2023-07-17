import React, { useState } from "react";
import image1 from "../images/img1.jpg";
import image2 from "../images/img2.jpg";
import image3 from "../images/img3.jpg";
import image4 from "../images/img4.jpeg";
import image5 from "../images/img5.jpg";
import Header from "./Header";
import classes from "./Plot.module.css";

const Plot = () => {
  const items = [
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
  const [plots, setPlots] = useState(items);
  const [sortOrder, setSortOrder] = useState("none");

  const lowToHigh = () => {
    const sortedPlots = [...plots].sort((a, b) => a.price - b.price);
    setPlots(sortedPlots);
    setSortOrder("lowToHigh");
  };

  const highToLow = () => {
    const sortedPlots = [...plots].sort((a, b) => b.price - a.price);
    setPlots(sortedPlots);
    setSortOrder("highToLow");
  };

  const renderPlots = () => {
    if (sortOrder === "lowToHigh") {
      return plots.map((plot) => (
        <Header
          logo={plot.logo}
          name={plot.name}
          flat={plot.flat}
          nearby={plot.nearby}
          price={plot.price}
          key={plot.id}
        />
      ));
    } else if (sortOrder === "highToLow") {
      return plots.map((plot) => (
        <Header
          logo={plot.logo}
          name={plot.name}
          flat={plot.flat}
          nearby={plot.nearby}
          price={plot.price}
          key={plot.id}
        />
      ));
    } else {
      // Initial rendering without sorting
      return items.map((plot) => (
        <Header
          logo={plot.logo}
          name={plot.name}
          flat={plot.flat}
          nearby={plot.nearby}
          price={plot.price}
          key={plot.id}
        />
      ));
    }
  };

  return (
    <>
      <div className={classes.sort}>
        <p>Sort By: </p>
        <button onClick={lowToHigh}>Low to High</button>
        <button onClick={highToLow}>High to Low</button>
      </div>
      {renderPlots()}
    </>
  );
};

export default Plot;
