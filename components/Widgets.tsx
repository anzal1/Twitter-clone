import React from 'react'
import { TwitterTimelineEmbed, TwitterVideoEmbed } from 'react-twitter-embed'

function Widgets() {
  const [input, setInput] = React.useState<string>('')

  return (
    <div className="col-span-2 mt-2 hidden max-h-screen overflow-y-scroll px-2 scrollbar-hide lg:inline">
      <TwitterVideoEmbed id="1486018635579953157" />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={'elonMusk'}
        options={{ height: 500 }}
        noScrollbar
/>
    </div>
  )
}

export default Widgets

{
  /* <div className="flex items-center space-x-2 rounded-full bg-gray-200 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none "
        />
        <SearchIcon className="h-5 w-5 cursor-pointer text-gray-400" />
      </div> */
}
