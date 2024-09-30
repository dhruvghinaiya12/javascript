const ApiMethods = {
    get: async () => {
        let request = await fetch(`https://jason-server-9k4h.onrender.com/students`);
        let response = await request.json();
        return response;
    },
    post: async (students) => {
        let request = await fetch(`https://jason-server-9k4h.onrender.com/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(students)
        });
        let response = await request.json();
        return response;
    },
    patch: async (id, students) => {
        let request = await fetch(`https://jason-server-9k4h.onrender.com/students/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(students)
        });
        let response = await request.json();
        return response;
    },
    delete: async (id) => {
        let request = await fetch(`https://jason-server-9k4h.onrender.com/students/${id}`, {
            method: 'DELETE'
        });
        let response = await request.json();
        return response;
    }
}

export default ApiMethods;
