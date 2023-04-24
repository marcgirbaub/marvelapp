import { useCachedRequests } from "../../store/contexts/CachedRequestsProvider";

const useLoadHeroes = () => {
  const [state, actions] = useCachedRequests();

  return {
    heroes: state.data,
    isFetching: state.isFetching,
    paginate: actions.paginate,
  };
};

export default useLoadHeroes;
