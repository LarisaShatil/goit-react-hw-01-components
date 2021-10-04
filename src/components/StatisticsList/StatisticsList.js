import PropTypes from 'prop-types';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import s from './StatisticsList.module.css';

export default function StatisticsList({ stats }) {
  return (
      <ul className={s.statList}>
        
          {stats.map(item => (
            <li className={s.item} key={item.id}>
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
