


module.exports = generatePage = (data) => {
    
    console.log('gen', data[0].managerName);
    console.log('engineerInfo', data[1].engineerId);
    console.log('engineerW', data[2].engineerId);


    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
             <h5 class="card-title">${data[0].managerName}</h5>
         <ul class="list-group list-group-flush">
             <li class="list-group-item">${data[0].managerEmail}</li>
             <li class="list-group-item">${data[0].managerId}</li>
             <li class="list-group-item">${data[0].managerOfficeNumber}</li>
         </ul>
         </div>
      </div>
 </section>
        </main>
</body>
</html>
    `
}