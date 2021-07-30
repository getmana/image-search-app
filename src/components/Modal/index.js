import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export const Modal = ({ onCloseModal, message }) => (
    <>
        {message && (
            <>
                <div className={styles.outer} onClick={onCloseModal} />
                <div className={styles.modal}>
                    <p>{message}</p>
                    <button className="active" onClick={onCloseModal}>
                        OK
                    </button>
                </div>
            </>
        )}
    </>
);

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    message: PropTypes.string,
};

Modal.defaultProps = {
    message: '',
};
