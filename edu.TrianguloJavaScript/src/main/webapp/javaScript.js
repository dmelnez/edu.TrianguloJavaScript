/**
 * 
 */

function estrellas(){
 
 
 
	
	let array = []
	let auxiliar = false;
	
	do{
		let numeroFilas = prompt("INTRODUZA EL NUMERO DE FILAS: ");
		
		if(numeroFilas > 0){
	
		for(let i = 0; i < numeroFilas ; i++){
						
			array.push("*");
			
			for(let j = 0; j < array.length; j++){
				
				console.log(array.toString());
				
				}
			
			}
			
			
			auxiliar = true;
			
		}
		
		else{}
			

		
	
	}
	
	while(!auxiliar);
	
	
}


