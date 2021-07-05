import useFetch from './useFetch';

const useTeamsArticles = (team) => {
  return useFetch('/articles', 'POST', JSON.stringify({ team }));
};
export default useTeamsArticles;
