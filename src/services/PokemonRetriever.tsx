import { useEffect, useState } from "react";

function RetrievePokemon() {
  const useFetch = (url: string) => {
    const [status, setStatus] = useState("idle");
    const [data, setData] = useState({
      count: 0,
      next: null,
      previous: null,
      results: [],
    });

    useEffect(() => {
      if (!url) return;

      const fetchData = async () => {
        setStatus("fetching");
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setStatus("fetched");
      };

      fetchData();
    }, [url]);

    return { status, data };
  };

  // Tests
  // NOTE: URL HAS ATTRIBUTES `offset` and `limit`
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;
  const { status, data } = useFetch(url);

  console.log(status, data);

  // Dummy return
  return (
    <div>
      {data.results.map((currentPoke, index) => {
        return <p key={index}>{currentPoke["name"]}</p>;
      })}
    </div>
  );
}

export default RetrievePokemon;
