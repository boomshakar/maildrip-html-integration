var css = `
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";

body {
  background:#ddd;
  font-family:"Raleway";
}
.maildrip-bottom-right {
  position:absolute;
  bottom:20px;
  right:20px;
}
.maildrip-center {
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
.maildrip-popup {
  width:350px;
  height:280px;
  padding:30px 20px;
  background:#f5f5f5;
  border-radius:10px;
  box-sizing:border-box;
  z-index:2;
  text-align:center;
  opacity:0;
  top:-200%;
  transform:translate(-50%,-50%) scale(0.5);
  transition: opacity 300ms ease-in-out,
              top 1000ms ease-in-out,
              transform 1000ms ease-in-out;
}
.maildrip-popup.active {
  opacity:1;
  top:50%;
  transform:translate(-50%,-50%) scale(1);
  transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);
}
.maildrip-popup .icon {
  margin:5px 0px;
  width:50px;
  height:50px;
  border:2px solid #34f234;
  text-align:center;
  display:inline-block;
  border-radius:50%;
  line-height:60px;
}
.maildrip-popup .icon i.fa {
  font-size:30px;
  color:#34f234;
} 
.maildrip-popup .maildrip-title {
  margin:5px 0px;
  font-size:30px;
  font-weight:600;
}
.maildrip-popup .maildrip-description {
  color:#222;
  font-size:15px;
  padding:5px;
}
.maildrip-popup .maildrip-dismiss-btn {
  margin-top:15px;
}
.maildrip-popup .maildrip-dismiss-btn button {
  padding:10px 20px;
  background:#111;
  color:#f5f5f5;
  border:2px solid #111;
  font-size:16px;
  font-weight:600;
  outline:none;
  border-radius:10px;
  cursor:pointer;
  transition: all 300ms ease-in-out;
}
.maildrip-popup .maildrip-dismiss-btn button:hover {
  color:#111;
  background:#f5f5f5;
}
.maildrip-popup > div {
  position:relative;
  top:10px;
  opacity:0;
}
.maildrip-popup.active > div {
  top:0px;
  opacity:1;
}
.maildrip-popup.active .icon {
  transition: all 300ms ease-in-out 250ms;
}
.maildrip-popup.active .maildrip-title {
  transition: all 300ms ease-in-out 300ms;
}
.maildrip-popup.active .maildrip-description {
  transition: all 300ms ease-in-out 350ms;
}
.maildrip-popup.active .maildrip-dismiss-btn {
  transition: all 300ms ease-in-out 400ms;
}
`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}


const modalBody = `
  <div class="maildrip-popup maildrip-center">
    <div class="icon">
      <i class="fa fa-check"></i>
    </div>
    <div class="maildrip-title">
      Success!! 😊
    </div>
    <div class="maildrip-description">
      Thank you for subscribing
    </div>
    <div class="maildrip-dismiss-btn">
      <button id="maildrip-dismiss-popup-btn">
        Dismiss
      </button>
    </div>
  </div>
  `;
  // <div class="bottom-right">
  //   <button id="open-popup-btn">
  //     Open Popup
  //   </button>
  // </div>


//Create the element using the createElement method.
var myDiv = document.createElement("div");

//Set its unique ID.
myDiv.id = 'div_id';

//Add your content to the DIV
myDiv.innerHTML = modalBody;

//Finally, append the element to the HTML body
document.body.appendChild(myDiv);

// document.getElementById("open-popup-btn").addEventListener("click",function(){
  // // document.getElementById("open-popup-btn").style.display = "none";
  // document.getElementsByClassName("popup")[0].classList.add("active");
// });
 
document.getElementById("maildrip-dismiss-popup-btn").addEventListener("click",function(){
  // document.getElementById("open-popup-btn").style.display = "block";
  document.getElementsByClassName("maildrip-popup")[0].classList.remove("active");
});