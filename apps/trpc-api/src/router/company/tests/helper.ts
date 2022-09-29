export function createInputFromObject(
  routerName: string,
  input: Record<string, any>
) {
  return `/trpc/${routerName}?batch=1&input=${encodeURI(
    JSON.stringify(input)
  )}`;
}
