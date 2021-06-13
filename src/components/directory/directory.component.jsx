import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'laptops',
          imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/laptops-egpus-category-500x500.jpg',
          id: 1
        },
        {
          title: 'headsets',
          imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/cd9237a6f61e604675e80e0c098f5a64/audio-category-558x587-desktop.jpg',
          id: 2
        },
        {
          title: 'others',
          imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/6db17f7284da185264c3018f26bef57a/capturecard&others-category-500x500.jpg',
          id: 3
        },
        {
          title: 'mices',
          imageUrl: 'https://assets3.razerzone.com/TpAuaGiAEXaS1KaQUlzzO-dTMkg=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhba%2Fhea%2F9086247895070%2FdeathadderV2pro-gallery--hero-1500x1000.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'keyboards',
          imageUrl: 'https://assets2.razerzone.com/images/pnx.assets/cd9237a6f61e604675e80e0c098f5a64/keyboards-category-558x587-desktop.jpg',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
