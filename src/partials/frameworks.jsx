import React from 'react';
import frameworkData from '../json';
// import SingleFramework from './single-framework';
import { Link } from "react-router-dom";

const Frameworks = () => {

    return(
        <div className="container">

            <div className="row">
                    <div className="col-12 mt-5">
                        <h2>Frameworks</h2>

                        { frameworkData &&
                            <ul className="frameworks-list">
                                {frameworkData.map( (framework, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={`/${framework.slug}`} className="text-dark">{framework.name}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                </div>

            {/* { selectedFramework && Object.keys(selectedFramework).length !== 0 &&
                <SingleFramework framework={selectedFramework} onSelect={(data) => handleFrameworkSelect(data)} />
            } */}
            
        </div>
    );

}

export default Frameworks;