import React from 'react';

const Component = (props) => {

    const { component } = props;

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

    const errorCountTotal = calculateErrors(component);

    const retrieveBgColor = (count) => {
        if (count > 3) return 'bg-danger';
        return count > 0 ? 'bg-warning' : 'bg-success';
    }

    return(
        <div className="col-12 col-lg-4 mb-4">
            <div className={`component-card ${retrieveBgColor(errorCountTotal)}`}>
                <div className="component-card-header">{component.name}</div>
                <div className="component-card-body">
                    <h5 className="component-card-title">
                        <b>{errorCountTotal > 0 ? errorCountTotal : 'OK'}</b>
                        {errorCountTotal > 0 &&
                            <a href={component.preview_link} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#fa2c2c" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg></a>
                        }
                    </h5>

                    <div className="component-card-footer">
                        {component.preview_link && component.preview_link.length > 0 &&
                            <a href={component.preview_link} target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"/></g></svg></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component;