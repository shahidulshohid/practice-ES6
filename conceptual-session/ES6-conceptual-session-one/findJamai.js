const polapain = [
  { Name: "Abul", job: "sorkari", salary: 17000 },
  { Name: "Babul", job: "besorkari", salary: 25000 },
  { Name: "Kabul", job: "sorkari", salary: 21000 },
  { Name: "Habul", job: "besorkari", salary: 47000 },
  { Name: "Jabul", job: "sorkari", salary: 23000 },
  { Name: "Mabul", job: "besorkari", salary: 55000 },
];

//sorkari => 20000 or besorkari => 40;
const jamais = polapain.filter((pola) => (pola.job === 'sorkari' && pola.salary >=20000) ||  (pola.job === 'besorkari' && pola.salary >=40000));
// console.log(jamais)

const lottery = Math.floor(Math.random() * jamais.length)
console.log(jamais[lottery].Name)


// this is one of my proces it 
// const searchJamai = (polapain) => {
//   const jamais = polapain.filter(
//     (jamai) =>
//       (jamai.job === "sorkari" && jamai.salary >= 20000) ||
//       (jamai.job === "besorkari" && jamai.salary >= 40000)
//   );
//   const names = jamais.map((p)=> p.Name);
//   return names;
// };
// const result = searchJamai(polapain);
// console.log(result)

// const randomlySelectJamei = Math.floor(Math.random()*result.length) + 1;
// console.log(randomlySelectJamei)
