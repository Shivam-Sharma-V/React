import React,{Component} from "react";
import '../styles/Theader.css';

export default class Theader extends Component{
  render = () =>{
      return(
        <React.Fragment>
          <div className="container-fluid">
            <div className="row theader text-bg-dark">
                <div className="col-sm-4">+91 8081345349 | +91 9628290217</div>
                <div className="col-sm-4">Sharmashiv20020328@gmail.com</div>
                <div className="col-sm-4">Shivam Shamra Vashistha</div>
            </div>
          </div>
        </React.Fragment>
      )
  }
}