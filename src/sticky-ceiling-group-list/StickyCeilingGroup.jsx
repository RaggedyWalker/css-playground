import "./index.css";

export function StickyCeilingGroup({ label, list }) {
  return (
    <section className="sticky-group">
      <label>{label}</label>
      <div className="group-list">
        {list.map((item, index) => (
          <div className="item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
