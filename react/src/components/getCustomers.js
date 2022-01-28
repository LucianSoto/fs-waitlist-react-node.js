export const getCustomers = () => {
  // var customers
  
  //   fetch('http://localhost:3000/get_waitlist', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     }
  //   })
  //   .then(res => {
  //     customers = res.json()
  //     if(res.status === 200) {
  //       return customers
  //     } else {
  //       console.log('error')
  //     }
  //   })  
  //   .then(res => {  
  //     customers = res.customer
  //     console.log(customers[0], 'in get customers')
  //     return customers
  //   })
  
  return fetch('http://localhost:3000/get_waitlist')
    .then(data => data.json())

};
