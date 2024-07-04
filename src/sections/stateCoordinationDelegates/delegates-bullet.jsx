import PropTypes from 'prop-types';


export default function DelegatesBullet({align = 'left', title, description}) {
  return (
    <div className={`delegate__bullet-container ${align}`}>
      <div className="custom-bullets">
        <ul>
          <li>{title}</li>
        </ul>
      </div>
      <span className="delegate__name">{description}</span>
    </div>
  );
}

DelegatesBullet.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  align: PropTypes.string
};