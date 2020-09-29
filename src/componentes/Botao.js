import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Botao = ({
  texto,
  onClick,
  dataTestId,
  condition,
  show = true,
  renderLink = false,
  nameClass,
  type = 'button',
}) => {
  if (show) {
    return (
      <div>
        {!renderLink && (
          <button
            className={nameClass}
            data-testid={dataTestId}
            disabled={condition}
            onClick={onClick ? () => onClick() : null}
            type={type}
          >
            {texto}
          </button>
        )}
        {renderLink && (
          <Link data-testid="btn-next" to="/feedback" className="text-decoration-none">
            <button className="btn btn-lg btn-success btn-block" type="button">
              PRÓXIMA
            </button>
          </Link>
        )}
      </div>
    );
  }
  return null;
};

Botao.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string.isRequired,
  condition: PropTypes.bool,
  show: PropTypes.bool,
  renderLink: PropTypes.bool,
};

Botao.defaultProps = {
  onClick: null,
  condition: false,
  show: true,
  renderLink: false,
};

export default Botao;
