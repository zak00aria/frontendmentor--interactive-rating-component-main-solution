import { useState } from 'react';
import icon_star from './images/icon-star.svg';
import illustration_thank_you from './images/illustration-thank-you.svg';
import './App.css';

function App() {
    let ratingValues = [1, 2, 3, 4, 5];
    let { rating, setRating } = useState('0');
    return (
        <>
            {/* Rating state start */}
            <div id="rating-state" className="state-card">
                <div style={{ backgroundImage: `url(${icon_star})` }} id="icon-star"></div>
                <div>
                    <h2>How did we do?</h2>

                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>

                <div id="rating-bar">
                    {
                        ratingValues.map((v, i) => {
                            return <div className={rating === v ? "active" : ""} key={i}>{v}</div>
                        })
                    }
                </div>

                <div id="btn-submit">Submit</div>

            </div>
            {/* Rating state end */}

            {/* Thank you state start */}

            <div id="thank-you-state" className="state-card">
                <img src={illustration_thank_you} />

                <p>
                    You selected&nbsp;<span>{rating}</span>&nbsp;out of 5
                </p>

                <h2>Thank you!</h2>

                <p>We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!</p>
            </div>
            {/* Thank you state end */}
        </>
    );
}

export default App;
