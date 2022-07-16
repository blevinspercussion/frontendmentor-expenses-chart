import './components.css';
import logo from '../logo.svg'

function MyBalance () {
    return (
        <div className='my-balance'>
            <div className='mybalance-sub'>
                <h5>My Balance</h5>
                <h2>$921.48</h2>
            </div>
            
            <div className='logo'>
                <img src={logo} />
            </div>
        </div>
    )
}

export default MyBalance;