useEffect(() => {
  axios.post('http://localhost:3002/get_city_by_country_id', {
    country_id: CvFormIk.values.country || 1
  }).then(res => {

    console.log(res)
    setcities(res.data)
  }).catch(error => {
    console.log(error)
  })
}, [CvFormIk.values.country])