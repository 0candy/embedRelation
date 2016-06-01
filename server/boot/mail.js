module.exports = function(app) {
  var Mail = app.models.Mail;
  console.log(Mail.embedsOne);
};