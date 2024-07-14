
function Modal({ input, setIsModalDisplayed }) {

    const handleModal = () => {
        setIsModalDisplayed(false)
        console.log('Modal Closed')
    }


    return (
        <div className="succes_modal">
            <h2>Thanks for subscribing!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {input} Exercitationem quisquam doloremque earum, tempore dolorem molestiae.</p>
            <button onClick={handleModal}>Dismiss message</button>
        </div>
    )
}

export default Modal