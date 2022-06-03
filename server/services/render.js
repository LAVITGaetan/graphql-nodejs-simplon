const axios = require('axios')

exports.index = (req, res) => {
    res.send('Server is running')
};

exports.test = (req, res) => {
    axios.get('https://countries.trevorblades.com/', {params: {query:`
    query {
        continents {
        code
        name
        countries {
          name
          native
          phone
          capital
          languages {
            code
              name
              native
          }
          continent {
            code
              name
          }
        }
      }
    }    
      `}})
    .then(response => {
        console.log(response.data.data);
        res.render('index', {continents:response.data.data.continents})
    })
    .catch(err=> {
        res.send(err)
    }
)};
