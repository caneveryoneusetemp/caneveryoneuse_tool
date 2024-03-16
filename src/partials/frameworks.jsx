import React from 'react';

const Frameworks = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5">
                    <h2>Frameworks</h2>

                    <ul>
                        <li>
                            <a href="https://www.tailwindapp.com" className="text-dark text-decoration-none text-decoration-hover" target="_blank" rel="noopener noreferrer">
                                <h4>Tailwind</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" className="text-dark text-decoration-none text-decoration-hover" target="_blank" rel="noopener noreferrer">
                                <h4>Bootstrap</h4>
                            </a>
                        </li>
                        <li>
                            <a href="https://semantic-ui.com/" className="text-dark text-decoration-none text-decoration-hover" target="_blank" rel="noopener noreferrer">
                                <h4>Semantic UI</h4>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Frameworks;