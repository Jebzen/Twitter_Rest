fetch("http://localhost/Peks/Twitter_Rest/twitter_rest/Backend/")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => {
		throw error;
	});
