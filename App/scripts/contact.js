import "./../scss/contact.scss";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const messageData = {
        name,
        email,
        message,
      };

      /*
      
      {
        name: "Allan",
        email: "allan@mail.com",
        message: "Hello!",
      }
      
      */


      try {
        
        const res = await fetch('http://localhost:3000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageData)
        });
        console.log("res");


        if(res.ok){
            alert("Your message was sent");
            form.reset();
        }else{
            const errorData = await res.json();
            alert(`Error: ${errorData.error}`)
        }
      } catch (error) {
        alert('An error ocurred while registering the userData');
        console.error(`Error: ${error}`);
        
      }

    });
  }
});
