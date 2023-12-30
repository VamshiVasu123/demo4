import React from 'react';
// import '../App.css';
import './Contact.css'
function Contactus(){
  return(
    <div className='bg'>
      <div class="mainclasscontainer">
		<h1>Feedback</h1>
		<form action="https://formspree.io/f/mayrynpe" method="POST" className='formbg'>
			<input type="text" name="Name" placeholder="Full Name" required></input>
		<input type="email" name="Email" placeholder="Email" required ></input>
		
		<textarea name="Message" placeholder="Message" required></textarea>
		<input type="hidden" name="_captcha" value="false"></input>
	<button type="submit">Send</button>			
	</form>
	</div>
	
    </div>
  )
}
export default Contactus;