 function getDataApi(setDataApi) {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-10-21&sortBy=popularity&apiKey=0963fe2eb42147a8a00eea4752228720",)
      .then((response) => {
        return response.json();
      })
      .then((responseObject) => {
        setDataApi(responseObject);
        console.log("dataApi", responseObject);
      });






















      
  }




  module.exports ={
      getDataApi
  }