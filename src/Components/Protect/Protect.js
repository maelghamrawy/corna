import React from "react";
import './Protect.css'
import steps from "../image/steps.png"
import handa from "../image/hand-a.png"

function Protect() {
    return (
        <>

            <div className="parentProtect">

                <div className="childProtect container shadow">
                    <div className="babyProtect">


                        <div className="d-flex">
                            <div className="leftProtect">
                                <h3>Take steps to protect other</h3>
                                <p> - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                <p> - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                <p> - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                <p> - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                <p> - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                <p> - This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                <p> -  text below as a natural lead-in to additional content. This content is a little bit longer</p>

                            </div>

                            <div className="rightProtect">
                                <img src={steps} />
                            </div>
                        </div>

                        <div className="steps">

                            <h2>Follow Steps to wash hands</h2>
                            <p>  why do i need wash hands </p>

                            <div className="hand card-group  col-sm-2 col-md-6 col-lg-12" >
                                <div className="handimg card" style={{ background: "#F7F9FE", border: "none" }}   >
                                    <img src={handa} />
                                    <p>This is a wider card with supporting</p>
                                </div>
                                <div className="handimg card" style={{ background: "#F7F9FE", border: "none" }}  >
                                    <img src={handa} />
                                    <p>This is a wider card with supporting</p>
                                </div>
                                <div className="handimg card" style={{ background: "#F7F9FE", border: "none" }}  >
                                    <img src={handa} />
                                    <p>This is a wider card with supporting</p>
                                </div>
                                <div className="handimg card" style={{ background: "#F7F9FE", border: "none" }}  >
                                    <img src={handa} />
                                    <p>This is a wider card with supporting</p>
                                </div>
                                <div className="handimg card" style={{ background: "#F7F9FE", border: "none" }}  >
                                    <img src={handa} />
                                    <p>This is a wider card with supporting</p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Protect