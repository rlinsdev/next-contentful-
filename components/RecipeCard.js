import Link from 'next/link'
import Image from 'next/image'
export default function RecipeCard({recipe}) {
  const {title, slug, cookieTime, thumbmail } = recipe.fields

  return (
    <div className="card">
      <div className="feature">
        <Image 
          src={'https:'+thumbmail.fields.file.url}
          width={thumbmail.fields.file.details.image.width}
          height={thumbmail.fields.file.details.image.height} />
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
