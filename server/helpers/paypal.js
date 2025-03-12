const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AaBk7lNXt0PbJPtktL038AQKOJMZa2Iv0RijB-D_CvZvXQ_1mkja0CaxU5R9sz4-Dt7FFxoFqKYK3idw",
  client_secret: "EB7EWkWM9ZbLSrT7iBpOGk6ZisX-hSvdCVaESBi6rE8m83grenK78mQ15OgFGg3tqOkvjP7cEjnibcPg",
});

module.exports = paypal;
