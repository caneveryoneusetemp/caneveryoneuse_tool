import React from 'react';
import Component from './component';
import { Link } from "react-router-dom";

const SingleFramework = (props) => {

    const { framework } = props;

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 my-5">
                    <div className="mb-4">
                        <Link to="/">Go back</Link>
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
        </div>
    );

}

export default SingleFramework;