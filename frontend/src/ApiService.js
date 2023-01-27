var baseApiUrl = 'https://api.sampleapis.com/wines';

export async function getAllRedWines() {
    try {
        const response = await fetch(baseApiUrl + '/reds');
        return await response.json();
    } catch(error) {
        return [];
    }
}
