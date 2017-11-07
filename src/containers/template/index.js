import React from 'react';
import style from './template.css';

const App = ({ children }) => (<div className="app">{children}</div>);

const Layout = ({
  children,
  direction = 'vertical',
  width,
  height,
  maxWidth,
  minWidth,
  minHeight,
  padding,
  wrap,
  style,
  ...rest
}) => {
  return (<div {...rest} style={{
    display: 'flex',
    padding: padding || 'inherit',
    flexDirection: direction === 'vertical' ? 'column' : 'row',
    alignItems: 'stretch',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    width,
    height,
    minHeight,
    maxWidth,
    minWidth,
    ...style
  }}>{children}</div>);
}

const Spacer = ({
  size,
  children,
  style,
  ...rest
}) => (<div
  {...rest}
  style={{
    flexGrow: typeof size === 'undefined' ? 1 : size,
    ...style
  }}>
  {children}
</div>);

const Search = ({
  onQueryChange
}) => (<div className="search">
  <input type="text" placeholder="Search" onKeyPress={onQueryChange}/>
</div>);

const Dropdown = ({
  children,
  icon,
  active,
  onToggleDropdown
}) => (<div className="dropdown">
  <button className={'dropdown-' + icon} onClick={onToggleDropdown}/>
  <div className={active ? "popup active" : "popup"}>{children}</div>
  <div className={active ? "popup-background" : ""} onClick={onToggleDropdown}/>
</div>);

const SearchResults = ({
  items,
  currentItem,
  onSelect
}) => (<Layout className="search-results" width="435px" height="100%" style={{ overflow: 'scroll' }}>
  {items.map((item) => (<SearchResult key={item._id} item={item} onSelect={onSelect} active={currentItem && (item._id === currentItem._id)}/>))}
  <Spacer/>
</Layout>);

const SearchResult = ({
  key,
  item,
  onSelect,
  active
}) => (<Layout className={"search-result " + (active ? "active" : "")} direction="vertical" padding="8px 15px" onClick={onSelect}>
  <h2>{item && item._source.fileName}</h2>
  {item && item.highlight.message.map((highlight) => (<Layout key={highlight} padding="0" direction="horizontal">
    <div className="highlight" dangerouslySetInnerHTML={{ __html: highlight }}/>
    <div className="duration">{item._source.startMs}</div>
  </Layout>))}
</Layout>);

const Transcription = ({
  item
}) => (<Layout className="transcription" direction="vertical">
  <div style={{ overflow: 'scroll', padding: '65px 88px' }}>
    <h1>{item._source.fileName}</h1>
    <h3>Some metadata here {item.createdAt}</h3>
    <div className="content">
      {item._source.raw.map((block) => (<Layout className="block" key={block._id} style={{ alignItems: 'start' }} direction="horizontal">
        <Layout direction="vertical" padding="0 30px 0 0">
          <div className="speaker">A:</div>
          <div className="meta">0:00 - 0:15</div>
        </Layout>
        <Layout direction="vertical">
          <p>I found this highly confusing as the specs only have :placeholder-shown and not ::placeholder</p>
        </Layout>
      </Layout>))}
    </div>
  </div>
</Layout>);

const Player = ({
  onPlay,
  onPause,
  playing,
  duration,
  progress,
  item
}) => (<div className="player">
  <Layout className="player-inner" direction="horizontal" style={{ alignItems: 'center' }}>
    <button className="play" onClick={playing ? onPause : onPlay}/>
    <div className="progress">
      <div className="bar" style={{ left: (100 - 100 * progress / duration) + '%' }}/>
    </div>
    <div className="duration">0:02</div>
  </Layout>
</div>);

export default ({
  onQueryChange,
  onToggleDropdown,
  currentDropdown,
  jobs,
  items = [{
    _id: "2",
    _source: {
      voiceId: '1',
      fileName: 'Pc_says_stuffs',
      startMs: 0,
      endMs: 0,
      message: "",
      raw: []
    },
    highlight: {
      message: ["good stuff <em>the</em> moment"]
    }
  }, {
    _id: "3",
    _source: {
      voiceId: '2',
      fileName: 'Pc_says_stuffs',
      startMs: 1,
      endMs: 2,
      message: "",
      raw: []
    },
    highlight: {
      message: ["good stuff <em>the</em> moment!"]
    }
  }],
  currentItem = {
    _id: "3",
    _source: {
      voiceId: '2',
      fileName: 'Pc_says_stuffs',
      startMs: 1,
      endMs: 2,
      message: "",
      raw: [
        { _id: 'abc' },
        { _id: 'def' },
        { _id: 'abc1' },
        { _id: 'def2' },
        { _id: 'abc3' },
        { _id: 'def4' },
        { _id: 'abc5' },
        { _id: 'def6' },
        { _id: 'abc7' },
        { _id: 'def8' }
      ]
    },
    highlight: {
      message: ["good stuff <em>the</em> moment!"]
    }
  },
  onSelect,
  onPlay,
  onPause,
  playing,
  duration,
  progress
}) => (<App>
  <Layout direction="vertical" height="100%">
    <Layout className="header" direction="horizontal" padding="0 15px">
      <Search onQueryChange={onQueryChange}/>
      <Spacer/>
      <Dropdown icon="plus" onToggleDropdown={onToggleDropdown} active={currentDropdown === 'upload'}></Dropdown>
      <Dropdown icon="mic" onToggleDropdown={onToggleDropdown} active={currentDropdown === 'record'}></Dropdown>
      <Dropdown icon="jobs" onToggleDropdown={onToggleDropdown} active={currentDropdown === 'queue'}></Dropdown>
    </Layout>
    <Layout height="100%" direction="horizontal">
      <SearchResults items={items} currentItem={currentItem} onSelect={onSelect}/>
      <Layout style={{ flexGrow:1 }}>
        <Transcription item={currentItem}/>
        <Player
          item={currentItem}
          onPlay={onPlay}
          onPause={onPause}
          playing={playing}
          duration={duration}
          progress={progress}/>
      </Layout>
    </Layout>
  </Layout>
</App>);
