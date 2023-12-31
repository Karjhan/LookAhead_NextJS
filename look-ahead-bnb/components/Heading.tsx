
interface HeadingProps{
    title: React.ReactElement,
    subtitle?: string,
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={`${center ? "text-center" : "text-start"}`}>
            <div className="text-2xl font-bold text-orange-200">
                {title}
            </div>
            {subtitle && (
                <div className="font-light text-orange-200">
                    {subtitle}
                </div>
            )}
        </div>
    )
}

export default Heading
