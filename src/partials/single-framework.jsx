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
                        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg> Back</Link>
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