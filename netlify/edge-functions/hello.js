export default async () => {
  const response = await fetch("https://api.github.com/users/github");
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
