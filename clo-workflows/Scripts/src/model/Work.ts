export type WorkType = "Music" | "Book" | "Article" | "Book Chapter" | "Image" | "Video" | "Website" | "Other"

export interface IWork {
    type: WorkType
    id: number
}

export interface IMusicWork extends IWork {
    course: string
    format: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    seriesTitle: string
    edition: string
    formatInformation: string
    callNumber: number
    URL: string
    hardCopyOwner: string
}

export interface IBookWork extends IWork {
    course: string
    format: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    edition: string
    formatInformation: string
    callNumber: number
    ISBN: number
    totalPages: number
    totalChapters: number
    URL: string
    hardCopyOwner: string
}

export interface IArticleWork extends IWork {
    course: string
    format: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    journalTitle: string
    edition: string
    formatInformation: string
    callNumber: number
    ISSN: number
    volume: number
    issue: string
    pageRange: string
    totalPages: number
    URL: string
    hardCopyOwner: string
}

export interface IBookChapterWork extends IWork {
    course: string
    format: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    bookTitle: string
    edition: string
    formatInformation: string
    callNumber: number
    ISBN: number
    pageRange: string
    totalPages: number
    URL: string
    hardCopyOwner: string
}

export interface IImageWork extends IWork {
    course: string
    format: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    albumTitle: string
    edition: string
    formatInformation: string
    callNumber: number
    URL: string
    hardCopyOwner: string
}

export interface IVideoWork extends IWork {
    course: string
    format: string
    title: string
    URL: string
    holdType: string
    holdFrom: string
    holdUnitl: string
    year: string
    director: string
    hardCopyOwner: string
}

export interface IWebsiteWork extends IWork {
    course: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    URL: string
    hardCopyOwner: string
}

export interface IOtherWork extends IWork {
    course: string
    format: string
    title: string
    author: string
    publisher: string
    yearPublished: string
    seriesTitle: string
    edition: string
    formatInformation: string
    callNumber: number
    URL: string
    hardCopyOwner: string
}



// export interface All2{
//     ArticleWork:  IArticleWork,
//     BookWork: IBookWork,
//     BookChapterWork : IBookChapterWork,
//     ImageWork : IImageWork,
//     OtherWork : IOtherWork,
//         VideoWork : IVideoWork,
//     WebsiteWork : IWebsiteWork,
//     MusicWork : IMusicWork
// }

// export class All {
//     ArticleWork =(props: IArticleWork)=>{}
//     BookWork = (props:IBookWork)=>{}
//     BookChapterWork = (props:IBookChapterWork)=>{}
//     ImageWork = (props: IImageWork) =>{}
//     OtherWork =(props:IOtherWork)=>{}
//     VideoWork = (props: IVideoWork)=>{}
//     WebsiteWork = (props: IWebsiteWork)=>{}
//     MusicWork = (props: IMusicWork)=>{}
    
// }



    
