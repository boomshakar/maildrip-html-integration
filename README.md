# Maildrip HTML Integration

[Site](https://maildrip.app/ "Maildrip Site") |
[Docs](https://maildrip.app/docs "Maildrip Docs") |
[Twitter](https://twitter.com/maildrip)


The [Maildrip](https://maildrip.com/) library exported as a [Node.js](https://nodejs.org) module in two ways i.e [Maildrip-Html](https://npmjs.com/) or [Maildrip-Node](https://npmjs.com/)


# Installation
Installing the [Maildrip-Html](https://npmjs.com/) on your Html page(s) is a simple stepby adding the below script tag in the ```<head> </head> ``` of your page

**Using jsDelivr CDN:**
```html
<head>
  <script src="https://cdn.jsdelivr.net/gh/femicharisol/maildrip-html-integration/index.js" type="module"></script>
</head>
```
**Using maildrip CDN:**
```html
<head>
  <script src="https://cdn.maildrip"></script>
</head>
```
<br>
<br>

# Usage
Initializing the [Maildrip-Html](https://npmjs.com/) on your Html page(s) could be don in two different ways.

### Example 1: Common usage

```html
<form data-maildrip-apikey="YOUR-GENERATED-APIKEY-ON-MAILDRIP"  data-maildrip-accesssecret="YOUR-GENERATED-ACCESS-SECRET" data-maildrip-campaignid="YOUR-GENERATED-CAMPAIGNID-ON-MAILDRIP" id="maildrip-contact-form">
  <input type="email" name="mailDrip-recipient-email" >
  <button type="submit">Submit</button>
</form>
```

### Example 2
> *The script below could be an inline script in your html page below the [Insatllation](#installation) script tag or an external script file linked to the html page you are using it for*

```html
<script type="module">
  new MailDripContactCampaign({
      apiKey: "YOUR-GENERATED-APIKEY-ON-MAILDRI",
      accessSecret: "YOUR-GENERATED-ACCESS-SECRET",
      campaignId: "YOUR-GENERATED-CAMPAIGNID-ON-MAILDRIP"
    });
</script>
```
> *then*
```html
<form id="maildrip-contact-form">
  <input type="email" name="mailDrip-recipient-email" >
  <button type="submit">Submit</button>
</form>
```

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |
