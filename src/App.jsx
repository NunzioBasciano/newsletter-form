import { useState } from 'react'

import './App.css'
import Modal from './components/Modal';

function App() {

  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.includes('@') && input.includes('.')) {
      console.log(input);
      setIsCorrect(true);
      setIsModalDisplayed(true);
    } else {
      setIsCorrect(false);
    }
  }


  return (
    <>{isModalDisplayed ?
      <Modal
        input={input}
        setIsModalDisplayed={setIsModalDisplayed}
      /> : <div className="main_section">
        <div className="container_left">
          <div className="description">
            <h2 className="title">Stay updated!</h2>
            <p className="description_par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa ipsam, cum perferendis alias error?</p>
            <ul className="list">
              <li className="item">
                <span className="icon_ceck">
                  <img src="#" alt="" className="ceck" />
                  Lorem ipsum dolor sit amet consectetur.
                </span>
              </li>
              <li className="item">
                <span className="icon_ceck">
                  <img src="#" alt="" className="ceck" />
                  Lorem ipsum dolor sit amet consectetur.
                </span>
              </li>
              <li className="item">
                <span className="icon_ceck">
                  <img src="#" alt="" className="ceck" />
                  Lorem ipsum dolor sit amet consectetur.
                </span>
              </li>
            </ul>
          </div>
          <form action="" className="form_container" onSubmit={handleSubmit}>
            <span className="form_label_error">
              <label htmlFor="email">Email address</label>
              {!isCorrect ? <p className="error_message">Valid email required.</p> : null}
            </span>
            <input onChange={handleChange} type="text" className="form_input" />
            <input type="submit" value="Subscribe to monthly newsletter" />
          </form>
        </div>
        <div className="image_container">
          <img src="#" alt="" />
        </div>
      </div>}


    </>
  )
}

export default App
