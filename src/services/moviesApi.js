import axios from 'axios';
// https://api.themoviedb.org/3/trending/all/day?api_key=dfa76d92e5d98a5a83f843d9aefc907e
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchMovies = async () => {
  const { data } = await instance.get('/trending/all/day?', {
    params: {
      api_key: 'dfa76d92e5d98a5a83f843d9aefc907e',
    },
  });
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}?`, {
    params: {
      api_key: 'dfa76d92e5d98a5a83f843d9aefc907e',
    },
  });
  return data;
};

export const fetchMovieByName = async query => {
  const { data } = await instance.get('/search/movie?', {
    params: {
      api_key: 'dfa76d92e5d98a5a83f843d9aefc907e',
      query,
    },
  });
  return data;
};

export const fetchCastById = async id => {
  const { data } = await instance.get(`/movie/${id}/credits?`, {
    params: {
      api_key: 'dfa76d92e5d98a5a83f843d9aefc907e',
    },
  });
  return data;
};

export const fetchReviewsById = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews?`, {
    params: {
      api_key: 'dfa76d92e5d98a5a83f843d9aefc907e',
    },
  });
  return data;
};
