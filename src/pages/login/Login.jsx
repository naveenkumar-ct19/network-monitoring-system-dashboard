import "./login.scss"

var attempt = 3;
const validate = () => {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "admin" && password == "admin"){
  alert ("Login successfully");
  window.location = "/"; // Redirecting to other page.
  return false;
  }
  else{
  attempt --;// Decrementing by one.
  alert("You have left "+attempt+" attempt;");
  // Disabling fields after 3 attempts.
  if( attempt == 0){
  document.getElementById("username").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
  return false;
  }
  }
  }
const Login = () => {
  return (
    <div class="container">
        <div class="box-1">
            <div class="content-holder">
                <h2>Hello!</h2>
                <p> IP scanning is the ongoing IT task of analyzing a business network to discover IP addresses </p>
                <button class="button-1" onclick="signup()">Sign up</button>
                <button class="button-2" onclick="login()">Login</button>
            </div>
        </div>

        
        <div class="box-2">
            <div class="login-form-container">
                <form id="form_id" method="post" name="myform">
                    <h1>Login Form</h1>
                    <input type="text" placeholder="Username" name="username" id="username" class="input-field"></input>
                    <br></br><br></br>
                    <input type="password" placeholder="Password" name="password" id="password" class="input-field"></input>
                    <br></br><br></br>
                    <button class="login-button" type="button" value="Login" id="submit" ><a href="/">Login</a></button>
                </form>
                
            </div>


        <div class="signup-form-container">
            <h1>Sign Up Form</h1>
            <input type="text" placeholder="Username" class="input-field"></input>
            <br></br><br></br>
            <input type="email" placeholder="Email" class="input-field"></input>
            <br></br><br></br>
            <input type="password" placeholder="Password" class="input-field"></input>
            <br></br><br></br>
            <button class="signup-button" type="button">Sign Up</button>
        </div>



        </div>
      


    </div>
 )
}

export default Login;
