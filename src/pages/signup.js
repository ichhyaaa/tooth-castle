
export const SignUp =()=>{
    return(
        <div>
            <h1> Tooth Castle</h1>
            <h2> Sign Up</h2>

        <div class="field input-feild">
                        <i class="fa fa-user"></i>
                        <input type="text" placeholder="Full Name" class="input"/>
                    </div>

                    <div class="field input-feild">
                        <i class="fa fa-at"></i>
                        <input type="text" placeholder="Email" class="input"/>
                    </div>

                    <div class="field input-feild">
                        <i class="fa fa-lock"></i>
                        <input type="password" placeholder="Password" class="input"/>
                    </div>
        
                    <div class="field input-feild">
                        <button> Sign in <a href="signup.js"> </a></button>

                    </div>       
            
                    <div class="link">
                    <p>By clicking the Sign Up you agree <br/>
                     <a href="#">Term and Condition</a> and <a href="#">Policy  Privacy</a> of Tooth Castle  </p> 
                    </div>
                    </div>
    )
}