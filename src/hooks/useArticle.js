import useFetch from './useFetch';

const useArticle = (args) => {
  return useFetch('/article', 'POST', JSON.stringify(args));
};
export default useArticle;
