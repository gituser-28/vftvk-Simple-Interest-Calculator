function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t= document.getElementById("years").value;
    si=(p*r*t)/100;
    document.getElementById("result").innerHTML=si;
}
        