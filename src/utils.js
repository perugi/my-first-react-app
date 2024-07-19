export default function getImageUrl(person) {
  return (
    "http://imgur.com/" +
    person.imageId +
    ".jpg"
  );
}
