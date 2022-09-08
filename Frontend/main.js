fetch("http://localhost/Peks/Twitter_Rest/twitter_rest/Backend/")
	.then((response) => response.json())
	.then((data) => console.log(data))
	.catch((error) => {
		throw error;
	});

let twit = [];

const timeline = document.querySelector("#timeline");

const form = document.querySelector("#post-form");

form.addEventListener("submit", async (e) => {
	e.preventDefault();

	const username = form.username.value;
	const avatar = `https://avatars.dicebear.com/api/avataaars/${username}.svg`;
	const message = form.message.value;

	twit.push({
		username: username,
		avatar: avatar,
		message: message,
		created: Date.now(),
	});

	twit.sort((a, b) => {
		return b.created - a.created;
	});
	timeline.innerHTML = "";

	twit.forEach((pip) => {
		timeline.innerHTML += `
			<div class="post p-3 border-bottom border-1 border-dark row mx-0">
				<div class="col-auto">
					<div class="avatar bg-white rounded-circle" style="background-image: url(${pip.avatar});"></div>
				</div>
				<div class="col-10">
					<p class="fw-bold">@${pip.username}</p>
					<p>${pip.message}</p>
				</div>
			</div>`;
	});
	console.log(twit);
});
