var $;
var Handlebars;

var instructions = "<p>This study is part of a research study conducted by Emily Yeh at Carnegie Mellon University and is funded by [sponsor].

<b>DESCRIPTION</b>: You are invited to participate in a research study on social interactions and how different groups approach and solve problems. You will be asked to complete a set of questions that will determine which group you belong in. You will then be given a group activity and asked to answer a few questions about your group. The research aims to expand our understanding of particular psychological processes that are involved in problem-solving within different groups. By completing the following survey, you are helping us advance this understanding. 
<b>PARTICIPANT REQUIREMENTS</b>: Participation in this study is limited to individuals age 18 and older.
<b>TIME INVOLVEMENT</b>: Your participation will take approximately [TIME] minutes.
<b>RISKS AND BENEFITS</b>: The risks associated with this study are minimal and no greater than those ordinarily encountered in daily life or during other online activities. There may be no personal benefit from your participation in the study but the knowledge received may be of value to humanity. 
<b>PAYMENTS</b>: You will receive $8 as payment for your participation and up to an additional $4 bonus for your group’s performance.
<b>SUBJECT’S RIGHTS</b>: If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled.  The alternative is not to participate.  Your data and personal identifiers will be kept separate and encrypted on a secure computer. Your individual privacy will be maintained in all published and written data resulting from the study. 
<b>CONTACT INFORMATION</b>: If you have any questions, concerns or complains about this research, its procedures, risks and benefits, contact Emily Yeh. Email: emilyy@andrew.cmu.edu. 

If you have questions pertaining to your rights as a research participant; or to report objections to this study, you should contact the Office of Research integrity and Compliance at Carnegie Mellon University.  Email: irb-review@andrew.cmu.edu. Phone: 412-268-1901 or 412-268-5460.

<b>You will be given a printed copy of this page for your records.</b>

<b>Please read the following statements:</b>
<ul>
<li>I am 18 years old or older.</li>
<li>I have read and understand the information below.</li>
<li>I want to participate in this research and continue with the activity.</li>
</ul>

<b>If you agree to the statements above, please sign the paper consent form given to you and press the Continue button below.</b></p>";

function Index() {
  'use strict';
  var index = this;

  index.next = function(){
    document.getElementById('content-text').innerHTML = instructions;
  }

}
