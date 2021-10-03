import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export default function StatisticsList({ stats }) {
  return (
      <ul className="stat-list">
        
          {stats.map(item => (
            <li className="item" key={item.id}>
          <StatisticsItem
            id={item.id}
            label={item.label}
            percentage={item.percentage}
            />
            </li>
        ))}
        
  </ul>
  )
};

 StatisticsList.propTypes = {
   stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  )
};
