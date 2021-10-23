function templateIndex(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron">
    <h1 class="display-4">My Team</h1>
    </div>
    <div class= employeeContainer>
        <div class="card" style="width: 18rem;">
            <div class="card-body" style="background-color: red;">
              <h3 class="card-title">${data.name}</h3>
              <h4 class="card-text">${data.role}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: ${data.email}</li>
                <li class="list-group-item">Number: ${data.officeNumber}</li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body" style="background-color: red;">
              <h3 class="card-title">${data.name}</h3>
              <h4 class="card-text">${data.role}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: ${data.email}</li>
                <li class="list-group-item">Github: ${data.Github}</li>
            </ul>
          </div>
          <div class="card" style="width: 18rem;">
            <div class="card-body" style="background-color: red;">
              <h3 class="card-title">${data.name}</h3>
              <h4 class="card-text">${data.role}</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.id}</li>
              <li class="list-group-item">Email: ${data.email}</li>
              <li class="list-group-item">School: ${data.school}</li>
            </ul>
          </div>         
    </div>
</body>
</html>
    `
}

module.exports = templateIndex