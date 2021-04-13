import Link from 'next/link'
export default function RecipeCard({recipe}) {
  const {title, slug, cookieTime, thunbnail } = recipe.fields

  return (
    <div className="card">
      <div className="feature">
        {/* {img} */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookieTime} mins to make</p>
        </div>
        <div className="action">
          <Link href={'/recipes/'+slug}><a>Cookie this </a></Link>
        </div>
      </div>

    </div>
  )
}
