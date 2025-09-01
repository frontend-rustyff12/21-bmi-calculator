import FactCard from "./FactCard";
import { factsData } from "../data/data";

export default function Facts() {
  return (
    <section className="facts-section">
      {factsData.map((item, index) => (
        <FactCard
          title={item.title}
          description={item.description}
          key={index}
          img={item.img}
        />
      ))}
    </section>
  );
}
