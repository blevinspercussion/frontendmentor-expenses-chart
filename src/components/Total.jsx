import './components.css';

function Total () {
    return (
        <div className='total'>
            <div className='total-sub left'>
                <p>Total this month</p>
                <h1>$478.33</h1>
            </div>
            <div className='total-sub right'>
                <p><strong>+2.4%</strong></p>
                <p>from last month</p>
            </div>
        </div>
    )
}

export default Total;