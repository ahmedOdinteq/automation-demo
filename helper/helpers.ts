export const randomText = (textLength = 8) => {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
    for (let i = 0; i < textLength; i++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    return `${string}`;
  };