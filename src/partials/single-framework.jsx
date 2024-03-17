import React from 'react';
import Component from './component';

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
                                <Component component={component} key={i} />
                            )
                        })}
                    </>
                }
            </div>
        </>
    );

}

export default SingleFramework;