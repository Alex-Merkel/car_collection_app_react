let token = 'ae18f61ff6b752340f3ff1d9182d95872f091942e9551a1a'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://vigorous-omniscient-leopon.glitch.me/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://vigorous-omniscient-leopon.glitch.me/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://vigorous-omniscient-leopon.glitch.me/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://vigorous-omniscient-leopon.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        
        if (!response.ok) {
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}