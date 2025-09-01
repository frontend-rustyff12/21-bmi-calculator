export default function FactCard({ title, description, img }) {
  return (
    <article className="fact-card">
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
