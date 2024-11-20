import ArtCard from './ArtCard';

interface ArtGalleryProps {
  expanded?: boolean;
  data: any[];
}

const ArtGallery = async ({ expanded = false, data }: ArtGalleryProps) => {
  const artData = expanded ? data : data.slice(0, 12);

  return (
    <div className="grid p-10 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {artData.map(art => (
        <ArtCard art={art} key={art?.deviationid} />
      ))}
    </div>
  )
}

export default ArtGallery