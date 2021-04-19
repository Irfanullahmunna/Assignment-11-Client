import React from 'react';

const Outlet = (props) => {
    const { name, detail, cell, image } = props.outlet;
    return (
        <div className="col-md-4 text-center">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={image} alt=""/>
                </div>
                <div className="col-md-8">
                    <p>{name}</p>
                    <p>{detail}</p>
                    <p>Cell: {cell}</p>
                </div>
            </div>
        </div>
    );
};

export default Outlet;