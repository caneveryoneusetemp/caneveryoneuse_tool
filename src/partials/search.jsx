import React, {useState} from 'react';

const Search = () => {

    const [searchq, setSearchq] = useState('');

    return(

        <div className="search-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form >
                            <label for="search_q" className="form-label visually-hidden" >Search Query</label>
                            <input type="text" className="form-control border-dark rounded-pill px-4" id="search_q" placeholder="Search here..." value={searchq} onChange={(e) => setSearchq(e.target.value)} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Search;