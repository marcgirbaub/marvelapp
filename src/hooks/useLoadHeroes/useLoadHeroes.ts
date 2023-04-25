import { useCachedRequests } from "../../store/contexts/CachedRequestsProvider";

const useLoadHeroes = () => {
  const [state, actions] = useCachedRequests();

  return {
    marvelData: state.data,
    isFetching: state.isFetching,
    paginate: actions.paginate,
  };
};

export default useLoadHeroes;
