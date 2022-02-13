import React from 'react';
import SHOP_DATA from './shop.constant';
import CollectionPreview from '../../components/preview-collection/preview-collection';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shopPage">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                    ))
                }
            </div>
        )
    }

}

export default ShopPage;