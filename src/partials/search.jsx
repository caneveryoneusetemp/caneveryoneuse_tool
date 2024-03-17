import React, {useState} from 'react';

const Search = () => {

    const [searchq, setSearchq] = useState('');

    const style = {
        h1: {
            fontWeight: '700',
        },
        input: {
            maxWidth: '800px',
            margin: '0 auto',
            minHeight: '4rem',
            padding: '0 2rem',
            boxShadow: '5px 5px rgba(73, 80, 87, 0.2)',
        }
    }

    return(

        <div className="search-wrap py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">      
                        <form class="d-flex flex-column text-center">
                            <label htmlFor="search_q" className="form-label h3 mb-4"><h1 style={style.h1} className="mb-2">Search Component or Framework</h1>to check it's accessibility score.</label>
                            <input style={style.input} type="text" className="form-control border-dark rounded-4 bg-white" id="search_q" placeholder="Search here..." value={searchq} onChange={(e) => setSearchq(e.target.value)} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Search;