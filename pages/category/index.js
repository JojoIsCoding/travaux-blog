import Link from 'next/link'

export const getStaticProps = async () => {

    const res =  await fetch('https://still-dusk-49483.herokuapp.com/api/categories/');
    const data = await res.json();

    return {
        props : { categories: data}
    }
}

const Categories = ({ categories }) => {
  return (
    <div>
      Catégories :
      <ul>
        {categories.data.map(category => (
        <li>
        <Link href={'/' + category.id.toString() + '/' + category.attributes.Name.toString().toLowerCase()}
         key={category.id}>
        <a>{category.attributes.Name.toString().toLowerCase()}</a>
        </Link>
        </li> 
        ))}
      </ul>
    </div>
  )
}

export default Categories
