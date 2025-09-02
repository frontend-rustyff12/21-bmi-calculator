import LimitationCard from "./LimitationCard";
import { limitationsData } from "../data/data.js";
export default function Limitations() {
  return (
    <section className="limitations">
      <div className="limitations-text">
        <h2>Limitations of BMI</h2>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      {limitationsData.map((item, index) => (
        <LimitationCard
          title={item.title}
          img={item.img}
          description={item.description}
          key={index}
          index={index}
        />
      ))}
    </section>
  );
}
