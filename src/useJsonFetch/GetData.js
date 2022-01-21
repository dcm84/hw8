import React from 'react'
import PropTypes from 'prop-types';
import useJsonFetch from './useJsonFetch.js';

function GetData(props) {
    const [{ data, isLoading, hasError }] = useJsonFetch(
        props.url,
        []
    );

    return (
        <>
            {
                isLoading &&
                <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                        <p className="card-text">Loading....</p>
                    </div>
                </div>
            }

            {
                hasError &&
                <div className="card text-white bg-warning mb-3">
                    <div className="card-body">
                        <p className="card-text">при обработке запроса произошла ошибка</p>
                    </div>
                </div>
            }

            {
                !isLoading && !hasError && data != null &&
                <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                        <p className="card-text">{data.status}</p>
                    </div>
                </div>
            }
        </>
    );
}

GetData.propTypes = {
    url: PropTypes.string.isRequired
};

export default GetData;