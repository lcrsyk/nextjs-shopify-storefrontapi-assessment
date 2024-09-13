
type AnnouncementBarProps = {
    title: string
}

export default function AnnouncementBar({
    title
}: AnnouncementBarProps) {
    return (
        <div className="bg-primary text-center text-xs text-white  p-1.5">
            {title}
        </div>
    )
}