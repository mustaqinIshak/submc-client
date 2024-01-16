export default function TitlePage({title = "Untitle"}) {
    return(
        <div className="text-3xl md:text-5xl font-bold mb-12">
                <span>{title}</span>
            </div>
    )
} 