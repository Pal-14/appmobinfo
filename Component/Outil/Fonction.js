const key =  `0963fe2eb42147a8a00eea4752228720`
const serverUrl = `https://newsapi.org/v2/everything?q=apple&from=2021-11-21&to=2021-11-21&sortBy=popularity&apiKey=`


function getDataApi(setDataApi) {
  fetch(`${serverUrl}${key}`
  )
    .then((response) => {
      return response.json();
    })
    .then((responseObject) => {
      setDataApi(responseObject);
      console.log("dataApi", responseObject);
    });
}

module.exports = {
  getDataApi,
};

