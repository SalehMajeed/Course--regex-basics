// const regex_expression = document.getElementById('regex-expression');
// const text_value = document.getElementById('text-value');
// const regex = document.getElementById('regex');

// document.querySelector('body').addEventListener('keyup', (event) => {
// 	let value = '',
// 		rule = '',
// 		search_str = '';

// 	if (event.target != regex_expression && event.target != text_value && event.target != regex) {
// 		return;
// 	}

// 	switch (event.target) {
// 		case regex_expression:
// 			rule = regex_expression.value;
// 			console.log(rule);
// 			break;
// 		case text_value:
// 			value = text_value.value;
// 			console.log(value);
// 			break;
// 		case regex:
// 			search_str = regex.value;
// 			console.log(search_str);
// 			break;
// 	}
// });

/**
 *  Meta Character->
 *      \d => 0-9.
 *      \w => a-zA-z0-9 character.
 *      \s => (space, tab, line-break).
 *      . => any character.
 *  Quantifier ->
 *      * => 0 or more.
 *      + => 1 or more.
 *      ? => 0 or one.
 *      {} => limit.
 *
 *  Position
 */
