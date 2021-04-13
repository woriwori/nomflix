import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'fda3e97aacb5071d7149afd44d3d13d0',
    language: 'en-US'
  }
});

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: (term) =>
    api.get(`search/movie`, {
      params: {
        query: encodeURIComponent(term)
      }
    }),
  movieVideos: (id) => api.get(`movie/${id}/videos`)
};

export const tvApi = {
  airingToday: () => api.get('tv/airing_today'),
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
  search: (term) =>
    api.get(`search/tv`, {
      params: {
        query: encodeURIComponent(term)
      }
    }),
  tvVideos: (id) => api.get(`tv/${id}/videos`)
};
