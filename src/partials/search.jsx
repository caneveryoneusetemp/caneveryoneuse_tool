import React, {useState} from 'react';

const Search = () => {

    const [searchq, setSearchq] = useState('');

    const style = {
        h1: {
            fontWeight: '700',
        }
    }

    return(

        <div className="search-wrap py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form class="d-flex flex-column text-center pt-5">
                            <label htmlFor="search_q" className="form-label h3 mb-4"><h1 style={style.h1} className="mb-2">Search Component or Framework</h1><em>to check it's accessibility score.</em></label>
                            <input type="text" className="form-control border-dark rounded-pill px-4" id="search_q" placeholder="Search here..." value={searchq} onChange={(e) => setSearchq(e.target.value)} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Search;