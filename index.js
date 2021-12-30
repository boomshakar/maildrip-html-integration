// window.tests = function() {
//   alert("hello");
// }
// export default tests;
// function submitFunction(e) {
// }
// var script = document.createElement('script');
// script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
// script.type = 'text/javascript';
// script.integrity = "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==";
// script.crossOrigin = "anonymous";
// script.referrerPolicy = "no-referrer";
// document.getElementsByTagName('head')[0].appendChild(script);
// var $;
// $ = require('jquery');
class MailDripContactCampaign {
    
  submitForm = () => {
      
    // const ahha = this.apiKey;
      const mdForms = document.querySelectorAll("#mail-drip-contact-form");
      // const mdForms = $(".mail-drip-contact-form");
      // if
      // block form from submitting if feild is not filled

    /*
      "Please provide an email address.",
      r="Please use a valid email address.",
      a="Success! Thanks for inviting me to your inbox.",
      i="Something went wrong. Please try again."    
    */
      mdForms.forEach(mdForm => {
        // mdForm.style. style the form and success/error modal
        mdForm.onsubmit = async (e) => {
          e.preventDefault();
          for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].value == "")
              return null;
            // const { name, value } = e.target[i];
            // console.log(name);
            // console.log(value);
            console.log(e.target[i].value);
            // $.ajax({
            //   url: CONSTANTS.baseUrl,
            //   contentType: "application/json",
            //   type: "POST",
            //   data: JSON.stringify({
            //     query: `mutation {
            //             resetPassword(
            //                 resetToken: "${reset_token}"
            //                 password: "${reset_password}"
            //                 repeat_password: "${reset_confirm_password}"
            //             ){
            //                     success
            //                     message
            //                     token
            //                     data
            //                 }
            //             }
            //         `,
            //   }),
            //   success: function (result) {
            //     console.log(result);
            //     if (!result.data.resetPassword.success) {
            //       $(".reset_password_btn").html("Reset password");
            //       // errorMessage.css("display", "block");
            //       // errorMessage.css("background", "#c62828");
            //       // errorMessage.html(result.data.resetPassword.message);
            //       // errorMessage.animate({ top: "30px" }, 900, "linear", function () {
            //       //   console.log("All is cool");
            //       // });
            //       // errorMessage.animate({ top: "50px" }, 900, "linear", function () {
            //       //   console.log("All is cool");
            //       // });
            //       // setTimeout(function () {
            //       //   errorMessage.css("display", "none");
            //       // }, 2000);
            //     } else {
            //       $(".reset_password_btn").html("Reset password");
            //       // errorMessage.css("display", "block");
            //       // errorMessage.css("background", "#43a047");
            //       // errorMessage.html(result.data.resetPassword.message);
      
            //       // errorMessage.animate({ top: "30px" }, 900, "linear", function () {
            //       //   console.log("All is cool");
            //       // });
            //       // errorMessage.animate({ top: "50px" }, 900, "linear", function () {
            //       //   console.log("All is cool");
            //       // });
            //       // setTimeout(function () {
            //       //   errorMessage.css("display", "none");
            //       // }, 2000);
            //     }
            //     console.log(JSON.stringify(result.data));
            //   },
            //   error: function (err) {
            //     console.log(err);
            //   },
            // });
            const clientToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxRktTNDYwSkVCWURTV0c4RkszVDRGUjZaIiwiaWF0IjoxNjM4ODM1MDgyLCJhdWQiOlsiR2xvYmFsIl0sImlzcyI6IkFsdWthIiwic3ViIjoiQUxVS0EgQVBJLiBbQXV0aG9yOiBKdXN0aWNlIE5lZmUuXSJ9.ob3015LGmuju9LT0L1sk6_85vXXQf4f70xZvtz-7u3o";
            console.log(this.apiKey);
            console.log(this.campaignId);
            const responsess = await fetch("https://api.aluuka.app/graphql", {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + clientToken,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  query: `mutation {
                    cancelAppointmentAsCareGiver(
                              id: "01FKS460JEBYDSWG8FK3T4FR6Z"
                          ){
                                  success
                                  message
                                  token
                                  data
                              }
                          }
                      `,})
              });
              
            responsess.json()
              .then(data => {
                console.log(data);
              })
              .catch(err => console.log(err));
              mdForm.reset();
          }
          // console.log(e.target.length);
          // const { value } = e.target;
          // console.log(value);
        }
      })
      // return this.submitForm()
    }
  constructor(opt) {
    const { apiKey, campaignId } = opt;
    this.apiKey = apiKey;
    this.campaignId = campaignId;
    this.submitForm();
  }
  }
  const checkFormAttr = document.getElementById("mail-drip-contact-form"); 
  const innerApikey = checkFormAttr.dataset.maildripApikey;
  const innerCampaignId = checkFormAttr.dataset.maildripCampaignid;
  // const conset = checkFormAttr.attr("mailDrip-apiKey");
  // $(document).ready(function () {
    if (typeof innerApikey !== 'undefined' && innerApikey !== "" || typeof innerCampaignId !== 'undefined' && innerCampaignId !== "") {
      console.log(innerApikey);
      console.log(innerCampaignId);
      new MailDripContactCampaign({
        apiKey: innerApikey,
        campaignId: innerCampaignId
      });
    } else {
      console.log("Inline form attributes unavailable");
    }
  export default MailDripContactCampaign;
  window.MailDripContactCampaign = MailDripContactCampaign;

  // const mailDripContactCampaign = (options) => {
  //   let mdForms = document.querySelectorAll("#mail-drip-contact-form");

  //   // if
  //   // block form from submitting if feild is not filled

  //   // mdForms.forEach(mdForm => {
  //   //   // mdForm.style.
  //   // })
  //   if (options.apiKey) { console.log("he;") };
  //   if (options.campaignId) { console.log("xeee") };
  
  //   // console.log(mailDripContactCampaign(options));
  //   // return;
  // };

  // const _mailDripContactCampaign = mailDripContactCampaign;
  // export { _mailDripContactCampaign as mailDripContactCampaign };
  // export default mailDripContactCampaign;
  // window.mailDripContactCampaign = mailDripContactCampaign;


  // console.log(mailDripContactCampaign());
// });
