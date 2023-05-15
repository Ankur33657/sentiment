import React from 'react';
import '../App.css'
import Footer from './Footer';
import ProductList from './ProductList';
const Addproduct=()=>{
    const [name,setName]=React.useState("");
    const [price,setPrice]=React.useState("");
    const [category,setCategory]=React.useState("");
    const [company,setCompany]=React.useState("");
    const [imagelink,setImageLink]=React.useState("");
    const [discription,setDiscription]=React.useState("");
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    const formData = {
        name: name,
        price: price,
        category:category,
        userId:userId,
        company: company,
        imagelink:imagelink,
        discription: discription,
      };
      
    const addproduct=async()=>{
        // const userId=JSON.parse(localStorage.getItem('user'))._id;
        let  result=await fetch('http://localhost:5500/addproduct',{
            method:"Post",
            body:JSON.stringify(formData),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result=await result.json();
        console.log(result);
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
        setImageLink("")
        setDiscription("")
        
    }
    return(
        < >
        <div class="container" >
        <div class=" text-center mt-5 ">

            <h1 style={{fontFamily:"Times",color:'gold'}}>Add-Product Form</h1>
                
            
        </div>

    
    <div class="row ">
      <div class="col-lg-7 mx-auto">
        <div class="card mt-2 mx-auto p-4 bg-light">
            <div class="card-body bg-light">
       
            <div class = "container">
                             <form id="contact-form" role="form">

            

            <div class="controls">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name">Product Name</label>
                            <input id="form_name" type="text" name="name" class="form-control" required="required" data-error="Firstname is required."
                             value={name}  onChange={(e)=>{setName(e.target.value)}}/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Price</label>
                            <input id="form_lastname" type="text"  class="form-control"  required="required" data-error="Lastname is required."
                            value={price}  onChange={(e)=>{setPrice(e.target.value)}}/>
                                                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_email">Category</label>
                            <input id="form_email" type="email" name="email" class="form-control"  required="required" data-error="Valid email is required."
                            value={category}  onChange={(e)=>{setCategory(e.target.value)}}/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_need">Company</label>
                            <input id="form_email" type="email" name="email" class="form-control"  required="required" data-error="Valid email is required."
                            value={company}  onChange={(e)=>{setCompany(e.target.value)}}/>
                            
                    
                          
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name">Image Link</label>
                            <input id="form_name"  type="text" name="name" class="form-control" required="required" data-error="Firstname is required."
                             value={imagelink}  onChange={(e)=>{setImageLink(e.target.value)}}/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Discription</label>
                            <input id="form_lastname"  type="text"  class="form-control"  required="required" data-error="Lastname is required."
                            value={discription}  onChange={(e)=>{setDiscription(e.target.value)}}/>
                                                            </div>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_name">Post first comment</label>
                            <input id="form_name"  type="text" name="name" class="form-control" required="required" data-error="Firstname is required."
                               />
                            
                        </div>
                    </div>
                    {/* <div class="col-md-6">
                        <div class="form-group">
                            <label for="form_lastname">Discription</label>
                            <input id="form_lastname"  type="text"  class="form-control"  required="required" data-error="Lastname is required."
                            value={discription}  onChange={(e)=>{setDiscription(e.target.value)}}/>
                                                            </div>
                    </div> */}
                {/* </div>  */}
                <div class="d-grid gap-2 d-md-block">
  <button onClick={addproduct} class="btn btn-primary" type="button" style={{marginTop:"5px"}}>Add Product</button>
  
</div>


        </div>
         </form>
        </div>
            </div>


    </div>
    

    </div>
    

</div>
</div>
<div style={{margin:"100px"}}> </div>
<Footer/>
</>
    )
}
export default Addproduct;