export default function LimitationCard({ title, description, img, index }) {
  return (
    <article className={`limitations-card lim-card-${index + 1}`}>
      <div>
        <img src={img} alt="" />
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </article>
  );
}
