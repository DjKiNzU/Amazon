function Rating(props: {
  rating: number
  numReviews?: number
  caption?: string
}) {
  const { rating, numReviews, caption } = props
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-start'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
    </div>
  )
}

export default Rating