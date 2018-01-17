import { ICloRequestElement } from "./../model/CloRequestElement"
import { IUserDto } from "../model/User"

export interface IDataAccess {
    fetchUser(): Promise<IUserDto>
    fetchEmployeeActiveProcesses(): Promise<Array<ICloRequestElement>>
    fetchEmployeeActiveProjects(): Promise<Array<ICloRequestElement>>
    fetchEmployeeActiveWorks(): Promise<Array<ICloRequestElement>>
    fetchClientActiveProjects(): Promise<Array<ICloRequestElement>>
}
