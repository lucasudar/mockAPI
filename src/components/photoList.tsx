import React, {useEffect} from 'react';
import {useAction} from "../hooks/useAction";
import {UseTypedSelector} from "../hooks/useTypedSelector";

const PhotoList: React.FC = () => {
  const {photos, loading, errors, page, limit} = UseTypedSelector((state) => state.photo);
  const {fetchPhotos, setPhotosPage} = useAction()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchPhotos(page, limit)
    // eslint-disable-next-line
  }, [page])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>{errors}</div>;
  }

  return (
    <div>
      {photos.map(p => <img key={p.id} src={p.thumbnailUrl} alt={p.title} style={{margin: 20}}/>)}
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {pages.map(p => (
          <div
            onClick={() => setPhotosPage(p)}
            style={{
              border: p === page
                ? '2px solid green'
                : '1px solid grey',
              padding: 10,
              margin: 10
            }}
            key={p}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;