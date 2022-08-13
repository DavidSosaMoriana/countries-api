import React from 'react';
import WestIcon from '@mui/icons-material/West';

export default function CountryDetails() {
    return (
        <div className="country_details">
            <button className="back">
                <WestIcon />
                <p>Back</p>
            </button>

            <div className="country_details_body">
                <div className="img_container">
                    <img
                        src="https://st.depositphotos.com/29544566/56468/i/600/depositphotos_564687710-stock-photo-close-up-realistic-texture-fabric.jpg"
                        alt=""
                    />
                </div>
                <div className="info">
                    <h2>Name</h2>
                    <div className="info_container">
                        <div className="right_info">
                            <p>
                                Native Name:{' '}
                                <span className="values">test</span>
                            </p>
                            <p>
                                Population: <span className="values">test</span>
                            </p>
                            <p>
                                Region: <span className="values">test</span>
                            </p>
                            <p>
                                Sub Region: <span className="values">test</span>
                            </p>
                            <p>
                                Capital: <span className="values">test</span>
                            </p>
                        </div>
                        <div className="left_info">
                            <p>
                                Top Level Domain:{' '}
                                <span className="values">test</span>
                            </p>
                            <p>
                                Currencies: <span className="values">test</span>
                            </p>
                            <p>
                                Languages: <span className="values">test</span>
                            </p>
                        </div>
                    </div>
                    Border Countries:
                    <div className="border_country">
                        <p>test</p>
                    </div>
                    <div className="border_country">
                        <p>test</p>
                    </div>
                    <div className="border_country">
                        <p>test</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
