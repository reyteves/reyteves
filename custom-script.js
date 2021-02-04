const artyom = new Artyom();

artyom.initialize({ lang: "en-US" });

function talk(element, message){
document.getElementById(element).addEventListener(
    "click",
    () => {

        artyom.shutUp();

        artyom.say(message, { lang: "en-US" });


    });
}

// HTML 5 button 
{
    let element = "Html5Btn"
    let message = "Rey knows how to use HTML tags to organize contents! He is cool and awesome!"
    talk(element, message );
}

// CSS 3 button 
{
    let element = "Css3Btn"
    let message = "Rey knows how to style websites using CSS 3! He is wonderful! and terrific!"
    talk(element, message );
}

// Bootstrap button 
{
    let element = "BootstrapBtn"
    let message = "Rey know how to create responsive websites using Bootsrap. He is wonderful! and awesome!"
    talk(element, message );
}

// Javascript button 
{
    let element = "JavascriptBtn"
    let message = "Rey knows how to program custom buttons and user interfaces using Javascript. He is cool! and awesome! "
    talk(element, message );
}

// Git button 
{
    let element = "GitBtn"
    let message = "Rey knows how to manage his codes using Git CLI. He is wonderful! and terrific!"
    talk(element, message );
}

// Github button 
{
    let element = "GithubBtn"
    let message = "Rey knows how to create websites using Github pages! He is cool! and terrific!"
    talk(element, message );
}

// Gitlab button 
{
    let element = "GitlabBtn"
    let message = "Rey knows how to create websites using Gitlab pages! He is cool! and amazing"
    talk(element, message );
}

// Php button 
{
    let element = "PhpBtn"
    let message = "PHP is a general-purpose scripting language especially suited to web development! Rey knows how to program using PHP. He is wonderful! and amazing!"
    talk(element, message );
}

// Cpanel button 
{
    let element = "CpanelBtn"
    let message = "Rey knows how to create websites with data base in Cpanel. He is cool! and amazing!"
    talk(element, message );
}

// MySQL button 
{
    let element = "MySQLBtn"
    let message = "My S Q L is an open-source database management system. Rey knows how to query and create databases using My S Q L. He is wonderful! and terrific!"
    talk(element, message );
}


// Heroku button 
{
    let element = "HerokuBtn"
    let message = "Rey knows how to use Heroku for databases!"
    talk(element, message );
}


function sendMail()
{

        let Name = document.getElementById("txtName").value;
        let Phone = document.getElementById("txtPhone").value;
        let Message = document.getElementById("txtMsg").value;
        let yourMessage = ` Name:  ${Name} \n\n Phone:  ${Phone} \n\n Message:  ${Message} \n\n`;
        let subject = document.getElementById("txtSubject").value;
        document.location.href = "mailto:reyjesusmirandateves@gmail.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(yourMessage);
}