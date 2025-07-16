export async function GET(request) {
    const { searchParams } = new URL(request.url);
    
    const text = searchParams.get('text');
    const channel = searchParams.get('channel');
    const type = searchParams.get('type');
    const nextPageToken = searchParams.get('nextPageToken');
    
    if (!type || !text) {
        return new Response(JSON.stringify({ error: 'Missing text or type parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (text.length < 3) {
        return new Response(JSON.stringify({ error: 'Text must be at least 3 characters long' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("q", text);
    url.searchParams.set("type", type);
    if (channel) {
        url.searchParams.set("channelId", channel);
    }
    url.searchParams.set("maxResults", "20");
    if (type === "video") {
        url.searchParams.set("videoDuration", "medium");
    }
    if (nextPageToken) {
        url.searchParams.set("pageToken", nextPageToken);
    }
    url.searchParams.set("key", process.env.API_KEY);

    try {
        const response = await fetch(url.toString());

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
