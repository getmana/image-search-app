import PropTypes from 'prop-types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export const SearchResults = ({ data }) => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry>
                {data.map((photo) => {
                    return (
                        <img
                            src={`${photo.urls.raw}&w=200&dpr=2`}
                            style={{ width: '100%', display: 'block' }}
                            key={photo.id}
                            alt={photo.alt_description}
                        />
                    );
                })}
            </Masonry>
        </ResponsiveMasonry>
    );
};

SearchResults.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

SearchResults.defaultProps = {
    data: [],
};
