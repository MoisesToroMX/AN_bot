const { 
	cors, 
	express,
	fetch,
	accessToken,
	port,
	app,
	// socketServer,
	notFound
} = require('./variables');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('port', port || 3000);

app.listen(app.get('port'), () => {
	return console.log('Listening on port: ' + app.get('port'));
});
// const server = app.listen(app.get('port'), () => {
// 	return console.log('Listening on port: ' + app.get('port'));
// });

// const socketConnection = socketServer(server);

// socketConnection.on('connection', (socket) => {
// 	socket.on('chat_message', (data) =>{
// 		socketConnection.emit('chat_message', make_post(data));
// 	});
// });

app.post('/chat', async(req, res)=> {
	try {
		const { message } = req.body;
		let url_bot = `https://api.wit.ai/message?v=20220912&q=${ message }`;

		let bot_response = await fetch(encodeURI(url_bot), {
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		let bot_data = await bot_response.json();

		if (bot_data.entities && bot_data.entities['find_something:find_something']) {
			let url_wikipedia = `https://en.wikipedia.org/api/rest_v1/page/summary/${bot_data.entities['find_something:find_something'][0].value}`;

			let wikipedia_response = await fetch(encodeURI(url_wikipedia));
			let wikipedia_data = await wikipedia_response.json();

			if (wikipedia_data.title == 'Not found.') {
				return res.json({ response: (response = notFound) }).status(404);
			} else {
				return res.json({ response: (response = wikipedia_data.extract) }).status(200);
			}
		}else {
			return res.json({ response: bot_data});
		}
	} catch (error) {	
		return console.log(error);
	}
});

// function make_post(data_to_send){
// 	app.post('/chat', async(req = data_to_send, res)=> {
// 		try {
// 			console.log(req.body);
// 			const { message } = req.body;
// 			let url_bot = `https://api.wit.ai/message?v=20220912&q=${ message }`;

// 			let bot_response = await fetch(encodeURI(url_bot), {
// 				headers: { Authorization: `Bearer ${accessToken}` }
// 			});
// 			let bot_data = await bot_response.json();

// 			if (bot_data.entities && bot_data.entities['find_something:find_something']) {
// 				let url_wikipedia = `https://en.wikipedia.org/api/rest_v1/page/summary/${bot_data.entities['find_something:find_something'][0].value}`;

// 				let wikipedia_response = await fetch(encodeURI(url_wikipedia));
// 				let wikipedia_data = await wikipedia_response.json();

// 				if (wikipedia_data.title == 'Not found.') {
// 					return res.json({ response: (response = notFound) }).status(404);
// 				} else {
// 					return res.json({ response: (response = wikipedia_data.extract) }).status(200);
// 				}
// 			}else {
// 				return res.json({ response: bot_data});
// 			}
// 		} catch (error) {	
// 			return console.log(error);
// 		}
// 	});
// }



