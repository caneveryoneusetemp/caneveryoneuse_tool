import React, {useEffect, useState} from 'react';
import Header from './header';
import Search from './search';
import { useParams } from 'react-router-dom';
import SingleFramework from './single-framework';
import frameworkData from '../json';

const Framework = () => {

    const { framework } = useParams();
    const [selectedFramework, SetSelectedFramework] = useState({});

    useEffect(() => {

        if ( framework && frameworkData && frameworkData.length > 0 ) {
            
            const foundFramework = frameworkData.find(o => o.slug === framework);

            if ( foundFramework ) {
                SetSelectedFramework( foundFramework );
            }

        }

    }, [framework]);

    return(
        <div className="App">
            <SingleFramework framework={selectedFramework}  />
        </div>
    );
}

export default Framework;