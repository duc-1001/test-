const ModelOverlay = (props) => {
    const { children, handleCloseModel } = props
    return (
        <div className="w-full h-[100vh] fixed top-0 left-0 bg-gray-500 z-20 bg-opacity-30 max-h-[100vh] overflow-y-auto">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30">
                {children}
            </div>
            <div onClick={handleCloseModel} className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-gray-500 z-20 bg-opacity-30 cursor-pointer">

            </div>
        </div>
    )
}

export default ModelOverlay