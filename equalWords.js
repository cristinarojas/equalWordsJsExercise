function equalWords(str1, str2) {
	return str1.localeCompare(str2);
}

//reference.localeCompare(compareString);

//equalWords('abc', 'cba'); // -1  if the reference string is sorted before the compareString
//equalWords('cba', 'abc'); // 1 if the reference string is sorted after the compareString
equalWords('abc', 'abc'); // 0 if the two strings are equa

function equalWords(str1, str2) {
	if (str1 === str2) {
		console.log('Yes equals');
	}
}

equalWords('hola', 'hola') 