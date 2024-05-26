const isUserLoggedIn = () => {
  return (
    localStorage.getItem('user')
  )
}

export {isUserLoggedIn}
