import '../style/mystyle.css';
function Contact()
{
  return(
  <body>
    <br/><br/><br/>
    <div className='contactcss'>
      <p className='contactp'>Want to work with me!</p>
      <p className='contactp1'>Reach out to me using the form below</p>
      <form>
        <br/><br/><br/>
        <input type='text' placeholder='Your name' required></input>
        <input type='email' placeholder='Email address' required></input>
        <textarea rows={4} cols={40} placeholder='Type a message...' required></textarea>
        <input type='submit'></input>
      </form>
    </div>
  </body>
    );
}
export default Contact;