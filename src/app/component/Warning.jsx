

function Warning({setIsAdult}) {
    

    const buttonYes = ()=> {
        localStorage.setItem("kys",'true')
        setIsAdult(true)
    }

    const buttonNo = ()=> {
        localStorage.setItem("kys",'false')
        setIsAdult(false)

        window.close(); //fix

    }




    return (
        <div className="warning">

            <div className="warning-icon">!</div>
            <div className="warning-message">
                <h2 className="warning-title">WARNING</h2>
                
                <p className="warning-message">This website contains adult content. <br/>
                Only those aged 18 or over, or who have reached the <br/>
                legal adult age in their territory, are permitted to access the contents of this website.
                Please close this website immediately if you have concerns about such content.</p>

                <h2 className="warning-question">Are you 18 years of age or older?</h2>
            </div>

            <div className="warning-buttons">
                <button onClick={buttonYes} className="warning-button-yes">18+</button>
                <button onClick={buttonNo} className="warning-button-no">Under 18</button>
            </div>
        </div>
    );
}

export default Warning;