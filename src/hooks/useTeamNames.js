import useFetch from './useFetch';

const useTeamNames = () => {
  return useFetch('/teams', 'GET');
};
export default useTeamNames;
