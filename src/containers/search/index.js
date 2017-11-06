import React from 'react'
import './search.css';

export default () => (
  <div id="search">
    <div id="search-bar">
      <div id="search-bar-input">
        <input type="text" placeholder="Search keywords ..."/>
        <button id="search-button">Search</button>
      </div>
      <div id="search-bar-results">
        <div className="search-result">
          <div className="header"> Dummy result</div>
          Lorem ipsum dolor sit amet
        </div>
        <div className="search-result">
          <div className="header"> Dummy result</div>
          Maecenas in mi sed enim cursus hendrerit.
        </div>
        <div className="search-result">
          <div className="header"> Dummy result</div>
          Sed aliquam lacinia justo at consequat.
        </div>
      </div>
    </div>
    <div className="details">
      <div className="box">
        <div className="box-header">
          Transcript
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nibh posuere, sollicitudin metus at,
        pretium ipsum. Integer eget finibus ipsum, ut accumsan eros. Donec quis risus luctus, pellentesque magna nec,
        lacinia ante. Vestibulum sed tempus eros. Nunc ut sapien et mi vestibulum feugiat quis sed mauris. Cras ut
        fermentum tortor, et suscipit ante. Etiam venenatis risus congue nisl tincidunt lobortis. In lobortis ornare
        consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec ut
        vehicula nibh. Nunc bibendum risus eu finibus dictum. Fusce leo nunc, interdum non fringilla ut, auctor vitae
        nulla. Nam dui diam, congue eu vulputate ac, sagittis ut purus. Sed sollicitudin viverra imperdiet. Sed sed
        lobortis erat. Curabitur feugiat nulla arcu, sed tincidunt urna maximus a.

        Maecenas in mi sed enim cursus hendrerit. Cras eu consequat turpis, nec efficitur eros. Etiam id sapien quis
        nunc convallis euismod. In auctor a eros quis dictum. Sed aliquam lacinia justo at consequat. Nulla feugiat, leo
        eget blandit rhoncus, justo nibh egestas enim, et pharetra libero tortor eget ligula. Curabitur magna urna,
        venenatis eget justo vel, consectetur interdum dolor. Phasellus volutpat tellus et consequat facilisis. Aliquam
        et lorem scelerisque tortor faucibus varius vitae in arcu. Morbi fringilla erat quis gravida consectetur. In
        eget commodo dolor. Quisque consectetur faucibus neque quis gravida. Suspendisse nisl nulla, viverra a egestas
        placerat, ullamcorper et ex. Maecenas mollis tortor vitae odio condimentum, sed dignissim nulla aliquam.
        Vestibulum ac auctor velit, vel mattis risus.
      </div>
      <div className="box">
        <div className="box-header">
          Tags
        </div>
        Dummy Tag
      </div>
    </div>
  </div>
)
