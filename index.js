/*1- Se desea realizar una estadística de los pesos de los alumnos de un colegio, de acuerdo a la siguiente tabla
- Alumnos de menos de 40 kg       
- Alumnos entre 40 kg y 50 kg                        
- Alumnos de más de 50 kg y menos de 60 kg
- Alumnos de más o igual a 60 kg
*/

//Declaracion de variables y entrada de datos del usuario a traves del metodo prompt
var pes40 = 0;
var pes40y50 = 0;
var pes50y60 = 0;
var pes60 = 0;

var cantidad = 0;

document.getElementById('body').innerHTML += `<h1>Ejercicio de Peso Estadistico</h1>
<h3>- Realizado por José Duarte</h3>   
<h4>Iniciar la actividad</h4>
<button onclick="proceso()">Iniciar</button>`;

function proceso(){
    //Uso de la instruccion do while para establecer la validacion de datos
    do{
        cantidad = prompt("INGRESE LA CANTIDAD DE ALUMNOS A PESAR");
        cantidad = parseInt(cantidad);
        
    }while (isNaN(cantidad));

    console.log(cantidad);

    if (cantidad <= 0){
        document.getElementById('resp').innerHTML = `
            <h3>ERROR: La cantidad ingresada es invalida</h3>`; 
        // console.log("Yo estoy activo");
    }else {
        //Uso del ciclo for con sentencias if y else if para ir organizando los datos introducidos
        for(var i = 0; i < cantidad; i++){
            //Uso del ciclo do-while para la validacion de datos
            do{
                peso = prompt("INGRESE EL PESO DEL ALUMNO " + (i +1));
            }
            while(isNaN(peso) || peso <= 0);
            

            if(peso < 40){
                pes40 = pes40 +1;
            }
            else if (peso >= 40 && peso <= 50){
                pes40y50 = pes40y50 + 1;
            }
            else if (peso > 50 && peso < 60){
                pes50y60 = pes50y60 +1;
            }
            else {
                pes60 = pes60 +1;
            }

        }

        //Muestra de los datos introducidos por el usuario ya ordenados a traves del document.write
        document.getElementById('resp').innerHTML = `
            <h1>Los pesos de los alumnos son:</h1>
            <p>- Cantidad de alumnos insertados: </p>` + (cantidad) + `
            <p>- Menores de 40kg: </p>`+ ((pes40/cantidad)*100) + `%
            <p>- Entre 40kg y 50kg: </p>`+ ((pes40y50/cantidad)*100) + `%
            <p>- Mayores de 50kg y menores de 60kg: </p>`+ ((pes50y60/cantidad)*100) + `%
            <p>- Mayores o iguales a 60kg: </p>`+ ((pes60/cantidad)*100) + `%
        `;

        }

    
}

