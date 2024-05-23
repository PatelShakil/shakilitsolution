import { minidenticon } from 'minidenticons'
import { useMemo } from 'react'

const ProfileImage = (props: { username: string }) => {
    const username = props.username
    const svgURI = useMemo(
        () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(username)),
        [username]
    )
    return (<img src={svgURI} alt={username} className={"rounded-full bg-gray-900 shadow-lg h-24 w-24"}/>)
}
export default ProfileImage
