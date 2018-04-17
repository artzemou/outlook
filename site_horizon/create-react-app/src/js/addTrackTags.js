export default function addTrackTags(){

        var element = document.createElement("script");
				element.src = process.env.PUBLIC_URL + "/js/smarttag.js";
				document.body.appendChild(element);



				element = document.createElement("script");
				element.type = 'text/javascript';
				element.src = process.env.PUBLIC_URL + "/js/xtclicks.js";
				document.body.appendChild(element);

				element = document.createElement("script");
				element.type = 'text/javascript';
				element.src = process.env.PUBLIC_URL + "/js/xtcore.js";
				document.body.appendChild(element);

        

}
