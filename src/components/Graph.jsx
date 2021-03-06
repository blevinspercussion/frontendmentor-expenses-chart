import './components.css';
import {Chart} from 'chart.js';
import data from '../data.json';

function Graph () {

    return (
        <div className='graph'>
            <div className='data'>
                <div className='rect' id='rect1'></div>
                <p>mon</p>
            </div>
            <div className='data'>
                <div className='rect' id='rect2'></div>
                <p>tue</p>
            </div>
            <div className='data'>
                <div className='rect' id='rect3'></div>
                <p>wed</p>
            </div>
            <div className='data'>
                <div className='rect' id='rect4'></div>
                <p>thu</p>
            </div>
            <div className='data'>
                <div className='rect' id='rect5'></div>
                <p>fri</p>
            </div>
            <div className='data'>
                <div className='rect' id='rect6'></div>
                <p>sat</p>
            </div>
            <div className='data'>
                <div className='rect' id='rect7'></div>
                <p>sun</p>
            </div>

        </div>
    )
}


export default Graph;