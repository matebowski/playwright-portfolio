export function generateUniqueUser() {
  const timestamp = Date.now();
  return {
    name: `User${timestamp}`,
    email: `test${timestamp}@example.com`,
  };
}
