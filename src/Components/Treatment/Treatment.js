import React from "react";
import "./treatment.css"
import "./Do.css"
import dontsa from "../image/donts-a.png"
import dontsb from "../image/donts-b.png"
import dontsc from "../image/donts-c.png"
import protect from "../image/protect.png"
import dosa from "../image/dos-b.png"
import dosb from "../image/dos-a.png"
import dosc from "../image/dos-c.png"
function treatment() {
    return (
        <>
            <div className="parentTreatment">

                <div className="childTreatment">
                    <div className="leftTreatment">
                        <h4>Be careful an safe</h4>
                        <h1>Treatment For CoronaVirus</h1>
                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                        <p> This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>

                    </div>
                    <div className="rightTreatment">
                        <div className="cardt">
                            <h6>self care</h6>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <p>self care</p>
                            <p>self care</p>
                            <p>self care</p>
                            <p>self care</p>
                            <h6>self care</h6>
                            <p>This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                        </div>
                    </div>

                </div>
            </div>

            <div className="parentDo">
                <div className="childDo container">
                    <h5>DO's & DONT's</h5>
                    <h1>Protect Yourself</h1>
                    <p className="pra">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    <div className="doImage">
                        <div className="rightImage">
                            <div className="rightCol">
                                <p>Avoid close Contactt</p>
                                <img src={dontsa} />
                            </div>
                            <div className="rightCol">
                                <p>Avoid close Contactt</p>
                                <img src={dontsb} />
                            </div>
                            <div className="rightCol">
                                <p>Avoid close Contactt</p>
                                <img src={dontsc} />
                            </div>


                        </div>

                        <div className="centerImage">
                            <img src={protect} />
                        </div>

                        <div className="leftImage">

                            <div className="leftCol">
                                <img src={dosa} />
                                <p>Avoid close Contactt</p>
                            </div>
                            <div className="leftCol">
                                <img src={dosb} />
                                <p>Avoid close Contactt</p>
                            </div>
                            <div className="leftCol">
                                <img src={dosc} />
                                <p>Avoid close Contactt</p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default treatment