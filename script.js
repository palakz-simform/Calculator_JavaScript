const actions = document.querySelector('.actions');
const ans = document.getElementById('input');
let expression = '';
let a=0;
actions.addEventListener('click', (e) => {
console.log(e.target);
const value = e.target.value||e.target.parentElement.value;
       

if(value !== undefined) {
			switch(value){
				case "pi":
					expression=Math.PI*expression;
					break;
				case "ce":
			        expression = '';
					ans.value = 0;
					return true;
					break;
				
				case "clear":
					let exp = expression
					if(exp.length>0){
						exp = exp.substring(0,exp.length-1);
						expression = exp;
					}
					break;

				case "square":
					let expr = expression*expression;
					expression=expr
					break;

				case "1/x":
					expression = 1/expression
					break;

				case "|x|":
					expression = Math.abs(expression);
					break

				case "exp":
					expression = Math.exp(expression)
					break;

				case "sqrt":
					expression = (Math.sqrt(expression));

				case "factorial":
					if(expression === 0){
						expression = 1;
					}
					else{
						let fact = 1;
						for (i=1;i<=expression;i++){
							fact *= i;
						}
						expression = fact
					}

				case "=":
					const answer = eval(expression);
				    expression = answer;
					break;
				
				case "10power":
					expression = 10**expression;
					break;

				case "log":
					expression = Math.log(expression)
					break;
					
				default:
					expression += value;
			}

			if(expression == undefined) {
				expression = '';
				ans.value = 0;
			} else {
				ans.value = expression;
			}
			// I'm good to go.
			/*
			else if(value == 'x^2'){
				expression =square();
			}
			else if(value == 'radic'){
				expression = Math.sqrt(expression);
			}
			else if(value == 'log'){
				expression = Math.log(expression);
			}
			else if(value == 'sin'){
				expression = Math.sin(expression);
			}
			else if(value == 'cos'){
				expression = Math.cos(expression);
			}
			else if(value == 'tan'){
				expression = Math.tan(expression);
			}

			else if(value == '=') {
				const answer = eval(expression);
				expression = answer;
				
			}
            else if(value == 'clear'){
                let exp = expression
                if(exp.length>0){
                    exp = exp.substring(0,exp.length-1);
                    expression = exp;

                }
            }
             else {
				expression += value;
			}*/

			
			


		}

	});
	const square =()=> {
			return eval(expression*expression);
	}
    var $ = function(id) { 
        return document.getElementById(id); 
    };
    function backspace(){
        var b = $('input');
        var x = b.value;
        if(x.length > 0){
                x = x.substring(0,x.length-1);
                b.value = x;
        }
}



