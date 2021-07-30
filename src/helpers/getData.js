const apiUrl = 'https://api.unsplash.com';

const headers = {
    'Content-Type': 'application/json',
    'Accept-Version': 'v1',
    Authorization: 'Client-ID t4PYzJZsKRdzZRZFdtJ8LcO-lLSHEwwpJQsf2oWGYY8',
};

export async function getData(queryString, callback) {
    const url = `${apiUrl}/search/photos?query=${queryString}`;

    let response = await fetch(url, { headers });

    if (response.ok) {
        const json = await response.json();

        const apiData = json.results;
        const message =
            json.results.length > 0 ? '' : `There are no photos by keyword "${queryString}"`;

        callback({ apiData, message });
    } else {
        callback({
            apiData: [],
            message: `Ooops, something went wrong. Error: ${response.status}`,
        });
    }
}
