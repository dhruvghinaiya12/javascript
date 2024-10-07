
const updateOutput = () => {
  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode = `<style>${document.getElementById("cssCode").value}</style>`;
  const jsCode = document.getElementById("jsCode").value;

  const output = document.getElementById("output").contentDocument;
  
  output.body.innerHTML = ""; 

  output.body.innerHTML = htmlCode + cssCode; 

  output.defaultView.eval(jsCode);
};

document.querySelectorAll("textarea").forEach(el => el.addEventListener("input", updateOutput));
updateOutput();

document.addEventListener('contextmenu', (e) => {
  e.preventDefault(); 
});

const camera = document.getElementById('camera');
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        camera.srcObject = stream;
    })
    .catch((err) => {
        console.error("Error accessing the camera: ", err);
    });

    

    