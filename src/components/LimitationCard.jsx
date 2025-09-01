export default function LimitationCard({ title, description, img }) {
  return (
    <article className="limitations-card">
      <div>
        <img src={img} alt="" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </article>
  );
}
