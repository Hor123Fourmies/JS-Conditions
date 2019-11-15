var maVariable = 1985;
var maVariable2 = 85;

if ( maVariable === 1985 ) //c'est vrai
{
    //alert('ça marche');
}
// variable et condition écrites sous forme d'entiers

// 2 variables
if ( maVariable === 1985 && maVariable2 === 85) //c'est vrai
{
    //alert('ça marche');
}


if ( maVariable > 50 )
{
    //alert('ça marche');
}

if ( maVariable < 2500 )
{
    //alert('ça marche');
}

if ( maVariable > 50 && maVariable < 2000 && maVariable === 1985 )
{
    // alert('ça marche');
}

var maVariable = 30;

if ( maVariable > 50 && maVariable < 2000 && maVariable === 1985 )
{
    //alert('ça marche');
}

//??problème avec Else??
/*else (maVariable)
{
alert( 'Else execute'); //else est binaire
}
*/

/*
if (maVariable < 10) {
    document.getElementById('test').innerHTML = "mon texte";
}
else
{
    document.getElementById('test').innerHTML = "mon autre texte";
}
*/

        else if (maVariable === 30)
{
    // alert('Else if execute');
}

        // Ecriture raccourcie
        var resultat = (maVariable===30);
        //alert(resultat);

function maFonction ()
{
    //alert(1);
    //alert(2);
}

maFonction();

function maFonction (param1,param2)
{
    //alert(param1);
    //alert(param2);
}

maFonction(15,25);

//on peut appeler une fonction un nombre de fois illimité
//poss de faire un enchainement d'instructions


//on appelle la fonction
function maFonction (param1,param2)
{
    //Exécuté en deuxième
    var addition = param1+param2;
    //Exécuté en troisième
    return addition; //on stocke le résultat
}

//Exécuté en premier
var resultat = maFonction(15,30);
//Exécuté en quatrième
//alert(resultat);
document.getElementById('monDiv').innerHTML = resultat;
document.getElementById('monSpan').innerHTML = resultat;

//demander qqch à l'utilisateur
var prenom = prompt("quel est votre prénom?", "Hortense");//Hortense=valeur par défaut
//on stocke ds une variable ce que l'utilisateur nous a donné
document.getElementById('monDiv').innerHTML = prenom;
