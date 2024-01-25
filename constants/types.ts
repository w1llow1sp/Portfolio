export type LinksDataType = {
    id: number,
    name: string,
    icon: JSX.Element,
    path: string,
}

export  type personalInfoDataType = {
    id: string
    title: string
    description: string
}

export type sectionAboutTextType = {
    header: {
        header: string
        spanName: string
    },
    buttonText: {
        text: string
    }
}

export type statsDataType = {
    id:string,
    no:string,
    title:string
}

export type detailsDataType ={
    id: number
    category: string
    icon: JSX.Element
    year: string
    title: string
    desc: string
}

export  type experienceAndEducationType = {
    header:string,
    details: detailsDataType[]

}

export type portfolioObjType = {
    id: number
    img: any
    title: string
    details: [
        {
            icon?: JSX.Element
            title: string
            desc: string
        },
        {
            icon?: JSX.Element
            title: string
            desc: string
        }]
}

export type portfolioDataType = {
    header: {
        header: string
        spanName:string
    },
    portfolio:portfolioObjType[]
}

export type contactDataType = {
    header: {
        header:string
        spanName:string
    },
    sectionText : {
        subheader:string
        text:string
    },
    forIconText: {
        email:string
        phone:string
    },
    formText : {
        name:string
        mail:string
        subject:string
        message:string
        btnText:string
    }
}

export type linksDataType = {
    id: number,
    name: string,
    icon: JSX.Element,
    path: string,
}

export type skillsItemType = {
    id: number
    title: string
    percentage: string
    img:any

}

export type skillsDataType  = {
    title:string,
    items: Array<skillsItemType>
}

export type themesType = {
    id: number
    img: any
    color: string
}

