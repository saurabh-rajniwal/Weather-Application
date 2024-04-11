import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => (setIsLoading(false), setApiResponse(response)));
  }, [url]);

  return { apiResponse, isLoading };
};

export default useFetch;
