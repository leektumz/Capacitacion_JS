const d = document;

export default function sorteo() {
  const $Selector = d.getElementById("sorteo-caja");
  document.getElementById("sorteo").onclick = function run() {
      const arr = ["JS", "Python", "React", "PHP", "HTML", "C", "C++","Cobol","Node","Mongo"];
      alert(arr[Math.floor(Math.random() * arr.length)]);
  }
}