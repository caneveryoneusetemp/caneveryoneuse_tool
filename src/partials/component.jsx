import React from 'react';

const Component = (props) => {

    const { component } = props;

    const calculateErrors = ( component ) => {

        let count = 0;

        if ( ! component ) return count;

        if ( component.Axe && component.Axe.total_issues ) {
            count = count + parseInt( component.Axe.total_issues, 10 );
        }

        if ( component.manual_testing && component.manual_testing.total_issues ) {
            count = count + parseInt( component.manual_testing.total_issues, 10 );
        }

        return count;
    }

    const errorsCount = calculateErrors( component );

    return(
        <div className="col-12 col-lg-4 mb-4">
            <div className="card">
                <div className="card-header">{component.name}</div>
                <div className="card-body">
                    <h5 className="card-title d-flex align-items-center">
                        <span>Found accessibility errors:</span>
                        <span className={`py-2 px-3 text-white bg-${errorsCount === 0 ? 'success' : 'warning'} ms-2`}>{errorsCount}</span>
                    </h5>

                    <div className="card-footer">
                        {  component.preview_link && component.preview_link.length > 0 &&
                            <a href={component.preview_link} className="btn btn-primary" target="_blank" rel="noreferrer">Preview</a>
                        }

                        {errorsCount > 0 &&
                            <button type="button" className="btn btn-secondary ms-2">Check errors</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;