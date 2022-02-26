import React, { Component, useState } from "react";
import ReactSearchBox from "react-search-box";

function Search() {

  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    }
  ];

  
  let set_list = new Set();

  let readFile = ("nyse.csv", "utf8", (error, textContent) => {
    if(error){ throw error; }
    const parsedData = [];
    for(let row of textContent.split("\n")){
      const rowItems = row.split(",");
      set_list.add(rowItems[0].toString());
    }

  });

  let checkTicker = (query) => {
    return set_list.has(query);
  }

// var fs = require("fs")
// const FILE_LOCATION = "src/nyse.txt"

// fs.readFile(FILE_LOCATION, (err, data) => {
//   const result = false

//   if (err) throw err;
//   if(data.indexOf('search string') >= 0){
//    const result = true

//    console.log(data)
//   }
//   return result;

// });

  let [query, setQuery] = useState("")

    return (
      <ReactSearchBox
        placeholder="AAPL, MSFT, DISC, ETC. "
        value={query}
        data={data}
        callback={(record) => console.log(record)}
        onChange={e => setQuery(e.target.value)}
        onBlur={() => this.setState({tickerIsValid: checkTicker(query)})}
      />
    );
  }

export default Search;