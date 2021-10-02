import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export default function Statistics({ items }) {
  console.log("items", items)
  return (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {items.map(item => (
          <StatisticsItem
            key={item.id}
            id={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
  </ul>
</section>
  );
};