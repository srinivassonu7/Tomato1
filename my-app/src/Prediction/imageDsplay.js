function ImgDisplay(props){
    return(
        <div>
                 <div class="card mt-4">
              <h2 class="card-header">
                <div class="text-center">
                  
                OUTPUT
                </div>
                </h2>
              <div class="card-body">
                <div class="row">
                
                  <div class="col " >
                    <div class="imgdp">
                  <h4 class="text-center mb-5">Results</h4>
                        <div className="text-center" >
                            <h3 class="text-success">{props.Dname}</h3>
                        </div>
                    <div className="text-center mt-4 mb-5">
                      {props.imgurl && (
                        <div >
                          <img className="preview img-fluid rounded " id="img1" src={props.imgurl} alt="Tomato_Leaf" />
                        </div>
                      )}
                    </div>
                    </div>

                  </div>
                  <div class="col">
                      <h4 class="text-center">Remedies</h4>
                    <div className="text-left" >
                        <p style={{fontSize:"20px",marginTop:"50px"}}>{props.Rname}</p>
                      </div>
                  </div>

                </div>
                {/*<h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>*/}
              </div>
            </div>
          </div>
        
    )
}

export default ImgDisplay;