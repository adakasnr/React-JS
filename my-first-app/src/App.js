import React from "react";

const Age = () => {
  return <h2>26</h2>
}

let data = [
  {
    title: 'Money heist Part2',
    imgURL: 'https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326',
    discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
  },
  {title: 'Money heist Part2',
  imgURL: 'https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
},
{title: 'Hi Nanna',
imgURL: 'https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSzFkseWf0J4XkPir5npa1kR0kiNZbFQYOTywLVew7xHzT9YHW9sbUcHcN63tHcbhkO1KWjXKmZL4EOCIrE9MRBDflVNE00M_8o.jpg?r=3e0',
discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
}
]

let title = "Money heist Part2"
let imgURL = "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326"
let discription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

// above we have creatd variables and used at required places, insted of this we can create a object with these as properties 


let animalObj = {
  title: 'Money heist Part2',
  imgURL: 'https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
}

let hiNannaObj = {
  title: 'Hi Nanna',
  imgURL: 'https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSzFkseWf0J4XkPir5npa1kR0kiNZbFQYOTywLVew7xHzT9YHW9sbUcHcN63tHcbhkO1KWjXKmZL4EOCIrE9MRBDflVNE00M_8o.jpg?r=3e0',
  discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
}


const App = () => {
  const user = {
    firstName: "Siva",
    lastName: ""
  };

  const styles = {
    heading: {
      color: "red",
      fontSize: "50px"
    }
  }
  let temparray = ["mango", "banana"];
let newtempArray = data.map((eachObj) =>{
  return (<article> 
    <h1>{eachObj.title}</h1>
    <img src={eachObj.imgURL} alt={eachObj.title}/>
    <p>{eachObj.discription}</p>
  </article>);        
});
console.log(newtempArray);
  return (
    <section>
      {"hello"}
      {temparray}

      {/*
      <div>
        <h1 style={{color:"blue"}}>my name is {user.firstName}</h1>
        <h2>My age</h2><Age />
      </div>
      <div>
        <h2 style={styles.heading}>Mahesh</h2>
        <h1>hello {new Date().toLocaleTimeString()}</h1>
      </div>
      <div className="movie-container">
      <Movie 
      personName="Sri" surName="adaka" 
      imgURL={animalObj.imgURL} 
      />
      <Movie personName="Aarush" surName="adaka"/>
      <Movie title={title} imgURL={imgURL}/>
      <Movie discription={discription}/>
      <Movie title={animalObj.title}  />  
      <Movie discription={animalObj.discription}/>
      <Movie 
      title={hiNannaObj.title}
      imgURL={hiNannaObj.imgURL}/>
      </div>*/}
    </section>
  )
}


const Movie = (props) => {
  console.log(props);
  return <article className="each-movie">
    <h2>{props.personName}</h2>
    {/* <ImageComponent /> */}
    {/* <Title /> */}
    <h1>{props.title}</h1>
    <p>{props.discription}</p>
    <img src={props.imgURL} alt="netflix show" />

  </article>
}

/*
const ImageComponent = () => {
  return <img
    src={imgURL} alt="money heist img"
  />
};



const Title = () => {
  return (
  <h3 className="heading">Money Heist & {title}</h3> //here we created a variable outside component and placed here
  )
}
*/


export default App;