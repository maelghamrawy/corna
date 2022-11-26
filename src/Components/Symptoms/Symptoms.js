import React from "react";
import "./symptoms.css"
import symptoma from "../image/symptom-a.png"
import symptomb from "../image/symptom-b.png"
import symptomc from "../image/symptom-c.png"

function Symptoms() {
    return (
        <>
            <div className="parentsymptoms">
                <div className=" childsymptoms container">
                    <h5>wha are the symptoms of covid-19?</h5>

                    <h1>symptoms of CoronaVirus</h1>

                    <p> COVID_19s is a newillness that can affect your hugs and airways. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia voluptatum incidunt aspernatur repellendus perferendis assumenda optio a? Reiciendis asperiores sunt esse sed nisi. Placeat illum ea rem adipisci possimus.</p>


                    <div className="card-group col-sm-2 col-md-6 col-lg-12">
                        <div className="cards card shadow    rounded">
                            <img src={symptoma} className="cardimg shadow " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">fever</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                        <div className="cards card shadow  rounded">
                            <img src={symptomb} className="cardimg shadow " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cough</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                        <div className="cards card shadow   rounded ">
                            <img src={symptomc} className="cardimg shadow " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Shortness of breath</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                        </div>
                    </div>

                    <div className="footers">
                    <p className="footerp"> COVID_19s is a newillness that can affect your hugs and airways. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia voluptatum incidunt aspernatur repellendus perferendis assumenda optio a? Reiciendis asperiores sunt esse sed nisi. Placeat illum ea rem adipisci possimus.</p>
                   <div>
                    <p className="footerask">Have a quetion about symptomsing?</p>
                    </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Symptoms