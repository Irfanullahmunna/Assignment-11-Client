import React from 'react';
import map from '../../../images/planet-earth.png';
import Outlet from '../Outlet/Outlet';

const outletData = [
    {
        name: 'Chittagong, Bangladesh',
        detail: '45/T2 AB, (Nueva Palomino), Arequipa, Bangladesh',
        cell: '01871911282',
        image: map
    },
    {
        name: 'Chittagong, Bangladesh',
        detail: '45/T2 AB, (Nueva Palomino), Arequipa, Bangladesh',
        cell: '01871911282',
        image: map
    },
    {
        name: 'Chittagong, Bangladesh',
        detail: '45/T2 AB, (Nueva Palomino), Arequipa, Bangladesh',
        cell: '01871911282',
        image: map
    },
    {
        name: 'Chittagong, Bangladesh',
        detail: '45/T2 AB, (Nueva Palomino), Arequipa, Bangladesh',
        cell: '01871911282',
        image: map
    },
    {
        name: 'Chittagong, Bangladesh',
        detail: '45/T2 AB, (Nueva Palomino), Arequipa, Bangladesh',
        cell: '01871911282',
        image: map
    },
    {
        name: 'Chittagong, Bangladesh',
        detail: '45/T2 AB, (Nueva Palomino), Arequipa, Bangladesh',
        cell: '01871911282',
        image: map
    }
]

const Outlets = () => {
    return (
        <section className="outlet-container mt-5">
            <div className="text-center text-secondary">
                <h4>Startup Office</h4>
                <h1>OUR OUTLETS</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row">
                    {
                        outletData.map(outlet => <Outlet outlet={outlet}></Outlet>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Outlets;