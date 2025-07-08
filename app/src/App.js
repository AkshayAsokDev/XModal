import './App.css';
import ReactModal from 'react-modal';
import { useState } from 'react';

function Modal({isOpen, setIsOpen}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

        <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
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
                  <input type='text' id='username' name='username' />
                </div>

                <div
                className='inputDiv'
                >
                  <label for="email" >Email Address:</label> <br />
                  <input type='text' id='email' name='email' />
                </div>

                <div
                className='inputDiv'
                >
                  <label for="phone" >Phone Number:</label> <br />
                  <input type='phone' id='phone' name='phone' />
                </div>
                
                <div
                className='inputDiv'
                >
                  <label for="dob" >Date of Birth:</label> <br />
                  <input type='date' id='dob' name='dob' />
                </div>

                <button type='submit' >Submit</button>

              </form>

            </div>

          </div>

        </ReactModal>

      
    
  )
}

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      
      <h1>User Details Modal</h1>
      <button
      onClick={() => setIsOpen(true)}
      >Open Form</button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
  );
}

export default App;
