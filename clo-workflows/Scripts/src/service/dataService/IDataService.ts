import { CloRequestElement } from "../../model/CloRequestElement"
import { INote, NoteSource, NoteScope } from "../../model/Note"
import { IUser } from "../../model/User"
import { ItemAddResult } from "sp-pnp-js/lib/pnp"

export interface IDataService {
    fetchUser(): Promise<IUser>
    fetchClientProcesses(): Promise<Array<CloRequestElement>>
    fetchClientProjects(): Promise<Array<CloRequestElement>>
    fetchClientCompletedProjects(): Promise<Array<CloRequestElement>>
    fetchEmployeeActiveProcesses(employee: IUser): Promise<Array<CloRequestElement>>
    fetchClientActiveProjects(client: IUser): Promise<Array<CloRequestElement>>
    fetchWorks(): Promise<Array<CloRequestElement>>
    fetchRequestElementsById(ids: number[], listName: ListName): Promise<Array<CloRequestElement>>
    createRequestElement(requestElement: CloRequestElement, listName: ListName): Promise<CloRequestElement>
    createProject(projectData: {}): Promise<ItemAddResult>
    createProcess(processtData: {}): Promise<ItemAddResult>
    createWork(workData: {}): Promise<ItemAddResult>
    updateRequestElement(requestElement: CloRequestElement, listName: ListName): Promise<void>
    createNote(note: INote): Promise<ItemAddResult>
    fetchNotes(source: NoteSource, scope: NoteScope, sourceId: string, attachedClientId: string): Promise<Array<INote>>
    updateNote(note: INote): Promise<void>
    deleteNote(noteId: string): Promise<void>
}

export enum ListName {
    WORKS = "works",
    PROCESSES = "processes",
    PROJECTS = "projects",
    NOTES = "notes",
}
