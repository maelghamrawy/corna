import React from "react";
import "./spread.css"
import spreada from "../image/spread-a.png"
import spreadb from "../image/spread-b.png"
import spreadc from '../image/spread-c.png'

function Spread() {
    return (
        <>
            <div className="parentSpread">
                <div className=" childSpread container">
                    <h5>How corona virus  is spread</h5>

                    <h1>Transmission of covied-19</h1>

                    <p> COVID_19s is a newillness that can affect your hugs and airways. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia voluptatum incidunt aspernatur repellendus perferendis assumenda optio a? Reiciendis asperiores sunt esse sed nisi. Placeat illum ea rem adipisci possimus.</p>

                    
                    <div className="card-group col-sm-2 col-md-6 col-lg-12">
                        <div className="card shadow    rounded">
                            <img src={spreada} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">fdfds</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                        <div className="card shadow  rounded">
                            <img src={spreadb} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                        <div className="card shadow   rounded ">
                            <img src={spreadc} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                        </div>



                
                    </div>
                

                    <p>Have a quetion about spreading?</p>

                </div>

            </div>

        </>
    )
}

export default Spread