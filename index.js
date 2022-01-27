class MailDripContactCampaign {
  submitForm = () => {
      const mdForms = document.querySelectorAll("#maildrip-contact-form");
      mdForms.forEach(mdForm => {
        mdForm.onsubmit = async (e) => {
          e.preventDefault();
          for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].value == "")
              return null;
            const formName = document.querySelector(".maildrip-newsub-name").value;
            const formEmail = document.querySelector(".maildrip-newsub-email").value;
            console.log(formName);
            console.log(formEmail);
            console.log(this.apiKey);
            console.log(this.accessSecret);
            console.log(this.campaignId);
            const responsess = await fetch(`https://api.maildrip.io/api/v1/campaigns/${this.campaignId}/user`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                "api-key": this.apiKey,
                "access-secret": this.accessSecret,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: formEmail,
                name: formName,
              })
            });
              
            await responsess.json()
              .then(data => {
                console.log(data);
              })
              .catch(err => console.log(err));
              mdForm.reset();
          }
        }
      })
    }
  constructor(opt) {
    const { apiKey, accessSecret, campaignId } = opt;
    this.apiKey = apiKey;
    this.accessSecret = accessSecret;
    this.campaignId = campaignId;
    this.submitForm();
  }
  }
const checkFormAttr = document.getElementById("maildrip-contact-form")
const checkFormInput = checkFormAttr.children;
  const innerApikey = checkFormAttr.dataset.maildripApikey;
  const innerCampaignId = checkFormAttr.dataset.maildripCampaignid;
  const innerAccessSecret = checkFormAttr.dataset.maildripAccesssecret;
if (typeof innerApikey !== 'undefined' && innerApikey !== "" ||
    typeof innerCampaignId !== 'undefined' && innerCampaignId !== "" || 
    typeof innerAccessSecret !== 'undefined' && innerAccessSecret !== "") {
      console.log(innerApikey);
      console.log(innerCampaignId);
      console.log(innerAccessSecret);
      new MailDripContactCampaign({
        apiKey: innerApikey,
        accessSecret: innerAccessSecret,
        campaignId: innerCampaignId
      });
    } else {
      console.log("Inline form attributes unavailable");
}
    
Object.assign(checkFormAttr.style, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "300px",
});
Object.assign(checkFormInput[0].style, {
  // height: "35px",
  borderRadius: "6px 6px 0 0",
  outline: "none",
  padding: "10px 15px",
  border: "1px solid #273df2",
  borderBottom: "0px",
});
Object.assign(checkFormInput[1].style, {
  // height: "35px",
  borderRadius: "0px",
  outline: "none",
  padding: "10px 15px",
  border: "1px solid #273df2",
  marginBottom: "5px"
});
Object.assign(checkFormInput[2].style, {
  backgroundColor: "#273df2",
  color: "#fff",
  borderRadius: "0 0 6px 6px",
  border: "1px solid #fff",
  padding: "10px 15px"
});
checkFormInput[2].addEventListener("mouseover", function (e) {
  Object.assign(checkFormInput[2].style, {
    backgroundColor: "#fff",
    color: "#273df2",
    border: "1px solid #273df2",
    transition: "all 0.4s ease-in-out"
  });
}, false);
checkFormInput[2].addEventListener("mouseout", function(e){
  Object.assign(checkFormInput[2].style, {
    backgroundColor: "#273df2",
    color: "#fff",
    border: "1px solid #fff",
  });
}, false);
  export default MailDripContactCampaign;
window.MailDripContactCampaign = MailDripContactCampaign;