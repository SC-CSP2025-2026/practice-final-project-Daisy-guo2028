const loadQuotes = async () => {
  const url = "https://starbucks-coffee-db2.p.rapidapi.com/drinks";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "Pc81f2eebbe3cd00f3041986e4b43f7ed8969d3fa27254251fba6c50dac268175",
      "X-RapidAPI-Host": "starbucks-coffee-db2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  console.log(result);
};

loadQuotes();
