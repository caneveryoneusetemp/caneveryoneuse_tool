import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchq, setSearchq] = useState('');
    const navigate = useNavigate();

    const style = {
        h1: {
            fontWeight: '700',
        },
        input: {
            minHeight: '4rem',
            padding: '0 2rem',
        },
        button: {
            minHeight: '3rem',
            padding: '0 2rem',
            position: 'absolute',
            right: '8px',
            top: '8px',
            borderRadius: '8px',
            fontWeight: '700',
        },
        inputWrapper: {
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%',
        }
    };

    const navigateToSearchResult = (event) => {
        event.preventDefault();
        const normalizedSearchq = searchq.trim().toLowerCase();

        const searchRoutes = {
            'boot': '/bootstrap',
            'bootstrap': '/bootstrap',
            'foundation': '/foundation',
            'material': '/react-mui',
            'material design': '/react-mui',
            'ang': '/angular-material',
            'angular': '/angular-material',
            'ant design': '/ant-design',
            'ant': '/ant-design',
            'material ui': '/react-mui',
            'react mui': '/react-mui',
            'react material ui': '/react-mui',
            'semantic': '/semantic-ui',
            'semantic ui': '/semantic-ui',
            'tailwind ui': '/tailwind-ui',
            'tailwindcss': '/tailwind-ui',
            'tailwind': '/tailwind-ui',
        };

        const route = searchRoutes[normalizedSearchq];

        if (route) {
            navigate(route);
        } else {
            alert('No results found for your search.');
        }
    };

    return (
        <div className="search-wrap py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className="d-flex flex-column text-center" onSubmit={navigateToSearchResult}>
                            <label htmlFor="search_q" className="form-label h3 mb-4">
                                <h1 style={style.h1} className="mb-2">Search Component or Framework</h1>
                                to check its accessibility score.
                            </label>
                            <div className="position-relative" style={style.inputWrapper} >
                                <input
                                    style={style.input}
                                    type="text"
                                    className="form-control form-control-search rounded-4 bg-white"
                                    id="search_q"
                                    placeholder="Search here..."
                                    value={searchq}
                                    onChange={(e) => setSearchq(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary ms-md-2" style={style.button}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

