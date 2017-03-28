import React from 'react';


class App extends React.Component {

  render () {
    return(
      <div style={{width:"80%",margin:"0 auto", display:"flex", justifyContent: "space-between"}}>
        <section className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s"></section>
        <section className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.4s"></section>
        <section className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s"></section>
        <section className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s"></section>
        <section className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s"></section>
      </div>
    )
  }
}

export default App;
