import * as React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {Path} from "../../lib/path/Path";

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Screen</h1>
                <Link to='/about'><img src={Path.GetImagePath("penguin.png")} className="home-logo" alt="logo"/></Link>
            </div>
        );
    }
}

export default Home;
