import React from 'react';

interface Column {
    title: string;
    list?: string[];
}
interface ColumnProps {
    columns: Column[];

}

const FooterColumn: React.FC<ColumnProps> = ({ columns }) => {

    return (

        <div className="relative bg-dark-blue gap-20 text-left w-full h-[500px] overflow-clip text-text-color-2">
            <div className="absolute top-20 gap-20 flex flex-col items-start w-[1122px] left-[159px]">
                <div className="w-full flex items-start self-stretch gap-[30px]">

                    {columns.map((title, list) => (
                        <>
                        <div className={`flex-1 gap-4 flex flex-col items-start flex-grow overflow-clip font-fjalla-one`}>

                            <p className="w-full text-base font-semibold leading-normal m-0">{title}</p>

                            <div className="w-full flex flex-col items-start self-stretch font-normal">
                                <div className="py-2 w-full flex items-start self-stretch">
                                    <p className="flex-1 text-sm leading-normal m-0">{}</p>
                                </div>
                            </div>

                        </div>

                        <div className={`flex-1 gap-4 flex flex-col items-start flex-grow overflow-clip font-fjalla-one`}>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>

    );
}