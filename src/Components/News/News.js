import React from "react";
import "./New.css"
import bloga from "../image/blog-a.jpg"
import blogb from "../image/blog-b.jpg"
import blogc from "../image/blog-c.jpg"

function New() {

    return (
        <>
            <div className="parentNew">
                <div className="childNew container">
                    <h5 className="tilte">Recent from blog</h5>
                    <h1>Last Update</h1>

                    <div className="card-group col-sm-2 col-md-6 col-lg-12" style={{ height: "35rem" }}>
                        <div className="card shadow rounded" >
                            <img src={bloga} className="" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">fdfds</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                        <div className="card shadow rounded">
                            <img src={blogb} className="" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                        <div className="card shadow rounded ">
                            <img src={blogc} className="" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                        </div>




                    </div>

                </div>
            </div>
            <div className="parentFooter">
                <div className="childFooter container">
                    <div className="babyFooter">
                        <h1>COVID-19</h1>
                        <p>This card has supporting text below as a natural lead-in to additional content.This card has supporting text below as a natural lead-in to additional content. </p>
                        <p>This card has supporting text below as a natural lead-in to additional content.</p>

                        <div className="footerLink">
                            <h5 className="facebook"> Find us On Facebook </h5>
                            <h5 className="twitter"> Find us On Twitter </h5>
                            <h5 className="instgram"> Find us On Instgram </h5>
                        </div>

                        <div className="footerHelp">
                            <div className="quicklink">
                                <h5>quick link</h5>
                                <p>About Corona</p>
                                <p>Symptoms</p>
                                <p>Prevention</p>
                                <p>protect yourself</p>
                                <p>FAQs</p>
                            </div>
                            <div className="helplink">
                                <h5>help link</h5>
                                <p>HealthCare Professionals</p>
                                <p>HealthCare Facilities</p>
                                <p>Older Adults & Medical cinditions</p>
                                <p>Repare your family</p>

                            </div>
                            <div className="importlink">
                                <h5>import link</h5>
                                <p>WHO Website</p>
                                <p>CDC Website</p>
                                <p>NHs Website</p>
                                <p>Havard Health</p>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <p className="lastfooter">This card has supporting text below as a natural lead-in to additional content.This card has supporting text below as a natural lead-in to additional content.This card has supporting text below as a natural lead-in to additional content.This card has supporting text below as a natural lead-in to additional content. </p>


                </div>
            </div>
        </>
    )
}
export default New