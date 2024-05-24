import React from 'react';
import './Marquee.css';

const Marquee: React.FC = () => {
    return (
        <div className="marquee">
            <div>
                <span>
                    BREAKING NEWS {' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>
                        DAILY!
                    </a>{' '}
                    STUDYING AT FPT UNIVERSITY WILL HAVE THE OPPORTUNITY TO EXPERIENCE AN INTERNSHIP AT FSOFT (One of the leading technology companies in Vietnam)
                </span>

                <span>
                    BREAKING NEWS {' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>
                        DAILY!
                    </a>{' '}
                    STUDYING AT FPT UNIVERSITY WILL HAVE THE OPPORTUNITY TO EXPERIENCE AN INTERNSHIP AT FSOFT (One of the leading technology companies in Vietnam)
                </span>
            </div>
        </div>
    );
};

export default Marquee;
