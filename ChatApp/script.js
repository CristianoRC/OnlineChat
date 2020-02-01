
$( '.friend-drawer--onhover' ).on( 'click', () => {
  
  $( '.chat-bubble' ).hide('slow').show('slow');
});


$('#sendMessage').on( 'click', () => {

  const input = $('#messageInput');
  const message = input.val();  
  sendMessage("Cristiano", message);
  input.val("")
});


$(document).ready(() => {
  if(!userHasLoginInfo())
  window.location.href = "./login/index.html";
});


function InsertMessageCard(isMyMessage, message) {
  $('#messageContainer')
  .append(`<div class="row no-gutters">
            <div class="col-md-3 ${isMyMessage === true ? 'offset-md-9' : ''}">
                <div class="chat-bubble chat-bubble--${isMyMessage === true? 'right' : 'left'}">
                    ${message}
                </div>
            </div>
          </div>`
      )
}