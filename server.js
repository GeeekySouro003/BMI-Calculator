function Bmi()
{
    let w=document.getElementById('Weight').value;
    let h=document.getElementById('Height').value;
    let bmi= (w / (h/100 * h/100));
    var total=bmi.toFixed(2);
    document.getElementById('result').innerHTML="Your total BMI is "+ total

    if(total<=24.9){
        document.getElementById('message').innerHTML="You are Underweight"

    }
    else if(total>=25 && total<=29.9){
        document.getElementById('message').innerHTML="You are having Normal Weight"

    }

    else{
        document.getElementById('message').innerHTML="You are Overweight"
    }
}