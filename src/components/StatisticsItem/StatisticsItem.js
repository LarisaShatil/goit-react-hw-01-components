import PropTypes from 'prop-types';

export const StatisticsItem = ({ id, label, percentage }) => (
      <li className="item" >
    <span className="label">{ label}</span>
    <span className="percentage">{ percentage}%</span>
    </li>
);

StatisticsItem.propTypes = {
  id: PropTypes.string,
    label: PropTypes.string,
  percentage: PropTypes.number,
};