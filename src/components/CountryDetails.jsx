import React from 'react';
import WestIcon from '@mui/icons-material/West';
import { useParams, useNavigate } from 'react-router-dom';

export default function CountryDetails({ darkMode, countries, refetch }) {
    const params = useParams();
    const navigate = useNavigate();

    let name;
    let flag;
    let nativeName;
    let population;
    let region;
    let subregion;
    let capital;
    let topLevelDomain;
    let currencies = [];
    let languages = [];
    let borders = [];

    countries.forEach((country) => {
        if (country.alpha3Code === params.countryCode) {
            name = country.name;
            flag = country.flag;
            nativeName = country.nativeName;
            population = country.population;
            region = country.region;
            subregion = country.subregion;
            capital = country.capital;
            topLevelDomain = country.topLevelDomain;

            country.currencies.forEach((currency) => {
                currencies.push(currency.name);
            });

            country.languages.forEach((language) => {
                languages.push(language.name);
            });

            if (country.borders !== undefined) {
                country.borders.forEach((border) => {
                    borders.push(border);
                });
            } else {
                console.log(country);
            }
        }
    });

    const Back = () => {
        navigate('/');
    };

    return (
        <div className="country_details">
            <button
                className={`back ${darkMode ? 'darkMode' : ''}`}
                onClick={Back}
            >
                <WestIcon />
                <p>Back</p>
            </button>

            <div className="country_details_body">
                <div className="img_container">
                    <img src={flag} alt="" />
                </div>
                <div className="info">
                    <h2>{name}</h2>
                    <div className="info_container">
                        <div className="right_info">
                            <p>
                                Native Name:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {nativeName}
                                </span>
                            </p>
                            <p>
                                Population:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {population}
                                </span>
                            </p>
                            <p>
                                Region:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {region}
                                </span>
                            </p>
                            <p>
                                Sub Region:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {subregion}
                                </span>
                            </p>
                            <p>
                                Capital:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {capital}
                                </span>
                            </p>
                        </div>
                        <div className="left_info">
                            <p>
                                Top Level Domain:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {topLevelDomain}
                                </span>
                            </p>
                            <p>
                                Currencies:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {currencies}
                                </span>
                            </p>
                            <p>
                                Languages:{' '}
                                <span
                                    className={`values ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    {languages}
                                </span>
                            </p>
                        </div>
                    </div>
                    Border Countries:
                    {borders.length ? (
                        borders.map((border) => (
                            <div
                                className={`border_country ${
                                    darkMode ? 'darkMode' : ''
                                }`}
                                onClick={() => {
                                    refetch();
                                    navigate(`/${border}`);
                                }}
                            >
                                {border}
                            </div>
                        ))
                    ) : (
                        <div className={`values ${darkMode ? 'darkMode' : ''}`}>
                            <p>No borders ...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
