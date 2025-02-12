<template>
    <div class="chat-container">
        <div class="chat-messages">
            <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
                <div class="response-container">
                    {{ message.text }}
                </div>
            </div>
        </div>
        <div class="chat-input">
            <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
const messages = reactive([
    { text: 'Hello!', sender: 'user', isActive: false },
    { text: '您好 有什么可以帮助到您吗？', sender: 'bot', isActive: false }
])
const newMessage = ref('')
const sendMessage = () => {
    let userMsg = newMessage.value
    if (userMsg.trim() === '') return;
    messages.push({ text: userMsg, sender: 'user' });
    socket.send(userMsg)
}

onMounted(() => {
    initSocket()
})

// 连接后端socket接口
let socket = new WebSocket('http://127.0.0.1:4600/question')
// 消息的回调
const messageHander = (event) => {
    //将后端返回字符串转为json对象
    const resData = JSON.parse(event.data)
    //判断数据是否存在还没完成的内容
    const index = messages.findIndex(item => item.isActive === true) 
    if (!resData.isEnd) {
        if (index === -1) {
            messages.push({ text: '', sender: 'bot', isActive: true })
        } else {
            messages[index].text = messages[index].text+=resData.data
        }
    } else {
        messages[index].isActive = false
        newMessage.value = ''
    }
}
const openHandler = () => {
    console.log('open')
}
const errorHandler = () => {
    console.log('error')
}
const closeHandler = () => {
    console.log('close')
}
//socket监听方法
const initSocket = () => {
    //接收到消息
    socket.onmessage = messageHander
    //连接成功
    socket.onopen = openHandler
    //连接错误
    socket.onerror = errorHandler
    //连接关闭
    socket.onclose = closeHandler
}
</script>
<style>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 95vh;
    max-width: 100%;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 10px;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.message {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    max-width: 70%;
    display: table;
}

.message.user {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
}

.message.bot {
    background-color: #f1f1f1;
    color: black;
    align-self: flex-start;
}

.chat-input {
    display: flex;
    padding: 10px;
}

.chat-input input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.chat-input button {
    margin-left: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.chat-input button:hover {
    background-color: #0056b3;
}
.response-container {
    font-family: monospace; /* 使用等宽字体，模拟打字机效果 */
    display: inline-block;
}
</style>