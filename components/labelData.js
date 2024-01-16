'use client'

export default function LabelData({title,value}) {
    return(
        <div className="mb-2 flex gap-2">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">{title} :</label>
            <span className="text-gray-900 text-sm">
                {value}
            </span>
        </div>
    )
}