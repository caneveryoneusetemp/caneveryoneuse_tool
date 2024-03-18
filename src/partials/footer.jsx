import React from 'react';

const Footer = () => {
    return(
        <div className='bg-black mt-5'>
            <div className='container mt-5 py-3 pt-5 text-white'>
                <div className='row'>
                    <div className="col">
                        We are currently aware that our website may not be fully accessible to all users. This site serves as a minimum viable product (MVP) developed for a hackathon and is still in its early stages of development.
                    </div>
                    <div className="col text-end">
                        Proudly developed at the <a className='text-white' href='https://hackathon.cloudfest.com/' target="_blank" rel="noreferrer">CloudFest Hackathon 2024</a>. 
                        <br />❤️ Because Accessibility matters.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;