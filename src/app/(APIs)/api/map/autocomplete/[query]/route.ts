export async function GET(
  request: Request,
  { params }: { params: { query: string } }
) {
    const data = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key`
    );
    
}
