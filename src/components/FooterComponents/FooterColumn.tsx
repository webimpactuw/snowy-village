import React from 'react';

interface Column {
    title: { label: string; url: string };
    list?: { label: string; url: string }[];
}
interface ColumnProps {
    columns: Column[];

}

const FooterColumn: React.FC<ColumnProps> = ({ columns }) => {
    return (
        <div className="relative bg-dark-blue text-text-color-2 w-full h-[500px] overflow-clip font-fjalla-one">
            <div className="relative md:absolute top-5 md:top-20 flex flex-row gap-4 md:gap-20 items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                {columns.map((column) => (
                    <div key={column.title.label} className="flex-1 gap-4 flex flex-col items-start">
                        <a href={column.title.url} className="text-base font-semibold text-white hover:text-gray-300">
                            {column.title.label}
                        </a>
                        {column.list && column.list.map((item) => (
                            <a key={item.label} href={item.url} className="text-sm text-white hover:text-gray-300">
                                {item.label}
                            </a>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FooterColumn;