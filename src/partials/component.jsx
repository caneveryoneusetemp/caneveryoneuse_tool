import React from 'react';

const Component = (props) => {

    const { component } = props;

    return(
        <div className="col-12 col-lg-4 mb-4">
            <div className="card">
                <div className="card-header">{component.name}</div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button type="button" className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
}

export default Component;