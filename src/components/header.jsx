import React from 'react';

export class Header extends React.Component {
    render(){
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                <h5 className="my-0 mr-md-auto font-weight-normal">CodePad</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="/">Home</a>
                    <a className="p-2 text-dark" href="/new">New</a>
                </nav>
                <a className="btn btn-outline-primary" href="#">Make a donation</a>
            </div>
        );
    }
}