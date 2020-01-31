using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatApi.Hub
{
    public class ChatHub : Microsoft.AspNetCore.SignalR.Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.Others.SendAsync("ReceiveMessage", user, message);
        }
    }
}