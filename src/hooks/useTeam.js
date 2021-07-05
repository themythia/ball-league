import useFetch from './useFetch';

const useTeam = (team) => {
  return useFetch('/team', 'POST', JSON.stringify({ team }));
};
export default useTeam;
