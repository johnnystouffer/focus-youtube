export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const playlistId = searchParams.get("playlistId");

    if (!playlistId) {
        return new Response(JSON.stringify({ error: 'Missing playlistId parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "snippet,contentDetails");
    url.searchParams.set("playlistId", playlistId);
    url.searchParams.set("maxResults", "50"); // Max allowed per page
    url.searchParams.set("key", process.env.API_KEY);

    try {
        const response = await fetch(url.toString());

        if (!response.ok) {
            const errorText = await response.text();
            console.error("YouTube API Error:", errorText);
            throw new Error("Failed to fetch playlist videos");
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
