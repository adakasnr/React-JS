import React from "react";

const Age = () => {
  return <h2>26</h2>
}

let title = "Money heist Part2"

const App = () => {
  const user = {
    firstName: "Siva",
    lastName: ""
  };

  const styles = {
    heading:{
      color: "red",
      fontSize:"50px"
    }
  }

  return (
    <section>
      <div>
        <h1 style={{color:"blue"}}>my name is {user.firstName}</h1>
        <h2>My age</h2><Age />
      </div>
      <div>
        <h2 style={styles.heading}>Mahesh</h2>
        <h1>hello {new Date().toLocaleTimeString()}</h1>
      </div>
      <div className="movie-container">
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      </div>
    </section>
  )
}


const Movie = () => {
  return <article className="each-movie">
    <ImageComponent />
    <Title />
  </article>
}


const ImageComponent = () => {
  return <img
    src="https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326" alt="money heist img"
  />
};

const Title = () => {
  return <h3 className="heading">Money Heist & {title}</h3> //here we created a variable outside component and placed here
}


export default App;