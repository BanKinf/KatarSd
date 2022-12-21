import React from 'react'

const Home = () => {

    if (window.location.href === 'http://localhost:5173/') {
        console.log("Code not found")
    } else {
        let _data = {
            code: window.location.href.split("=")[1].split("&")[0]
        }
        console.log(_data)
        fetch('http://localhost:4000/api/token', {
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