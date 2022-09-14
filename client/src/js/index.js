import axios from 'axios';
import {ref} from 'vue';
// const socket = io();

export default {
  name: 'App',
	setup(){
		const messages = ref([]);
		const messageContent = ref('');

		function sendMessage(){
			if (messageContent.value == '') return;

			createMessage(messageContent.value);
			postResponse(messageContent.value);
			
			messageContent.value = '';
		}

		function createMessage(message){
			let id = 0;

			if (messages.value[messages.value.length - 1]){
				id = messages.value[messages.value.length - 1].id + 1;
			}

			messages.value.push({ id, message });
		}

		async function postResponse(message){
			const payload = { message };
			//socket.emit('chat_message', payload);
			const { response } = await axios
				.post('http://localhost:3000/chat', payload)
				.then((result) => result.data)
				.catch(error => console.log(error));

			createMessage(response);
		}
		// socket.on('chat_message', (data) => {
		// 	createMessage(data);
		// });
		return { messages, messageContent, sendMessage};
	}
};