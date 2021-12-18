const underneathManager = (workers) => {
  console.log("line 4", workers);
  // get array of just Engineers
  const featuredEngineers = workers.filter((worker) => {
    if (worker.engineerGithub) {
      return true;
    } else {
      return false;
    }
  });

  console.log('line 12', featuredEngineers);

  // get array of just Interns
  const featuredInterns = workers.filter((worker) => {
    if (!worker.engineerGithub) {
      return true;
    } else {
      return false;
    }
  });

  console.log('line 23', featuredInterns);

  const featuredEngineerHtmlArr = featuredEngineers.map(
    ({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
      return `
<section class="card row" style="width: 18rem;">
<div class="">
<div class="card-body">
<h5 class="card-title">${engineerName}</h5>
<h6 class="card-subtitle mb-2 text-muted"><i class="icofont-diving-goggle"></i>Engineer</h6>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${engineerId}</li>
<li class="list-group-item">Email: ${engineerEmail}</li>
<li class="list-group-item">GitHub: ${engineerGithub}</li>
</ul>
</div>
</div>
</section>
       `;
    }
  );

  const featuredInternHtmlArr = featuredInterns.map(
    ({ internName, internId, internEmail, internSchool }) => {
      return `
<section class="card row" style="width: 18rem;">
<div class="">
<div class="card-body">
<h5 class="card-title">${internName}</h5>
<h6 class="card-subtitle mb-2 text-muted"><i class="icofont-graduate-alt"></i>Intern</h6>
<ul class="list-group list-group-flush">
<li class="list-group-item">ID: ${internId}</li>
<li class="list-group-item">Email: ${internEmail}</li>
<li class="list-group-item">School: ${internSchool}</li>
</ul>
</div>
</div>
</section>
       `;
    }
  );

  return `${featuredEngineerHtmlArr}
          ${featuredInternHtmlArr}`
};

module.exports = generatePage = (data) => {

  const [manager, ...workers] = data;

  console.log("line 91", workers);

  return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="./icofont/icofont.min.css" />
<link rel="stylesheet" href="../dist/style.css">
    <title>My Team Info</title>
</head>
<body>
    <header class="d-block p-2 bg-primary text-white text-center">
        <h1 class=" ">
            MY TEAM
        </h1>
    </header>
     <main class="container d-flex justify-content-center">
     <section class="card row" style="width: 18rem;">
     <div class="">
         <div class="card-body">
             <h5 class="card-title">${manager.managerName}</h5>
             <h6 class="card-subtitle mb-2 text-muted"><i class="icofont-coffee-mug"></i>Manager</h6>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${manager.managerId}</li>
             <li class="list-group-item">Email: ${manager.managerEmail}</li>
             <li class="list-group-item">Office Number: ${
               manager.managerOfficeNumber
             }</li>
         </ul>
         </div>
      </div>
 </section>
 ${underneathManager(workers)}
        </main>
</body>
</html>
    `;
};
