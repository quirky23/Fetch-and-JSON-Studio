// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            let container = document.getElementById("container");
            let astronautListElements = `<div>${json.length} Astronauts</div>`;
            json = json.sort((a,b) => b.hoursInSpace - a.hoursInSpace);
            json.forEach((astronaut) => {
                let isActiveHtml = astronaut.active
                if (astronaut.active === true) {
                    isActiveHtml = `<span class="active">${astronaut.active}</span>`
                }
                astronautListElements += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>        
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `
            })
            container.innerHTML = astronautListElements;
        });
    });
});
/*
    
   <div class="bio">
      <h3>Mae Jemison</h3>
      <ul>
         <li>Hours in space: 190</li>
         <li>Active: false</li>
         <li>Skills: Physician, Chemical Engineer</li>
      </ul>
   </div>
   <img class="avatar" src="images/mae-jemison.jpg">
</div>
*/  
