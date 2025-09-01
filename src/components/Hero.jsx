import Calculator from "./Calculator";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <img className="logo" src="/logo.svg" alt="Comapny logo" />
      <div className="hero-main">
        <div className="hero-text-content">
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <Calculator />
      </div>
    </section>
  );
}

{
  /* <div className="hero-background"></div> */
}
