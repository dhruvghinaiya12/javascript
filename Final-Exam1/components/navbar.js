export const navbar=()=>{
    return`
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtons" aria-controls="navbarButtons" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
            
                  <div class="collapse navbar-collapse justify-content-center" id="navbarButtons">
                    <div class="d-flex mx-auto gap-3">
                     <a href="/Final-Exam1/index.html"><button class="btn btn-primary me-2" id="home" type="button">HOME</button></a> 
                     <a href="/Final-Exam1/add.html"> <button class="btn btn-secondary" id="addData" type="button">ADD Questions</button></a>
                    </div>
                  </div>
                </div>
              </nav>
    `
}

const ApiMethods = {
  get: async () => {
      let request = await fetch(`https://server-6mw5.onrender.com/data`);
      let response = await request.json();
      return response;
  },
  post: async (students) => {
      let request = await fetch(`https://server-6mw5.onrender.com/data`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(students)
      });
      let response = await request.json();
      return response;
  },
}

export default ApiMethods;
