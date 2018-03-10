import React, { Component } from 'react';
import Posts from './Posts/Posts';
import {Route} from 'react-router-dom';

import './Blog.css';
 

class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
               {/* <Route path="/" render={() => <h1>HOME</h1>}/>
               <Route exact path="/" render={() => <h1>HOME 2</h1>}/> */}

               <Route path="/" exact component={Posts}/>
                
            </div>
        );
    }
}

export default Blog;