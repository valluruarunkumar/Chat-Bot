let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let index=0;


let chatContainer=document.getElementById("chatContainer");
let userMessage=document.getElementById("userInput");
let sendButton=document.getElementById("sendMsgBtn");
let messageDisplayBlock=document.getElementById("chatContainer");

sendButton.onclick=function(){
    let userInputValue=userMessage.value;

    let messageContainer=document.createElement("div");
    messageContainer.classList.add("userMessage");
    messageDisplayBlock.appendChild(messageContainer);

    let message=document.createElement("span");
    message.classList.add("msg-to-chatbot");
    message.textContent=userInputValue;
    if (userInputValue==""){
        return []
    }
    messageContainer.appendChild(message);

    let botMessageContainer=document.createElement("div");
    botMessageContainer.classList.add("botMessage");
    messageDisplayBlock.appendChild(botMessageContainer);

    let botMessage=document.createElement("span");
    botMessage.classList.add("msg-to-user");
    botMessage.textContent=chatbotMsgList[index];
    index=index+1;
    botMessageContainer.appendChild(botMessage);

    userMessage.value=""
}

