import React from "react";
import PropTypes from "prop-types";

// Обычный Компонент
const UserMeta = ({ name, email, phone }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>
                Tel.: {phone}, email: {email}
            </p>
            <div></div>
            <hr />
        </div>
    );
};

UserMeta.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default UserMeta;
