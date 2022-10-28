import React from "react";
// import Input from "./components/Input.js";

let e = React.createElement;

export default class LoginForm extends React.Component {
    render () {
        return (
        <div className="container">           
        <div className="row"> 
            <div className="col-3"></div> 
            <div className="col-6">   
                <div className="card"> 
                    <div className="card-header"> 
                        <h3>Login</h3>
                    </div> 
                    <div className="card-body">   
                        <form action="">
                            <input type="text" id="username" placeholder='username' />
                            <span>  </span>                            
                            <input type="password" id="password" placeholder='password' />
                        </form>
                    </div>
                    <div className="card-footer"></div>
                </div>        
            </div>
            <div className="col-3"></div> 
        </div>
        </div> 
        );
    }
}   // The below code was me attempting to code the input fields using the react 
    //  tools we learned this week.  Looking at the coding thru the React website,
    //  I just did not understand it at all.  So for now I went old fashioned.

        // e('div',
        // {class: 'container'},
        // e('div',
        // {class: 'card'},
        // e('div',        
        // {class: 'card-header'},
        //     e('h3',
        //     {class: 'card-title'},
        //     'Log In')),
        // e('div',        
        // {class: 'card-body'},
        //     e(Input, {}, null
        //     ),
        // )));
//         );
//     }
// }
        // return 
        // <div className="login">
        //     <main>
        //     <form action="">
        //         <input type="text" id="username" placeholder='username' />
        //         <input type="password" id="password" placeholder='password' />
        //     </form>
        //     </main>
        // </div> 
//     }
// }