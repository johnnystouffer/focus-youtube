export async function GET(request) {
  // Create a URL object from the incoming request
  const { searchParams } = new URL(request.url);
  // Extract the value of the "videoId" from the URL
  const videoId = searchParams.get("videoId");

  // make this example data for each endpoint for
  // now, this will be used to test the API
  const data = {'message':'Success'}

  // right now we do not have anything to really send back
  // but when we do, we send a response
  // a Response has a status (200 if successful) and a
  // a JSON object with the data
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
