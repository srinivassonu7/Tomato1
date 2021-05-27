import React from "react";

function HomeImages(props) {
 
    return(
        <div class="container img-overlay mb-5">
                {/*<h3 class="title">{props.title}</h3>}*/}
                <div class="content  shadow-lg p-3 mb-5 bg-white rounded ">
                    {/*<a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">*/}
                    <div class="content-overlay"></div>
                    <img class="content-image rounded" src={props.imgUrl} alt={props.alt}/>
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">{props.cTitle}</h3>
                        <p class="content-text"></p>
                    </div>
                    {/*</a>*/}
                </div>
            </div>
    );
}

export default HomeImages;