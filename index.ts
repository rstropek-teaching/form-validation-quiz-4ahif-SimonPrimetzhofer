/*

    I do not use jQuery, because I have no clue why it does not work in this application.
    I tried but without any success.
    Probably it would be shorter and more efficient, but it also works this way...

           _..._
         .'     '.
        /  _   _  \
        | (o)_(o) |
         \(     ) /
         //'._.'\ \
        //   .   \ \
       ||   .     \ \       Linux? rm -rf * is the solution
       |\   :     / |
       \ `) '   (`  /_
     _)``".____,.'"` (_
     )     )'--'(     (
      '---`      `---`
*/

/*

    Function validateAll() calls every validation function returning a boolean value.
    The submit button gets enabled when every validation error-message is hidden.
    An error-message gets hidden, when the specific conditions are given

*/
function validateAll() :void {
    let submitButton:HTMLInputElement=<HTMLInputElement>document.getElementById("submit");
    if(validateName("firstName")==validateName("lastName")==validateNewsletter()==true){
        submitButton.disabled=false;
    }else{
        submitButton.disabled=true;
    }
}

/*

    Function for validating first- and lastname depending on which name is given as parameter
    Returns a boolean indicating if the error message is hidden or not.
    It furthermore sets the error message to visible or not depending on the value standing
    in the input field

*/
function validateName(name:string) :boolean {
    let value:string=(<HTMLInputElement>document.getElementById(name)).value;
    let hide:boolean=false;
    if(value!==""){
        hide=true;
    }else hide=false;
    (<HTMLInputElement>document.getElementById(name+"Mandatory")).hidden=hide;
    return (hide==false);
}
/*

    This function shows the email error message if the newsletter checkbox is selected
    and no email is entered.
    If the checkbox is not selected, there will be no failure when no email is entered.
    Otherwise yes.
    Returns a boolean that indicates whether the email error message is visible or not.

*/
function validateNewsletter() :boolean {
    let checkbox:HTMLInputElement=<HTMLInputElement>document.getElementById("newsletter");
    let email:string=(<HTMLInputElement>document.getElementById("email")).value;
    let show:string="none";
    if(checkbox.checked===true&&email==="")
        show="block";
    else show="none";
    (<HTMLInputElement>document.getElementById("emailMandatory")).style.display=show;       
    return (show==='none'&&checkbox.checked);
}
/*

    This function is supposed to show the textarea, if the user selects 'Other' in the drop-down.
    If any other possibility is selected, the textarea is not visible anymore.
    validateChannel() is not included to validateAll() because it has nothing to do with 
    enabling the submit button, so only the selection list is calling this function.

*/
function validateChannel() :void {
    let selection:string=(<HTMLInputElement>document.getElementById("mediaChannelSelect")).value;
    let show:string="block";
    if(selection==="Other")
        show="block";
    else show="none";
    (<HTMLInputElement>document.getElementById("otherMediaChannel")).style.display=show;
}