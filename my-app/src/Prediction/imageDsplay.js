function ImgDisplay(props){
    return(
        <div>
                 <div class="card mt-4">
              <h5 class="card-header">Featured</h5>
              <div class="card-body">
                <div class="row">
                
                  <div class="col " style={{borderRight:"3px solid grey"}}>
                  <h1 class="text-center">Results</h1>
                    <div className="text-center mt-4 mb-5">
                      {props.imgurl && (
                        <div >
                          <img className="preview img-fluid rounded " id="img1" src={props.imgurl} alt="Tomato_Leaf" />
                        </div>
                      )}
                    </div>
                    <div className="text-center" >
                      <h1>{props.Dname}</h1>
                    </div>

                  </div>
                  <div class="col">
                      <h1 class="text-center">Remedies</h1>
                    <div className="text-left" >
                        <p style={{fontSize:"25px"}}>{props.Rname}</p>
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