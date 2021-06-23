import Link from 'next/link'

export const getStaticProps = async () =>{
 const res = await fetch("http://jsonplaceholder.typicode.com/users");
 const data = await res.json();

 return {
  props : {ninjas : data}
 }
}

function index({ninjas}) {
 return (
  <div>
   <h2>Ninjas</h2>
   {ninjas.map(ninja=>(
    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
     <a>
      <h3>{ninja.name}</h3>
     </a>
    </Link>
   ))}
  </div>
 )
}

export default index



