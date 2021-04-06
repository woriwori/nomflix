import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'components/Loader';

const DetailPresenter = ({ result, error, loading }) => {
    return <div></div>;
};

DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
