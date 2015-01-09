var large_substring = function(string){	
	var count = 0;
	var large_count = 0;
	var large_index = 0;
	for(var i = 0; i< string.length; i++){
		if(string.charAt(i)=== " " ){
			if(large_count<count)
			{
				large_count = count;
				large_index = i - count;
			}
			count = 0;
		}
		else{

			count++;
		}

	}
	if(large_count<count)
			{
				large_count = count;
				large_index = i - count;
			}

	var largets_str = string.substr(large_index,large_count);
	console.log(largets_str);
}
	large_substring("Web development tutorial");	
		