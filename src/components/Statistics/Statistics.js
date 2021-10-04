import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <StatisticsList stats={ stats}/>
</section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};