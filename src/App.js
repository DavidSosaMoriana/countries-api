import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="app_body">
                <div className="inputs">
                    <div className="search_input">
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search for a country ..."
                        />
                    </div>
                    <div className="select_region">
                        <select>
                            <option>All</option>
                            <option>Africa</option>
                            <option>Americas</option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
