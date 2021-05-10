import { createContext, useContext } from "react"

export const videos = [{
    id: 'v=bx79vJP4zWI',
    creatorName: 'Abe Kislevitz',
    creatorThumbnail: "https://yt3.ggpht.com/ytc/AAUvwnimj_GJ01K6a406viYj42z7ByopupESdo204VQ7mg=s88-c-k-c0x00ffffff-no-rj",
    videoName: 'Daydreams - A Cinematic Roadtrip Adventure',
    thumbnail: 'http://i3.ytimg.com/vi/bx79vJP4zWI/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=bx79vJP4zWI',
    description: 'Take a road trip with me and my friends as we film our way through Panama to some fun surf. Utilizing GoPro MAX and HERO8, I do my best to show you how to film what you see in the video. ',
    category: 'Road Trip'
},
{
    id: 'v=jMwNXQFcBB4',
    creatorName: 'GoPro',
    creatorThumbnail: "https://yt3.ggpht.com/ytc/AAUvwngI0-Xv-Sh7KBghOS1PvoWNgMtPL1e_zIjXIiXG1UY=s88-c-k-c0x00ffffff-no-rj",
    videoName: 'GoPro Surf: Discovering the Mentawais in 4K',
    thumbnail: 'http://i3.ytimg.com/vi/jMwNXQFcBB4/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=jMwNXQFcBB4',
    description: '“It takes a special sort of mindset to truly discover something” - Captain Martin Daly. ',
    category: 'Exploration'
}
]

const VideoContext = createContext()

export default function VideoProvider({ children }) {
    return (
        <VideoContext.Provider value={{ videos }}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideo() {
    return useContext(VideoContext)
}