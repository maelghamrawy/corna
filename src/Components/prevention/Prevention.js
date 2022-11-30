import React from "react";
import "./Prevention.css"
import advicea from "../image/advice-a.png"
import adviceb from "../image/advice-b.png"
import advicec from "../image/advice-c.png"
import adviced from "../image/advice-d.png"

function Prevention() {
    return (
        <>
            <div className="parentPrevention">
                <div className=" childPrevention container">
                    <h5>wha are the symptoms of covid-19?</h5>

                    <h1>Prevention & advice</h1>

                    <p> COVID_19s is a newillness that can affect your hugs and airways. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia voluptatum incidunt aspernatur repellendus perferendis assumenda optio a? Reiciendis asperiores sunt esse sed nisi. Placeat illum ea rem adipisci possimus.</p>


                    <div className="card-group  col-sm-2 col-md-6 col-lg-12">
                        <div className="card  rounded" style={{background: "#F7F9FE", border:"none"}}  >
                            <img src={advicea} className="cardimg1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">fdfds</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                        <div className="card   rounded" style={{background: "#F7F9FE", border:"none"}}>
                            <img src={adviceb} className="cardimg1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                        <div className="card    rounded " style={{background: "#F7F9FE", border:"none"}}>
                            <img src={advicec} className="cardimg1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                        </div>              
                        <div className="card    rounded " style={{background: "#F7F9FE", border:"none"}}>
                            <img src={adviced} className="cardimg1" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                        </div>              
                    </div>
                
                    <div className="footerPrevention">
                    <p className="prevenionask">Have a quetion about symptomsing?</p>
                   <div>
                    </div>
                    <p className="prevenionp"> COVID_19s is a newillness that can affect your hugs and airways?</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Prevention