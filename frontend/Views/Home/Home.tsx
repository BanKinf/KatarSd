import React from 'react'

const Home = () => {
    if (window.performance.navigation.type == 1) {
        console.log("reload detected")
    } else {
        let _data = {
            code: window.location.href.split("=")[1].split("&")[0]
        }
        console.log(_data)
        fetch('http://localhost:4000/api/user/create', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
    
  return (
    <div>Estamos en home</div>
  )
}

export default Home