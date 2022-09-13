const { cors, 
				express,
				fetch,
				Server,
				accessToken,
				port,
				app,
				server,
				notFound
			} = require('./variables');

//const io = new Server(server);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/chat', async(req, res)=> {
	try {
		const { message } = req.body;
		let url_bot = `https://api.wit.ai/message?v=20220912&q=${ message }`;

		let bot_response = await fetch(encodeURI(url_bot), {
			headers: { Authorization: `Bearer ${accessToken}` }
		});
		let bot_data = await bot_response.json();

		if (bot_data.entities && bot_data.entities["find_something:find_something"]) {
			let url_wikipedia = `https://en.wikipedia.org/api/rest_v1/page/summary/${bot_data.entities["find_something:find_something"][0].value}`;

			let wikipedia_response = await fetch(encodeURI(url_wikipedia));
			let wikipedia_data = await wikipedia_response.json();

			if (wikipedia_data.title == 'Not found.') {
				return res.json({ response: (response = notFound) });
			} else {
				return res.json({ response: (response = wikipedia_data.extract) });
			};
		}else {
			return res.json({ response: bot_data});
		};
	} catch (error) {	
		return console.log(error);
	};
});

server.listen(port, () => {
	return console.log('Listening on port: ' + port);
});
