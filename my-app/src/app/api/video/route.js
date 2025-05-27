export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get("videoId");

    if (!videoId) {
        return new Response(JSON.stringify({ error: 'Missing videoId parameter' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "snippet,contentDetails,statistics");
    url.searchParams.set("id", videoId);
    url.searchParams.set("key", process.env.API_KEY);

    try {
        const response = await fetch(url.toString());

        if (!response.ok) {
            const errorText = await response.text();
            console.error("YouTube API Error:", errorText);
            throw new Error("Failed to fetch video details");
        }

        const data = await response.json();

        console.log("Video Data:", data);

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
