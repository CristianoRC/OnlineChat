using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatApi.Hub
{
    public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
    {
        //IDistributedCache
        public async Task SendMessage(string user, string message)
        {
            await Clients.Others.SendAsync("ReceiveMessage", user, message);
        }

        public override Task OnConnectedAsync()
        {
            //Guard o id de quem está conectado
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception exception)
        {
            
            return base.OnDisconnectedAsync(exception);
        }
    }
}