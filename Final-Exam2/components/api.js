const ApiMethods = {
    get: async () => {
        let request = await fetch(`https://json-server-1-4pk4.onrender.com/products`);
        let response = await request.json();
        return response;
    },
    post: async (products) => {
        let request = await fetch(`https://json-server-1-4pk4.onrender.com/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(products)
        });
        let response = await request.json();
        return response;
    },
    delete: async (id) => {
        let request = await fetch(`https://json-server-1-4pk4.onrender.com/products/${id}`, {
            method: 'DELETE'
        });
        let response = await request.json();
        return response;
    },
    postsignup: async (signupdata) => {
        let request = await fetch(`http://localhost:3000/signupdata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupdata)
        });
        let response = await request.json();
        return response;
    },
    getsignup: async () => {
        let request = await fetch(`http://localhost:3000/signupdata`);
        let response = await request.json();
        return response;
    },
  
}

export default ApiMethods;
