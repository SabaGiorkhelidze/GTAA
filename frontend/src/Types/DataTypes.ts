export interface DataTypes {
    PostID: number,
    postid?: number,
    image: string,
    images?: imgObj[] | undefined,
    title: string,
    content: string,
    date: Date | string,
}

export interface imgObj{
    imageid: number,
    url: string,
    postid: number
}