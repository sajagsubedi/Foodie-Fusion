export default function Contact(){
  return(
    
    <section className="Contact">
      <h2 className="sectionHeading">Contact Us</h2>
      <form action="" className="contactForm">
        <input type="text" className="PrimaryInput" placeholder="Enter Your name" />
        <input
          type="text"
          placeholder="Enter your email"
          className="PrimaryInput"
        />
        <input
          type="text"
          placeholder="Enter your Subject"
          className="PrimaryInput"
        />
        <textarea placeholder="Elaborate your concern" className="PrimaryInput"></textarea>
        <button className="PrimaryBtn btn">Submit</button>
      </form>
    </section>
    )
}