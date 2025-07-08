import './App.css';
import ReactModal from 'react-modal';
import { useState, useRef } from 'react';

const temp = document.getElementById('root');

function Modal({isOpen, setIsOpen, formData, setFormData}) {

  const emailRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    //convert the data
    const data = {
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        dob: e.target.elements.dob.value,
        phone: e.target.elements.phone.value
    }
    // console.log("data >> ", data);
    
    

    // run validation
    if(validate(data)){
      setFormData(data);
      setIsOpen(false);
    }

  }

  const validate = (data) => {

    // email contains an '@'
    if(!data.email.includes('@')){
      window.alert("Invalid email. Please check your email address.")
      emailRef.current.setCustomValidity(`Please include an '@' in the email. '${data.email}' does not contain '@'`);
      emailRef.current.reportValidity();
      return false
    }

    // phone number is atleast 10 digits
    if(data.phone.length !== 10){
      window.alert("Invalid phone number. Please enter a 10-digit phone number")
      return false
    }

    // date validation
    const temp = new Date(data.dob);
    if(temp > new Date()){
      window.alert("Invalid date of birth. Date of birth cannot be in the future")
      return false
    }

    return true
  }
  // console.log("form data >> ", formData);


  return (

        <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={{
          content: {
            width: "50vw",
            height: "fit-content",
            top: "25%",
            left: "25%",
            display: 'flex',
            justifyContent: "center",
            alignContent: "center"
          }
        }}
        >

          <div className="modal">

            <div className="modal-content">

              <form name='details'
              onSubmit={handleSubmit}
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
              >

                <h2>Fill Details</h2>

                <div
                className='inputDiv'
                >
                  <label for="username" >Username:</label> <br />
                  <input type='text' id='username' name='username' 
                  required
                  />
                </div>

                <div
                className='inputDiv'
                >
                  <label for="email" >Email Address:</label> <br />
                  <input type='text' id='email' name='email' 
                  required
                  ref={emailRef}
                  onInput={() => emailRef.current.setCustomValidity('')}
                  />
                </div>

                <div
                className='inputDiv'
                >
                  <label for="phone" >Phone Number:</label> <br />
                  <input type='phone' id='phone' name='phone' 
                  required
                  />
                </div>
                
                <div
                className='inputDiv'
                >
                  <label for="dob" >Date of Birth:</label> <br />
                  <input type='date' id='dob' name='dob' 
                  required
                  />
                </div>

                <button type='submit' className='submit-button'>Submit</button>

              </form>

            </div>

          </div>

        </ReactModal>

      
    
  )
}

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: ""
  })

  temp.addEventListener('click', () => {
    setIsOpen(false);
  })

  return (
    <div className="App">
      
      <h1>User Details Modal</h1>
      <button
      onClick={() => setIsOpen(true)}
      >Open Form</button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} formData={formData} setFormData={setFormData} />

    </div>
  );
}

export default App;
