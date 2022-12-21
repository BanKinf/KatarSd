import React from 'react'

const Auth = () => {
  return (
    <>
      <a href='https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=pm3heh6vh8kmbit9j2gzf157tu1p4x&scope=clips%3Aedit%20channel%3Aedit%3Acommercial%20channel%3Amanage%3Abroadcast%20channel%3Amanage%3Aredemptions%20channel%3Aread%3Aeditors%20channel%3Aread%3Aredemptions%20channel%3Aread%3Asubscriptions%20channel%3Aread%3Avips%20moderation%3Aread%20user%3Aread%3Aemail%20user%3Aedit%3Abroadcast&redirect_uri=http://localhost:5173'>
        Login With Twitch
      </a>
    </>
  )
}

export default Auth