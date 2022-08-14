import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Country from './components/Country';
import CountryDetails from './components/CountryDetails';
import SearchIcon from '@mui/icons-material/Search';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [darkMode, setDarkMode] = useState('false');
    const [countries, setCountries] = useState([]);
    const countriesInputRef = useRef();
    const regionRef = useRef();

    const switchMode = () => {
        setDarkMode((prevState) => !prevState);
    };

    const fetchData = async () => {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();

        setCountries(data);
    };

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const searchCountries = () => {
        const searchValue = countriesInputRef.current.value;

        if(searchValue.trim()) {
            const fetchSearch = async () => {
                const response = await fetch(`https://restcountries.com/v2/name/${searchValue}`)
                const data = await response.json();

                setCountries(data)
            }

            try{
                fetchSearch()
            } catch(error) {
                console.log(error);
            }
        } else {
            fetchData();
        }
    }

    return (
        <div className={`app ${darkMode ? 'darkMode' : ''}`}>
            <Header onClick={switchMode} darkMode={darkMode} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app_body">
                            <div className="inputs">
                                <div
                                    className={`search_input ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    <SearchIcon />
                                    <input
                                        type="text"
                                        placeholder="Search for a country ..."
                                        ref={countriesInputRef}
                                        onChange={searchCountries}
                                    />
                                </div>
                                <div
                                    className={`select_region ${
                                        darkMode ? 'darkMode' : ''
                                    }`}
                                >
                                    <select ref={regionRef}>
                                        <option disabled selected hidden>
                                            Filter by Continent
                                        </option>
                                        <option>Africa</option>
                                        <option>Americas</option>
                                        <option>Asia</option>
                                        <option>Europe</option>
                                        <option>Oceania</option>
                                    </select>
                                </div>
                            </div>

                            <div className="countries">
                                {countries.map((country) => (
                                    <Country
                                        darkMode={darkMode}
                                        key={country.alpha3code}
                                        name={country.name}
                                        capital={country.capital}
                                        population={country.population}
                                        region={country.region}
                                        flag={country.flag}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                />
                <Route
                    path="country-details"
                    element={<CountryDetails darkMode={darkMode} />}
                />
            </Routes>
        </div>
    );
}

export default App;
