const actions = document.querySelector('.actions');
const ans = document.getElementById('input');
let expression = '';
let a=0;
actions.addEventListener('click', (e) => {
console.log(e.target);
const value = e.target.value||e.target.parentElement.value;
       

if(value !== undefined) {
			switch(value){
				case "DEG":
				case "RAD":
					degrad();
					break;
				case "mc":
					memory=0
					break;

				case "ms":
					memory = expression;
					expression=""
					break;

				case "m+":
					memory = memory+expression;
					expression=""
					break;
				
				case "m-":
					memory = memory-expression;
					expression=""
					break;

				case "mr":
					let finalans = expression+memory; 
					expression = eval(finalans);
					break;

				case "log2":
					expression = Math.log2(expression)
					break;

				case "rnd":
					expression = Math.rnd(expression)
					break;

				case "log1p":
					expression = Math.log1p(expression)
					break;

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

				case "ln":
					expression = Math.log(expression)
					break;
				
				case "log10":
					expression = Math.log10(expression)
					break;

				case "sin":
					expression = Math.sin(expression);
					break;

				case "cos":
					expression = Math.cos(expression);
					break;

				case "tan":
					expression = Math.tan(expression);
					break;

				case "+/-":
					if(expression>0){
						expression = expression*(-1)
					}
					else{
						expression = Math.abs(expression)
					}
					break;

				default:
					expression += value;
			}

			function degrad(){
				var t = document.getElementById("rd");
				
				if(t.value==="DEG"){
					expression = expression * (180/Math.PI)
					t.value="RAD"
				}
				else{
					expression = expression * (Math.PI/180)
					t.value="DEG"
				}

			}

			if(expression == undefined) {
				expression = '';
				ans.value = 0;
			} else {
				ans.value = expression;
			}
	
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



