import React from 'react';

export default function Country() {
    return (
        <div className="country">
            <div className="flag_container">
                <img src="https://st.depositphotos.com/29544566/56468/i/600/depositphotos_564687710-stock-photo-close-up-realistic-texture-fabric.jpg" alt="Country flag" />
            </div>

            <div className="details">
                <h3 className="name">Name</h3>
                <p>
                    Population: <span className="values">test</span>
                </p>
                <p>
                    Region: <span className="values">test</span>
                </p>
                <p>
                    Capital: <span className="values">test</span>
                </p>
            </div>
        </div>
    );
}
