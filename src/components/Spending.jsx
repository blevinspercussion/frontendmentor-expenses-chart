import './components.css';
import Graph from './Graph';
import Total from './Total';

function Spending () {
    return (
        <div className='spending'>
            <h2>Spending - Last 7 days</h2>
            <Graph />
            <hr />
            <div className='total-div'>
                <Total />
            </div>
        </div>
    )
}

export default Spending;