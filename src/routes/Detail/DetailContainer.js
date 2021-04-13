import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from 'api';

export default class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/')
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    const { isMovie } = this.state;

    if (isNaN(parsedId)) {
      // 숫자가 아닌 값으로 id에 접근한 경우
      return push('/');
    }

    let result = null;
    try {
      ({ data: result } = isMovie ? await moviesApi.movieDetail(id) : await tvApi.tvDetail(id));
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
      console.log(result);
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
