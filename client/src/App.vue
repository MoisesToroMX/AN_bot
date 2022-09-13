<template>
	<div id='chatContainer'>
		<div class='chatHeader'>
			<h4 id='botName'>Diabal Bot</h4>
		</div>

		<div class='chatBody'>
			<div class='messages' v-for='message in messages' :key='message.id'>
				<div class="messageRow user" v-if='message.id % 2 == 0'>
					<div class='message user'><p>{{message.message}}</p></div>
				</div>

				<div class='messageRow bot' v-else>
					<div class='message bot'><p>{{message.message}}</p></div>
				</div>
			</div>
		</div>

		<div class='chatFooter'>
			<form @submit.prevent="sendMessage()">
				<input v-model='messageContent' id='createMessage' />
				<input type='submit' />
			</form>
		</div>
	</div>
</template>

<script src="./js/index.js"></script>

<style src="./css/style.css"></style>
