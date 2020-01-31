"use strict";

const connection = new signalR.HubConnectionBuilder()
.withUrl("https://localhost:5001/hubs/chat")
.withAutomaticReconnect({nextRetryDelayInMilliseconds: retryContext => {
      if (retryContext.elapsedMilliseconds < 60000) {
          return Math.random() * 10000;
      } else {
          return null;
      }
  }
})
.build();

connection.start();

connection.on("ReceiveMessage", (user, message)=> {
  InsertMessageCard(false, message)
});

function sendMessage(name, message) {
  connection.invoke("SendMessage", name, message)
  InsertMessageCard(true, message)
}
