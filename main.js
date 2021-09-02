text = "https://www.aljazeera.com/sports/2021/9/2/ronaldo-becomes-highest-goal-scorer-in-international-football"
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	chrome.tabs.sendMessage(tabs[0].id, {type: "getWords"}, function(textC) {
// 		alert(textC)
// 	});
// });

// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 	  console.log(sender.tab ?
// 				  "from a content script:" + sender.tab.url :
// 				  "from the extension");
// 	  if (request.greeting === "hello")
// 		sendResponse({farewell: "goodbye"});
// 	}
//   );

// Inject the payload.js script into the current tab after the popout has loaded
// window.addEventListener('load', function (evt) {
// 	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
// 		file: 'payload.js'
// 	});
// })

// // // Listen to messages from the payload.js script and write to popout.html
// chrome.runtime.onMessage.addListener(function (message) {
// 	document.getElementById('pagetitle').innerHTML = message;
// });

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
			var API_KEY = '7d3eb92cb730ed676d5afbd6c902ac1f'
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
saveText(text)




















// $.ajax({
// 	type: 'POST',
// 	url: 'http://127.0.0.1:5000/home',
// 	crossDomain: true,
// 	data: {
// 		"text": message         
// 	},
// 	success: function(d) {
// 		console.log(d)
// 	}
// });



	// var stopwords = ["can","span","east","middle","years", "said","a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any","are","aren't","as","at","be","because","been","before","being","below","between","both","but","by","can't","cannot","could","couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for","from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's","her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've","if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my","myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some","such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these","they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up","very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's","where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you","you'd","you'll","you're","you've","your","yours","yourself","yourselves"];
	
	// function remove_stopwords(str) {
    // 	res = []
    // 	words = str.split(' ')
    // 		for(i=0;i<words.length;i++) {
    //    			word_clean = words[i].split(".").join("")
    //    				if(!stopwords.includes(word_clean)) {
    //        				res.push(word_clean)
    //    				}
    // 		}
    // 	return(res.join(' '))
	// }

	// // Function to remove stop words
	// function removeStop(string){
	// 	string = string.toLowerCase()
	// 	wordArr = []
	// 	wordList = string.split(' ')
	// 	for(let i = 0; i < wordList.length; i++){
	// 		oneWord = wordList[i].split(".").join("")
	// 		if(!stopwords.includes(oneWord)){
	// 			wordArr.push(oneWord)
	// 		}
	// 	}
	// 	return(wordArr.join(' '))
	// }

	// // Function to remove punctuation
	// function removeChars(string){
	// 	string = string.replace(/[^a-zA-Z ]/g, "");
	// 	return string
	// }

	// alert(removeChars(removeStop(message)))
	// const num = 5;
	// const findMostFrequent = (str = '', num = 1) => {
  	// 	const strArr = str.split(' ');
   	// 	const map = {};
   	// 	strArr.forEach(word => {
    //   		if(map.hasOwnProperty(word)){
    //      		map[word]++;
    //   		}else{
    // 			map[word] = 1;
    //   		}
  	// });
   	// const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
   	// frequencyArr.sort((a, b) => b[1] - a[1]);
   	// return frequencyArr.slice(0, num).map(el => el[0]);
	// };
	
	// alert(findMostFrequent(removeChars(removeStop(message)), num));




