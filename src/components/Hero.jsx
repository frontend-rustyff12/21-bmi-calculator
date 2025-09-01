import Calculator from "./Calculator";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <img src="/logo.svg" alt="Comapny logo" />
      <div className="hero-main">
        <div className="hero-text-content">
          <h1></h1>
          <p></p>
        </div>
      </div>
      <Calculator />
    </section>
  );
}
