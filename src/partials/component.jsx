import React, {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";

const Component = (props) => {

    const { selectedComponent, type } = props;
    const { framework, component } = useParams();
    const [errorCountTotal, setErrorCountTotal] = useState(0);
    const [errors, setErrors] = useState([]);
    const [requirements, setRequirements] = useState([]);

    const calculateErrors = (component) => {

        let count = 0;

        if (!component) return count;

        if (component.Axe && component.Axe.total_issues) {
            count = count + parseInt( component.Axe.total_issues, 10 );
        }

        if (component.manual_testing && component.manual_testing.total_issues) {
            count = count + parseInt(component.manual_testing.total_issues, 10);
        }

        return count;
    }

    useEffect(() => { 

        const errorCount = calculateErrors(selectedComponent);

        setErrorCountTotal( errorCount );

    }, [selectedComponent]);

    useEffect(() => { 

        if ( type === 'sum' ) return;

        let allErrors = [];
        let allRequirements = [];

        if ( selectedComponent.Axe ) {

            if ( selectedComponent.Axe?.errors.length > 0 ) {
                allErrors = allErrors.concat( selectedComponent.Axe.errors );
            }

            if ( selectedComponent.Axe.requirements &&  selectedComponent.Axe.requirements.length > 0 ) {
                allRequirements = allRequirements.concat( selectedComponent.Axe?.requirements );
            }

        }

        if ( selectedComponent.manual_testing ) {
            
            if ( selectedComponent.manual_testing.errors.length > 0 ) {
                allErrors = allErrors.concat( selectedComponent.manual_testing.errors );
            }

            if ( selectedComponent.manual_testing.requirements && selectedComponent.manual_testing?.requirements.length > 0 ) {
                allRequirements = allRequirements.concat( selectedComponent.manual_testing?.requirements );
            }
            
        }

        setErrors( allErrors );
        setRequirements( allRequirements );

     }, [selectedComponent, type]);

    const retrieveBgColor = (count) => {
        if (count > 3) return 'bg-danger';
        return count > 0 ? 'bg-warning' : 'bg-success';
    }

    return(
        <>
            { (!type || type === 'sum') &&
                <div className={`component-card ${retrieveBgColor(errorCountTotal)}`}>
                    <div className="component-card-header">{selectedComponent.name}</div>
                    <div className="component-card-body">
                        <h5 className="component-card-title">
                            <b>{errorCountTotal > 0 ? errorCountTotal : 'OK'}</b>
                            {errorCountTotal > 0 &&
                                <a href={selectedComponent.preview_link} target="_blank" rel="noreferrer" aria-label="view errors"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#fa2c2c" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></a>
                            }
                        </h5>
        
                        <div className="component-card-footer d-flex flex-column">
                            {selectedComponent.preview_link && selectedComponent.preview_link.length > 0 &&
                                <a href={selectedComponent.preview_link} target="_blank" rel="noreferrer" aria-label="open component example">Preview <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg></a>
                            }
        
                            { framework && !component && errorCountTotal > 0 &&
                                <Link to={`/${framework}/${selectedComponent.slug}/`} className="btn btn-secondary">Check errors</Link>
                            }
                        </div>
                    </div>
                </div>
            }

            {type && type === 'detailed' &&
                <div className="component-errors">

                    {errors && errors.length > 0 &&
                        <div className="row">
                            <div className="col-12">
                                <h3>Found errors of {selectedComponent.name} component</h3>

                                <div className="mt-4">
                                    {errors.map((error, i) => {
                                        return(
                                            <div className="error-item border-bottom mb-4" key={i}>
                                                <div className="row mb-2">
                                                    <div className="col-4">
                                                        <span>Error Type: </span>
                                                    </div>
                                                    <div className="col-8">
                                                        <span>{error.error_type}</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">
                                                     <span>Error Details: </span>
                                                    </div>
                                                    <div className="col-8">
                                                        <div dangerouslySetInnerHTML={{__html: error.description}}></div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">
                                                        <span>How to fix the error? </span>
                                                    </div>
                                                    <div className="col-8">
                                                        <span>{error.fix}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }

                    {requirements && requirements.length > 0 &&
                        <div className="row">
                            <div className="col-12 mt-4">
                                <h3>Accessibility requirements of {selectedComponent.name} component</h3>

                                <div className="mt-4">
                                    {requirements.map((requirement, i) => {
                                        return(
                                            <div className="error-item border-bottom mb-4" key={i}>
                                                <div className="row mb-2">
                                                    <div className="col-4">
                                                        <span>Requirement Type: </span>
                                                    </div>
                                                    <div className="col-8">
                                                        <span>{requirement.error_type}</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">
                                                     <span>Requirement Details: </span>
                                                    </div>
                                                    <div className="col-8">
                                                        <div dangerouslySetInnerHTML={{__html: requirement.description}}></div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="row mb-2">
                                                    <div className="col-4">
                                                        <span>How to implement </span>
                                                    </div>
                                                    <div className="col-8">
                                                        <span>{requirement.fix}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default Component;