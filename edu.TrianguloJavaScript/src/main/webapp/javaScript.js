/**
 * 
 */

 
 function estrellas(){
 
 let numeroFilas = prompt("INTRODUZA EL NUMERO DE FILAS: ");
 
	
	let array = []
	
	
	for(let i = 0; i < numeroFilas ; i++){
					
		array.push("*");
		
		for(let j = 0; j < array.length; j++){
			
			console.log(array.toString());
			
		}
		
	}
	
	
}

