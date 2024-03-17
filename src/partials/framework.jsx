import React, {useEffect, useState} from 'react';
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
            <SingleFramework selectedFramework={selectedFramework}  />
        </div>
    );
}

export default Framework;