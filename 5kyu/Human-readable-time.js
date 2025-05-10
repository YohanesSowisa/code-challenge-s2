function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = num => String(num).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
console.log(humanReadable(359999))