import React from 'react';

const SingleFramework = (props) => {

    const { framework, onSelect} = props;

    return(
        <>
            <div className="row">
                <div className="col-12 my-5">
                    <div className="mb-4">
                        <span className="pointer text-decoration-hover go-back" onClick={() => onSelect({})}>Back</span>
                    </div>
                    <h2>{framework.name}</h2>
                </div>
            </div>
            <div className="row">
                { framework.components && framework.components.length > 0 &&
                    <>
                        {framework.components.map( (component, i ) => {
                            return (
                                <div className="col-12 col-lg-4 mb-4" key={i}>
                                    <div className="card">
                                        <div className="card-header">{component.name}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">Special title treatment</h5>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                            <button type="button" className="btn btn-primary">Go somewhere</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        </>
    );

}

export default SingleFramework;