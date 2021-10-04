import s from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => (
    <>
    <span className={s.label}>{ label}</span>
    <span className={s.percentage}>{ percentage}%</span>
    </>
);