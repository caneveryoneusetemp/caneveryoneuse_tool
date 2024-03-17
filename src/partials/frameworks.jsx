import React,  {useState} from 'react';
import frameworkData from '../json';
import SingleFramework from './single-framework';

const Frameworks = () => {

    const [selectedFramework, setSelectedFramework] = useState({});

    const handleFrameworkSelect = ( item ) => {
        setSelectedFramework(item);
    }

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
                <SingleFramework framework={selectedFramework} onSelect={(data) => handleFrameworkSelect(data)} />
            }
            
        </div>
    );

}

export default Frameworks;