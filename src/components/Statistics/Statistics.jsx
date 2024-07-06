
import PropTypes from 'prop-types';
import css from './Statistics.module.css';



    const Statistics = ({ title, stats }) => (
        <section className={css.statistics}>
          <h2 className={css.title}>{title}</h2>
      
          <ul className={css.stats_list}>
            {stats.map(stat => (
              <li className={css.item} key={stats.id}>
                <span className={css.label}>{stats.label}</span>
                <span className={css.percentage}>{stats.percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      );


  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.object,
  };
//   export default Statistics;
  







