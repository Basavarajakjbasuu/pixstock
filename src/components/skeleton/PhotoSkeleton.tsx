
interface SkeletonProp {
  type: string;
}

const PhotoSkeleton: React.FC<SkeletonProp> = ({ type }) => {

  const PhotoSkeleton = () => (
    <div className="column">
      <div className="skeleton" />
    </div>
  )

  if(type === 'card') return Array(15).fill(true).map((_,i) => <PhotoSkeleton key={i} />)
}

export default PhotoSkeleton