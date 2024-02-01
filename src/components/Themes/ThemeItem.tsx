

type ThemeItemPropsType = {
    color: string,
    img: any,
    changeColor: (color: string) => void
}

const ThemeItem = ({color, img, changeColor}: ThemeItemPropsType) => {
    return (
        <img
             src={img}
             alt=""
             className="theme__img"
             onClick={()=>changeColor(color)}/>
    )


};

export default ThemeItem;