import React,  {useState} from 'react';
import frameworkData from '../json';

const Frameworks = () => {

    const [selectedFramework, setSelectedFramework] = useState({});

    return(
        <div className="container">

            {(!selectedFramework || ( selectedFramework && Object.keys(selectedFramework).length === 0)) &&
                <div className="row">
                    <div className="col-12 mt-5">
                        <h2>Frameworks</h2>

                        { frameworkData &&
                            <ul className="frameworks-list">
                                {frameworkData.map( (framework, i) => {
                                    return (
                                        <li key={i} onClick={() => setSelectedFramework(framework)} className="pointer text-decoration-hover">{framework.name}</li>
                                    );
                                })}
                            </ul>
                        }
                    </div>
                </div>
            }

            { selectedFramework && Object.keys(selectedFramework).length !== 0 &&
                <>
                    <div className="row">
                        <div className="col-12 my-5">
                            <div className="mb-4">
                                <span className="pointer text-decoration-hover go-back" onClick={() => setSelectedFramework({})}>Back</span>
                            </div>
                            <h2>{selectedFramework.name}</h2>
                        </div>
                    </div>
                    <div className="row">
                        { selectedFramework.components && selectedFramework.components.length > 0 &&
                            <>
                                {selectedFramework.components.map( (component, i ) => {
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
            }
            
        </div>
    );

}

export default Frameworks;