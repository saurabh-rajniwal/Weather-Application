import React, { useEffect, useState } from "react";

function ConsumeApi() {
  const [productList, setProductList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=8882c477260d74baec0d55922352bd44"
    )
      .then((response) => response.json())
      .then((value) => console.log(value.list));
  }, []);

  const searchInput = (e) => {
    let inputField = e.target.value;
    setSearchString(inputField);
  };

  const deleteProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  return (
    <div>
      {productList
        .filter((ele) => ele.title.includes(searchString))
        .map((val) => (
          <div key={val.id}>
            <span>{val.title}</span>
            <button onClick={() => deleteProduct(val.id)}>Delete</button>
          </div>
        ))}
      <input type="text" onChange={searchInput} />
    </div>
  );
}

export default ConsumeApi;
