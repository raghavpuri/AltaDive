//document.getElementById("searchTxt").value="Enter Your Url Here";

function  search(){
	text = document.getElementById("searchTxt").value;
	saveText(text)
}



function saveText(text){
	$.ajax({
		type: 'POST',
		url: 'http://127.0.0.1:5000/home',
		crossDomain: true,
		data: {
			"text": text         
		},
		success: function(d) {
			// console.log(d)
			// document.getElementById('check').innerHTML = d
			var wordList = d.split("-")
			console.log(wordList)

			var query = wordList[5]
			var API_KEY = '611f1bf696196af569ba311f19fbe8af'
			var url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query 
			console.log(url)
			let result = ""
			
			$.get(url, function(data) {
				result = `
						<h1 style = "font-family: 'Lato', sans-serif; font-size: 30px; padding-left:60px">${data.organic_results[3].title}</h1><br/><a href = "${data.organic_results[3].url}" style = "font-family: 'Lato', sans-serif; font-size: 15px; padding-left:60px; text-decoration:none; color: #00C698"; margin-top:-10px;>${data.organic_results[3].url}</a>
						<p>${data.organic_results[3].snippet}</p><br/><br/>
						<a href = "${data.organic_results[3].url}" target = "_blank" style = "font-family: 'Lato', sans-serif; font-size: 15px; margin-left:60px; height:10px; width:20px;background-color:#00C698; color:white; text-decoration:none; padding-top:10px; padding-bottom:10px;padding-left:10px; padding-right:10px;">Read Article</a>
					`

					$('#pagetitle').append(result)

			})
		}
	});
}

