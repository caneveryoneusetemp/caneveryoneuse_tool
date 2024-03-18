import React, {useEffect, useState} from 'react';
import Component from './component';
import { Link, useParams } from "react-router-dom";

const SingleFramework = (props) => {

    const { selectedFramework } = props;
    const { framework, component } = useParams();
    const [selectedComponent, setSelectedComponent] = useState({});

    useEffect(() => {

        if ( component && selectedFramework.components ) {

            const found = selectedFramework.components.find(o => o.slug === component);

            if ( found ) {
                setSelectedComponent( found );
            }
        } else {
            setSelectedComponent({});
        }

    }, [framework, component, selectedFramework]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 my-5">
                    <div className="mb-4">
                        <Link to={`/${component ? framework : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg> Back
                        </Link>
                    </div>
                    <h2>{selectedFramework.name}</h2>
                </div>
            </div>
            
                { selectedFramework.components && selectedFramework.components.length > 0 &&
                    <>
                        { selectedComponent && Object.keys(selectedComponent).length !== 0 &&
                            <Component selectedComponent={selectedComponent} type="detailed" />
                        }

                        { (!selectedComponent || ( selectedComponent && Object.keys(selectedComponent).length === 0)) &&
                            <div className="row justify-content-center" style={{ gap: '1.5rem' }}>
                                {selectedFramework.components.map( (comp, i ) => {
                                    return (
                                        <Component selectedComponent={comp} key={i} type="sum" />
                                    )
                                })}
                            </div>
                        }
                        
                    </>
                }
            </div>
    );

}

export default SingleFramework;