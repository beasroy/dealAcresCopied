
export default async function getProperty(id) {
    const response = await fetch(`https://dealacres.com/wp-json/wp/v2/properties/${id}`)
    console.log('API CALL')

    if (!response.ok){
        throw new Error('Failed to fetch Property details')
    }

    return await response.json()
}
