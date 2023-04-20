export const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-xl md:text-5xl font-bold  md:font-extrabold  ${className}`}>{children}</h1>
    )
}

export const Heading2 = ({ children, className }) => {
    return (
        <h2 className={`font-bold sm:text-[32px] sm:leading-[38px] text-black ${className}`}>{children}</h2>
    )
}

export const Heading3 = ({ children, className }) => {
    return (
        <h3 className={` font-bold text-2xl leading-[30px] text-black ${className}`}>{children}</h3>
    )

}

export const Heading4 = ({ children, className }) => {
    return (
        <h3 className={` font-medium text-base leading-6  md:text-2xl ${className}`}>{children}</h3>
    )

}

