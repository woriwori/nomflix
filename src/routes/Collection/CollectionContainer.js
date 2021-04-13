import React, { useState, useEffect, useCallback } from 'react';
import CollectionPresenter from './CollectionPresenter';
import { commonApi } from 'api';

const CollectionContainer = (props) => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getCollection = useCallback(async (id) => {
    try {
      const { data } = await commonApi.collection(id);
      setParts(data.parts);
    } catch (error) {
      if (error.response.status !== 200) setError("Can't find collection.");
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    const id = props.match.params.id;
    getCollection(id);
  }, []);

  return <CollectionPresenter parts={parts} error={error} loading={loading} />;
};

export default CollectionContainer;
