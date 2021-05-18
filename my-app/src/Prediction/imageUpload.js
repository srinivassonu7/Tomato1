function ImgUpload(props){
    return(
        <div className="">
        <form onSubmit={props.imgSubmit} >
            <div className="form-group text-center">
                <div class="alert alert-primary" role="alert">
                Upload Tomato Leaf!
                </div>
                {/*<label  class="alert alert-primary" role="alert" for="exampleFormControlFile1">Upload Tomato Leaf</label>*/}
                <input type="file" 
                       class="form-control form-control-lg form-control-file" 
                       id="exampleFormControlFile1"  
                       onChange={props.imgChange}/>
            </div>
            <div className="text-center ">
                <button type="submit " class="btn btn-success btn-lg mt-2">Submit</button>
            </div>
        </form>
        </div>
    );
}

export default ImgUpload;