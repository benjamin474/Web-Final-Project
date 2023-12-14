import axios from "axios";

axios
	.get(
		"https://raw.githubusercontent.com/benjamin474/Web-Final-Project/main/Array.html"
	)
	.then((r) => r.data)
	.then(console.log);
