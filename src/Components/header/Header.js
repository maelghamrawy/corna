import React from "react";
import "./Header.css"

function Header () {
    return(
    <div class="container d-flex pt-5 ">
    <div class="left">
        <div class="logoCorona">
            <div class="leftP">
                <p> CORONA</p>
            </div>
            <div class="rightP">
              
                <p class="covidp"> COVID-19</p>
                <p> VIRUS</p>

            </div>
        </div>

        <p class="covidIfno">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quia voluptatum incidunt
            aspernatur repellendus perferendis assumenda optio a? Reiciendis asperiores sunt esse sed nisi. Placeat
            illum ea rem adipisci possimus.</p>

        <div class="buttonInfo">
            <p class="protect">How To protect</p>
            <p>About COVID-19</p>

        </div>

        <div class="covidInfo ">
            <div>
                <p> world wide case</p>
                <p> 9.000.000</p>
            </div>
            <div>
                <p> world wide case</p>
                <p> 9.000.000</p>
            </div>
            <div>
                <p> world wide case</p>
                <p> 9.000.000</p>
            </div>
        </div>

    </div>

    <div class="right">
        <div class="bgImage"></div>
    </div>

</div>

    )
}
export default Header