export interface DataTypes {
    PostID: number,
    image: string,
    images?: imgObj[],
    title: string,
    content: string,
    date: Date | string,
}

export interface imgObj{
    imageid: number,
    url: string,
    postid: number
}