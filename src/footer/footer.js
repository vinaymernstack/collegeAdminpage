import React, { Component } from 'react'

class footer extends Component{
    componentDidMount(){
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
        window.history.go(1);
    };
       }
    render(){
        return(
            <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                2016 - 2019 &copy;
                            </div>
                        </div>
                    </div>
                </footer>
        )
    }
}

export default footer;