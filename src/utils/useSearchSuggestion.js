import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./constants";
import { cacheResults } from "./searchSlice";
import { useDispatch, useSelector } from "react-redux";
export const useSearchSuggestion = () => {
  const [search, setSearch] = useState("");

  const [searchSuggestion, setSearchSuggestion] = useState();
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.results);

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + search);
      const json = await data.json();
      setSearchSuggestion(json[1]);
      dispatch(
        cacheResults({
          [search]: json[1],
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSearchSuggestion(searchCache[search]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  return { search, setSearch, searchSuggestion };
};
