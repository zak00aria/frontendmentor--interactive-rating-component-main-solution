import { useState } from 'react';
import icon_star from './images/icon-star.svg';
import illustration_thank_you from './images/illustration-thank-you.svg';
import './App.css';

function App() {
    let ratingValues = [1, 2, 3, 4, 5];
    let [rating, setRating] = useState('0');
    let [isSubmited, setIsSubmited] = useState(false);
    function handleClick(v) {
        setRating(v);
    }
    function handleSubmitClick() {
        setIsSubmited(true);
    }
    return (
        <>
            {/* Rating state start */}
            <div id="rating-state" className={`state-card${isSubmited ? " hidden" : ""}`}>
                <div style={{ backgroundImage: `url(${icon_star})` }} id="icon-star"></div>
                <div>
                    <h2>How did we do?</h2>

                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>

                <div id="rating-bar">
                    {
                        ratingValues.map((v, i) => {
                            return <div onClick={() => { handleClick(v) }} className={rating === v ? "active" : ""} key={i}>{v}</div>
                        })
                    }
                </div>

                <div id="btn-submit" onClick={() => { handleSubmitClick() }}>Submit</div>

            </div>
            {/* Rating state end */}

            {/* Thank you state start */}

            <div id="thank-you-state" className={`state-card${isSubmited ? "" : " hidden"}`}>
                <img src={illustration_thank_you} alt="" id="illustration-thank-you" />

                <p id="rating">
                    You selected&nbsp;{rating}&nbsp;out of 5
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
