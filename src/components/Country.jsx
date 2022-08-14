import React from 'react';

export default function Country({
    darkMode,
    flag,
    name,
    population,
    region,
    capital,
    showDetails,
    code,
}) {
    const showDetailsHandler = () => {
        showDetails(code);
    };

    return (
        <div
            className={`country ${darkMode ? 'darkMode' : ''}`}
            onClick={showDetailsHandler}
        >
            <div className="flag_container">
                <img src={flag} alt="Country flag" />
            </div>

            <div className="details">
                <h3 className="name">{name}</h3>
                <p>
                    Population:{' '}
                    <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {population}
                    </span>
                </p>
                <p>
                    Region:{' '}
                    <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {region}
                    </span>
                </p>
                <p>
                    Capital:{' '}
                    <span className={`values ${darkMode ? 'darkMode' : ''}`}>
                        {capital}
                    </span>
                </p>
            </div>
        </div>
    );
}
