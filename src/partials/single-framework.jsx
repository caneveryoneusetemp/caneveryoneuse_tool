import React, {useEffect} from 'react';
import Component from './component';
import { Link, useParams } from "react-router-dom";

const SingleFramework = (props) => {

    const { selectedFramework } = props;
    const { framework, component } = useParams();

    useEffect(() => {

        if ( component ) {
            console.log( selectedFramework );
        }

    }, [framework, component, selectedFramework]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 my-5">
                    <div className="mb-4">
                        <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg> Back</Link>
                    </div>
                    <h2>{selectedFramework.name}</h2>
                </div>
            </div>
            <div className="row">
                { selectedFramework.components && selectedFramework.components.length > 0 &&
                    <>
                        {selectedFramework.components.map( (comp, i ) => {
                            return (
                                <Component component={comp} key={i} />
                            )
                        })}
                    </>
                }
            </div>
        </div>
    );

}

export default SingleFramework;